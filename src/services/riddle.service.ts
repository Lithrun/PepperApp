import { Injectable } from '@angular/core';
import { Story } from 'src/app/story/story';

@Injectable({
    providedIn: 'root',
  })

export class RiddleService {

    private riddle: Riddle[] = [
        {
            name: "Koe",
            soundFile: "cow.wav",
            imageFile: "cow.png"
        },
        {
            name: "Varken",
            soundFile: "pig.wav",
            imageFile: "pig.png"
        },
        {
            name: "Hond",
            soundFile: "dog.wav",
            imageFile: "dog.png"
        },
        {
            name: "Kat",
            soundFile: "cat.wav",
            imageFile: "cat.png"
        },
        {
            name: "Beer",
            soundFile: "bear.wav",
            imageFile: "bear.png"
        },
        {
            name: "Olifant",
            soundFile: "elephant.wav",
            imageFile: "elephant.png"
        },
        {
            name: "Schaap",
            soundFile: "sheep.wav",
            imageFile: "sheep.png"
        },

    ]


    public getRiddlePlaySet() : Riddle[] {
        const shuffled = this.riddle.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4) ;
    }
}

export class Riddle {
    public name: string;
    public soundFile: string;
    public imageFile: string;
}