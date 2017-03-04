import { Component ,OnInit } from "@angular/core";
import { LocationService } from "../services/location.service";
@Component({
    selector: "second",
    template: `
        <StackLayout>
            Start your workout
            <Button text="Start work out" [nsRouterLink]="['/first']" class="link"></Button>
        </StackLayout>
    `
})
export class SecondComponent implements OnInit{


    constructor(private locationService: LocationService){

    }

    ngOnInit(){

        this.locationService.enableLocation();
    }


}