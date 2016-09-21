import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageProjectsComponent } from './manage-projects.component';
import { ManagePersonnelComponent } from './manage-personnel.component';

import { AuthGuard } from '../auth-guard.service';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'projects',
                        component: ManageProjectsComponent
                    },
                    {
                        path: 'personnel',
                        component: ManagePersonnelComponent
                    },
                    {
                        path: '',
                        component: AdminDashboardComponent
                    }
                ]
            }
        ]
    }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);