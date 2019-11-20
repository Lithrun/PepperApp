import RobotUtilsJs from './../lib/robotutilsjs.js';

/// A typescript version of the RobotUtilsJs
export class RobotUtils {
    public onServices(servicesCallback: Function, errorCallback: Function = null) {
        RobotUtilsJs.onServices(servicesCallback, errorCallback);
    }

    public subscribeToALMemoryEvent(event: string, eventCallback: Function, subscribeDoneCallback: Function) {
        RobotUtilsJs.subscribeToALMemoryEvent(event, eventCallback, subscribeDoneCallback);
    }

    public getRobotIp(): string {
        return RobotUtilsJs.robotIp;
    }

}
