import { Component, ElementRef, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-elevenlabs-convai',
  template: `
    <div class="widget-container">
      <elevenlabs-convai 
        [attr.agent-id]="agentId"
        variant="avatar"
        action-text=""
        start-call-text=""
        end-call-text="End interview"
        avatar-orb-color-1="6DB035"
        avatar-orb-color-2="F5CABB"
        disable-banner="true"
        class="convai-widget">
      </elevenlabs-convai>
    </div>
  `,
  styles: [`
    .widget-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
    }

    .convai-widget {
      display: block;
      width: 400px;
      height: 400px;
    }

    ::ng-deep elevenlabs-convai {
      position: static !important;
      width: 100% !important;
      height: 100% !important;
    }

    ::ng-deep .powered-by-text,
    ::ng-deep .powered-by-container,
    ::ng-deep [class*="powered-by"] {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  `],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElevenLabsConvaiComponent implements OnInit {
  @Input() agentId: string = 't7Uc8bKVhKmZSi7tpQBL';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Dynamically load the ElevenLabs script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }

  ngOnDestroy() {
    // Clean up the script when component is destroyed
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src.includes('elevenlabs.io/convai-widget')) {
        scripts[i].remove();
        break;
      }
    }
  }
} 