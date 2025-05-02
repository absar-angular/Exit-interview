import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElevenLabsService {
  private readonly API_KEY = environment.elevenLabsApiKey;
  private readonly VOICE_ID = environment.elevenLabsVoiceId;
  private readonly BASE_URL = 'https://api.elevenlabs.io/v1';

  constructor() {}

  async convertSpeechToText(audioBlob: Blob): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.wav');
      
      const response = await fetch('https://api.elevenlabs.io/v1/speech-to-text', {
        method: 'POST',
        headers: {
          'xi-api-key': this.API_KEY
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Speech to text conversion failed');
      }

      const data = await response.json();
      return data.text;
    } catch (error) {
      console.error('Error converting speech to text:', error);
      throw error;
    }
  }

  async generateSpeech(text: string): Promise<Blob> {
    try {
      const response = await fetch(`${this.BASE_URL}/text-to-speech/${this.VOICE_ID}`, {
        method: 'POST',
        headers: {
          'xi-api-key': this.API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      });

      if (!response.ok) {
        throw new Error('Speech generation failed');
      }

      return await response.blob();
    } catch (error) {
      console.error('Error generating speech:', error);
      throw error;
    }
  }

  async processConversation(audioBlob: Blob): Promise<Blob> {
    try {
      // First convert speech to text
      const text = await this.convertSpeechToText(audioBlob);
      
      // Generate response text (you can integrate with a chatbot/AI here)
      const responseText = `I heard you say: ${text}. How can I help you with that?`;
      
      // Convert response text back to speech
      return await this.generateSpeech(responseText);
    } catch (error) {
      console.error('Error processing conversation:', error);
      throw error;
    }
  }
} 