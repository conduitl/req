"use strict";
var router_1 = require('@angular/router');
var personnel_manager_component_1 = require('./personnel-manager.component');
var personnel_list_component_1 = require('./personnel-list.component');
var person_detail_component_1 = require('./person-detail.component');
var personnelRoutes = [
    { path: 'personnel', component: personnel_manager_component_1.PersonnelManagerComponent, children: [
            {
                path: ':id', component: personnel_list_component_1.PersonnelListComponent
            },
            { path: ':id/details', component: person_detail_component_1.PersonDetailComponent },
            {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full'
            }
        ]
    }
];
exports.personnelRouting = router_1.RouterModule.forChild(personnelRoutes);
//# sourceMappingURL=personnel.routing.js.map