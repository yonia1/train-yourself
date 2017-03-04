import { AppComponent,  } from "./app.component";
import { FirstComponent } from './pages/build-plan.component';
import { SecondComponent } from './pages/train.component'
export const routes = [
    { path: "my-app", component: AppComponent },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent}
];