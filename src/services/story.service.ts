import { Injectable } from '@angular/core';
import { Story } from 'src/app/story/story';

@Injectable({
    providedIn: 'root',
  })

export class StoryService {

    private stories: Story[] = [
        {
            name: "Een rups in de Tuin",
            description: "Sofi heeft een rups gevonden in de tuin.......",
            fullStory: "Er was een meisje met haar familie en ze heet Sofi. Op een dag wil ze haar mama verrassen, ze bakt pannenkoeken. En daarna speelt Sofi buiten, ze speelt alleen. Toen keek ze achterom, en ze ziet een rups en ze vraagt aan mama of ze die rups mag houden of niet. Mama zegt ja, je mag hem houden. En ze was blij met haar nieuwe rups, ze speelt met rups in de tuin en toen was mama klaar met bakken. Daarna eet de rups samen met Sofi de pannenkoeken. Rups eet snel, zeg mama, ja alle rupsen eten snel. Sofi zegt o, dat wist ik niet. Maar ik wil weer met de rups spelen oke ? Dan geeft mam de rups een piepkleine ballon. Ja dat kan gebeuren. O, dat wist ik ook niet. Ga maar lekker met de rups spelen. Oke mam, dat ga ik doen en morgen gaan wij naar de speeltuin. Ja en nu ga ik met de rups spelen. O, ik wil je nog iets vragen want dan mag de rups morgen ook mee gaan ? Ja natuurlijk en nu ga jij met de rups spelen. Op een dag verandert de rups naar vlinder, maar Sofi wist dat niet. Mama wat gebeurt er? De rups verandert naar vlinder. Niet huilen, alle rupsen worden een vlinder. O, dat wist ik ook niet"
        },
        {
            name: "Zwemles",
            description: "Nanda en haar moeder gaan naar het zwembad. Daar krijgt Nanda zwemles.......",
            fullStory: `Nanda wilde leren zwemmen. Zij en haar moeder waren naar het zwembad gegaan om haar op te geven voor de eerste les (op donderdagmiddag). Ze had haar zwemtas al ingepakt voor het geval zij een proefles mocht bijwonen, met boterhammetjes en al. Zo, de jassen aan en samen op pad. Ze gingen lopend want het zwembad was twee straten van hun woonhuis.
                Mama koopt kaartjes aan de kassa. Die proefles dat mocht. Ze gingen samen naar de hokjes. Nanda deed haar zwempak aan en deed haar kleren in een hokje waarvan haar moeder de sleutel bij zich hield. 'Tot straks' zei mama 'ik loop vast naar het terras daar kan ik je zo zien zwemmen. En jij loopt door de douches heen even douchen en dan naar de juf.' Dat deed Nanda en ja, daar stond de juf al te wachten tot alle kinderen die aan de les deelnamen er waren. Nanda was de laatste dus ze konden beginnen.
                Allemaal een bandje pakken en om je middel doen. En twee om je armpjes. Dat deden alle kinderen. Een voor een sprongen ze in het water. Eerst maar een beetje drijven en spelen. En dan pakken we een plankje en daar gaan we ook een beetje mee drijven en ons evenwicht bewaren. Het water was lekker warm en de les was leuk en gezellig. Ze deden allemaal oefeningen en spelletjes in het water.          
                Er was zo een half uur voorbij, en Nanda zwaaide ook af en toe naar haar moeder die aan het kijken was op het terras. Nu was de les echt voorbij. Alle moeders kwamen met een handdoek aan en ze zeiden allemal tot volgende week donderdag juf.
                Toen ze waren aangekleed gingen ze op het terras hun boterhammen op eten. Ze kregen allemaal een beker met warme chocolademelk. Toen ze zo met z'n allen zaten vroegen hun moeders 'en hoe was jullie les?' 'Nou heel leuk volgende week willen we weer!'`
        },
        {
            name: "Kip",
            description: "Merlijn wil geen kip eten, die beestjes die ook buiten lopen. Jeroen aarzelt, want kip is toch wel heel lekker......",
            fullStory: `Jeroen en Merlijn zitten aan tafel. Papa en mama scheppen het eten op. Sla, en boontjes, rijst. En witte blokjes. Merlijn wijst op de witte blokjes. "Wat is dit?" vraagt hij. "Kip." Zegt mama. "Kip, die buiten lopen?" en hij wijst met zijn vinger naar buiten. "Ja, die buiten lopen." Verbijsterd kijkt Merlijn naar mama. Dat meent ze niet. "Ja," zegt papa, "kip kan je eten." Met een ruk schuift Merlijn zijn bord weg. Kip! Dat eet hij niet! Mam zegt niets. Ze pakt zijn bord en haalt de stukjes kip eraf. "Zo, van boontjes en rijst wordt je ook groot en sterk." En ze gaat door met eten.
                Jeroen kijkt naar het bord van Merlijn. En naar zijn eigen bord. Met boontjes, en rijst, en kip. Jeroen houdt veel van dieren. Om te aaien. Om mee te spelen. En om op te eten. Kip! Jeroen vindt kip het lekkerste dat er is. Maar hij vindt ze ook heel leuk. Nu weet hij niet meer wat hij doen moet. Eerst eet hij de sla op. Dan de boontjes. Daarna de rijst. Nu ligt alleen de kip nog op zijn bord. Hij denkt en hij denkt. Wat zal hij doen? Opeten? Of laten liggen.         
                Opeens heeft Jeroen een idee. "Mam", zegt hij, "en tijgers dan?" "Tijgers?" vraagt mama. "Ja, tijgers, die eten toch mensen?" "Ja, als tijgers honger hebben eten ze alles, ook mensen," zegt mama. Jeroen zucht opgelucht. Hij trekt zijn bord naar zich toe. Aan zijn vork prikt hij een stukje kip en steekt het in zijn mond. Mmmm, lekker!`
        }
    ]


    public getAllStories() : Story[] {
        return this.stories;
    }
}