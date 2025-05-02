import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ElevenLabsService } from '../services/elevenlabs.service';
import { ElevenLabsConvaiComponent } from '../components/elevenlabs-convai/elevenlabs-convai.component';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule,ElevenLabsConvaiComponent],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit, OnDestroy {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  isRecording = false;
  isProcessing = false;
  errorMessage: string | null = null;

  constructor(private elevenLabsService: ElevenLabsService) {}

  ngOnInit() {
    this.requestMicrophonePermission();
  }

  ngOnDestroy() {
    this.stopRecording();
  }

  async requestMicrophonePermission() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      });
      this.setupMediaRecorder(stream);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      this.errorMessage = 'Please enable microphone access to use the voice agent.';
    }
  }

  private setupMediaRecorder(stream: MediaStream) {
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm'
    });
    
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.audioChunks.push(event.data);
      }
    };

    this.mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
      this.audioChunks = [];
      await this.processAudio(audioBlob);
    };
  }

  toggleRecording() {
    if (!this.mediaRecorder) {
      console.error('MediaRecorder not initialized');
      return;
    }

    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  private startRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state === 'inactive') {
      this.errorMessage = null;
      this.isRecording = true;
      this.mediaRecorder.start();
    }
  }

  private stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
      this.isRecording = false;
      this.mediaRecorder.stop();
    }
  }

  private async processAudio(audioBlob: Blob) {
    this.isProcessing = true;
    try {
      const responseAudio = await this.elevenLabsService.processConversation(audioBlob);
      await this.playResponse(responseAudio);
    } catch (error) {
      console.error('Error processing audio:', error);
      this.errorMessage = 'Sorry, there was an error processing your voice. Please try again.';
    } finally {
      this.isProcessing = false;
    }
  }

  private async playResponse(audioBlob: Blob) {
    const audio = new Audio(URL.createObjectURL(audioBlob));
    audio.onended = () => {
      URL.revokeObjectURL(audio.src);
    };
    await audio.play();
  }
} 