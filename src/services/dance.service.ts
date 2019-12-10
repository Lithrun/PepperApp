import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class DanceService extends PepperService {

    constructor() {
      super();
    }

    public dance() {
        this.robotUtils.onServices(function(ALMemory) {
        ALMemory.raiseEvent("DanceRobot", "ok")
        });
    }
}
