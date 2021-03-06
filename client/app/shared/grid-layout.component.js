"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var GridLayoutComponent = (function () {
    function GridLayoutComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    GridLayoutComponent.prototype.ngOnChanges = function () {
        this.rows = this.makeRows(this.personnel, 4);
    };
    // Group into rows of 4
    GridLayoutComponent.prototype.makeRows = function (arr, len) {
        var rows = [];
        if (arr) {
            for (var i = 0; i < arr.length; i += len) {
                var row = arr.slice(i, i + len);
                rows.push(row);
            }
        }
        return rows;
    };
    // Following methods duplicated in ListLayoutComponent
    GridLayoutComponent.prototype.onSelect = function (person) {
        var id = person.id;
        this.router.navigate(['/personnel', id, {
                query: this.listParams.query,
                layout: this.listParams.layout
            }]);
    };
    GridLayoutComponent.prototype.isSelected = function (person) {
        if (this.listParams && this.listParams.id) {
            return person.id === this.listParams.id;
        }
        return false;
    };
    GridLayoutComponent.prototype.makeCSList = function (arr) {
        return arr.reduce(function (pre, cur) {
            return pre + ', ' + cur;
        });
    };
    // Method duplicated in ProfilePreviewComponent
    GridLayoutComponent.prototype.checkImg = function (person) {
        if (person.img) {
            return person.img;
        }
        else {
            return 'http://placehold.it/300x300';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GridLayoutComponent.prototype, "personnel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GridLayoutComponent.prototype, "selectable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridLayoutComponent.prototype, "listParams", void 0);
    GridLayoutComponent = __decorate([
        // TODO: Remove this coupling to the personnel folder
        core_1.Component({
            selector: 'grid-layout',
            templateUrl: 'app/shared/grid-layout.component.html',
            styleUrls: ['app/shared/grid-layout.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], GridLayoutComponent);
    return GridLayoutComponent;
}());
exports.GridLayoutComponent = GridLayoutComponent;
//# sourceMappingURL=grid-layout.component.js.map