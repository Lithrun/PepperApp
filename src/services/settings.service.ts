import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class SettingsService extends PepperService {
    private animatedSpeech: string = "AnimatedSpeech"
    private volume: string = "Volume"

    private toggle(localStorageKey: string): void {
        const currentValue: string = this.getSetting(localStorageKey);
        currentValue === "true"
            ? this.setSetting(localStorageKey, "false")
            : this.setSetting(localStorageKey, "true");
    }

    private getSetting(localStorageKey: string): string {
        return localStorage.getItem(localStorageKey);
    }

    private setSetting(localStorageKey: string, value: string): void {
        localStorage.setItem(localStorageKey, value);
    }

    public isAnimatedSpeech(): boolean {
        return this.getSetting(this.animatedSpeech) === "true";
    }

    public toggleAnimatedSpeech(): void {
        this.toggle(this.animatedSpeech);
    }

}