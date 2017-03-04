import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
            <StackLayout class="nav">
                <Button text="Train now!" 
                    [nsRouterLink]="['/first']"></Button>
                <Button text="Build a plan"
                    [nsRouterLink]="['/second']"></Button>
            </StackLayout>

            <router-outlet></router-outlet>
        </StackLayout>
  `
  ,styles:[`
StackLayout {
  
  background-color: white;
}
.nav{
  
}
Image {
  margin-top: 5;
  margin-bottom: 20;
}
Button, TextField {
  margin-left: 16;
  margin-right: 16;
  margin-bottom: 10;
}
.submit-button {
  background-color: #CB1D00;
  color: white;
  margin-top: 20;
}


`]
})
export class AppComponent {
  // Your TypeScript logic goes here
}




