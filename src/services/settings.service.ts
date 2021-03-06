import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class SettingsService extends PepperService {
    private animatedSpeech: string = "AnimatedSpeech"
    private name: string = "PepperName";
    private friendName: string = "FriendName";
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

    public setPepperName(name: string): void {
        this.setSetting(this.name, name);
    }

    public getPepperName(): string {
        const name = this.getSetting(this.name)
        return name === null 
            ? "Peppper"
            : name;
    }

    public setFriendName(name: string): void {
        this.setSetting(this.friendName, name);
    }

    public getFriendName(): string {
        const name = this.getSetting(this.friendName)
        return name === null 
            ? "Vriendje"
            : name;
    }

}