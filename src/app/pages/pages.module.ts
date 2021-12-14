import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        ProgressComponent,
        Grafica1Component,
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent
    ],
    exports: [
        ProgressComponent,
        Grafica1Component,
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        ComponentsModule        
    ]
})
export class PagesModule { }
