import { Injectable } from '@angular/core';

declare global {
    interface Window { RobotUtilsJs: any; }
}

@Injectable({
    providedIn: 'root',
  })

export class PepperService {
    public robotUtils: any = window.RobotUtilsJs;
}