import { PepperService } from './pepper.service';

export class VolumeService extends PepperService {

    service = "ALAudioDevice";

    public setVolume(volume: number) {
        if (volume > 0) {volume = 100};
        if (volume < 0) {volume = 0};

        // logic to set pepper volume
    }

    public getVolume(): number {
        return 0;
    }
}