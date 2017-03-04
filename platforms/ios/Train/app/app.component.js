"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n            <StackLayout class=\"nav\">\n                <Button text=\"Train now!\" \n                    [nsRouterLink]=\"['/first']\"></Button>\n                <Button text=\"Build a plan\"\n                    [nsRouterLink]=\"['/second']\"></Button>\n            </StackLayout>\n\n            <router-outlet></router-outlet>\n        </StackLayout>\n  ",
        styles: ["\nStackLayout {\n  \n  background-color: white;\n}\n.nav{\n  \n}\nImage {\n  margin-top: 5;\n  margin-bottom: 20;\n}\nButton, TextField {\n  margin-left: 16;\n  margin-right: 16;\n  margin-bottom: 10;\n}\n.submit-button {\n  background-color: #CB1D00;\n  color: white;\n  margin-top: 20;\n}\n\n\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQTBDMUMsSUFBYSxZQUFZO0lBQXpCO0lBRUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxZQUFZO0lBeEN4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLDZYQVdUO1FBQ0EsTUFBTSxFQUFDLENBQUMsMFNBd0JWLENBQUM7S0FDRCxDQUFDO0dBQ1csWUFBWSxDQUV4QjtBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm5hdlwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRyYWluIG5vdyFcIiBcbiAgICAgICAgICAgICAgICAgICAgW25zUm91dGVyTGlua109XCJbJy9maXJzdCddXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnVpbGQgYSBwbGFuXCJcbiAgICAgICAgICAgICAgICAgICAgW25zUm91dGVyTGlua109XCJbJy9zZWNvbmQnXVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG4gICxzdHlsZXM6W2BcblN0YWNrTGF5b3V0IHtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm5hdntcbiAgXG59XG5JbWFnZSB7XG4gIG1hcmdpbi10b3A6IDU7XG4gIG1hcmdpbi1ib3R0b206IDIwO1xufVxuQnV0dG9uLCBUZXh0RmllbGQge1xuICBtYXJnaW4tbGVmdDogMTY7XG4gIG1hcmdpbi1yaWdodDogMTY7XG4gIG1hcmdpbi1ib3R0b206IDEwO1xufVxuLnN1Ym1pdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0IxRDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIwO1xufVxuXG5cbmBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbn1cblxuXG5cblxuIl19