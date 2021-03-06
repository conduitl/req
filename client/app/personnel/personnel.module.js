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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var toolbar_module_1 = require('./toolbar/toolbar.module');
var shared_module_1 = require('../shared/shared.module');
var personnel_manager_component_1 = require('./personnel-manager.component');
var personnel_list_component_1 = require('./personnel-list.component');
var profile_preview_component_1 = require('./profile-preview.component');
var person_detail_component_1 = require('./person-detail.component');
var quick_add_component_1 = require('./quick-add.component');
var personnel_routing_1 = require('./personnel.routing');
var PersonnelModule = (function () {
    function PersonnelModule() {
    }
    PersonnelModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                toolbar_module_1.ToolbarModule,
                shared_module_1.SharedModule,
                personnel_routing_1.personnelRouting
            ],
            declarations: [
                personnel_manager_component_1.PersonnelManagerComponent,
                personnel_list_component_1.PersonnelListComponent,
                profile_preview_component_1.ProfilePreviewComponent,
                person_detail_component_1.PersonDetailComponent,
                quick_add_component_1.QuickAddComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], PersonnelModule);
    return PersonnelModule;
}());
exports.PersonnelModule = PersonnelModule;
//# sourceMappingURL=personnel.module.js.map