"use strict";
var core_1 = require("@angular/core");
var location_service_1 = require("../services/location.service");
var SecondComponent = (function () {
    function SecondComponent(locationService) {
        this.locationService = locationService;
    }
    SecondComponent.prototype.ngOnInit = function () {
        this.locationService.enableLocation();
    };
    return SecondComponent;
}());
SecondComponent = __decorate([
    core_1.Component({
        selector: "second",
        template: "\n        <StackLayout>\n            Start your workout\n            <Button text=\"Start work out\" [nsRouterLink]=\"['/first']\" class=\"link\"></Button>\n        </StackLayout>\n    "
    }),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], SecondComponent);
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsaUVBQStEO0FBVS9ELElBQWEsZUFBZTtJQUd4Qix5QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBRXBELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBR0wsc0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGVBQWU7SUFUM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSwyTEFLVDtLQUNKLENBQUM7cUNBSXVDLGtDQUFlO0dBSDNDLGVBQWUsQ0FhM0I7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzZWNvbmRcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICBTdGFydCB5b3VyIHdvcmtvdXRcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN0YXJ0IHdvcmsgb3V0XCIgW25zUm91dGVyTGlua109XCJbJy9maXJzdCddXCIgY2xhc3M9XCJsaW5rXCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWNvbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvblNlcnZpY2Upe1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5lbmFibGVMb2NhdGlvbigpO1xuICAgIH1cblxuXG59Il19