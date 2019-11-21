declare global {
    interface Window { RobotUtilsJs: any; }
}

export class PepperService {
    public robotUtils: any = window.RobotUtilsJs;
}