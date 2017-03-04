import geolocation = require("nativescript-geolocation");
import { Injectable } from "@angular/core";


export interface PointInTime {
    location: any;
    currentTime:any;
}

const minimumUpdateTime = 1000 * 10;

@Injectable()
export class LocationService {
    private watchId: any;
    private locations: PointInTime[];
    private totalDistance: number;
    private totalTime: number;

    constructor() {
    }

    public enableLocation() {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    }

    public startSession() {

        this.initSessionVars();
        this.watchId = geolocation.watchLocation(
             (loc)=> {
                if (loc) {
                    console.log("Received location: " + loc);

                    this.updateSessionData(loc);

                }
            },
            function (e) {
                console.log("Error: " + e.message);
            },
            {desiredAccuracy: 3, updateDistance: 10, minimumUpdateTime: minimumUpdateTime});
        // Should update every 20 seconds according to Google documentation. Not verified.
    }

    private updateSessionData(loc) {
        let last_idx: number = this.locations.length - 1;
        if(last_idx>=0)
            this.totalDistance +=
                this.getDistance(loc, this.locations[this.locations.length - 1].location);
        this.locations.push({
            location : loc,
            currentTime: new Date().getTime()
        });
        console.log(`total distance ${this.totalDistance}`);
    }

    private initSessionVars() {
        this.locations = [];
        this.totalDistance = 0;
        this.totalTime = 0;
    }

    public stopSession() {
        if (this.watchId) {
            geolocation.clearWatch(this.watchId);
        }
    }

    private getDistance(loc1, loc2): any {
        const distance = geolocation.distance(loc1, loc2)
        console.log("Distance between loc1 and loc2 is: " + distance);
        return distance;
    }

    private getLastAvgSpeed(){
        if(this.locations.length<2)
            return;
        const total_events = this.locations.length;
        const lastPoint = this.locations[total_events-1];
        const beforePoint = this.locations[total_events-2];
        return this.getDistance(lastPoint.location ,beforePoint.location)/
            (lastPoint.currentTime-beforePoint.currentTime);

    }
}
