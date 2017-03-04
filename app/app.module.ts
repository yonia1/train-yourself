import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./router.config";
import { FirstComponent } from "./pages/build-plan.component";
import { SecondComponent } from "./pages/train.component";
import { LocationService } from "./services/location.service";

@NgModule({
  declarations: [AppComponent,FirstComponent,SecondComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule
    ,NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[LocationService]
})
export class AppModule {}
