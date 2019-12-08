import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';
import { Story } from 'src/app/story/story';

@Injectable({
    providedIn: 'root',
  })

export class StoryService {

    private stories: Story[] = [
        {
            name: "Een rups in de Tuin",
            description: "Beschrijving...",
            fullStory: "Er was een meisje met haar familie en ze heet Sofi. Op een dag wil ze haar mama verrassen, ze bakt pannenkoeken. En daarna speelt Sofi buiten, ze speelt alleen. Toen keek ze achterom, en ze ziet een rups en ze vraagt aan mama of ze die rups mag houden of niet. Mama zegt ja, je mag hem houden. En ze was blij met haar nieuwe rups, ze speelt met rups in de tuin en toen was mama klaar met bakken. Daarna eet de rups samen met Sofi de pannenkoeken. Rups eet snel, zeg mama, ja alle rupsen eten snel. Sofi zegt o, dat wist ik niet. Maar ik wil weer met de rups spelen oke ? Dan geeft mam de rups een piepkleine ballon. Ja dat kan gebeuren. O, dat wist ik ook niet. Ga maar lekker met de rups spelen. Oke mam, dat ga ik doen en morgen gaan wij naar de speeltuin. Ja en nu ga ik met de rups spelen. O, ik wil je nog iets vragen want dan mag de rups morgen ook mee gaan ? Ja natuurlijk en nu ga jij met de rups spelen. Op een dag verandert de rups naar vlinder, maar Sofi wist dat niet. Mama wat gebeurt er? De rups verandert naar vlinder. Niet huilen, alle rupsen worden een vlinder. O, dat wist ik ook niet"
        }
    ]


    public getAllStories() : Story[] {
        return this.stories;
    }
}