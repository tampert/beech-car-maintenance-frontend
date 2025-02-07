import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';

// Import Components
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { MaintenanceFormComponent } from './app/components/maintenance-form/maintenance-form.component';

// Define Routes
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'maintenance-form', component: MaintenanceFormComponent },
  { path: '**', redirectTo: 'dashboard' }, // Redirect unknown paths
];

// Bootstrap Application
bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Keep existing providers
    provideRouter(routes), // ✅ Provide routing here
  ],
}).catch((err) => console.error(err));
