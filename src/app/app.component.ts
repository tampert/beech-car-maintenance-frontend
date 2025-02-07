import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

// Import Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// mock data and models
import { MockDataService } from './services/mock-data.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    // Angular Material Modules
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'beech-car-maintenance-frontend';
  isSidenavOpened = true;

  maintenanceJobs: any[] = [];

  constructor(
    private mockDataService: MockDataService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isSidenavOpened = !result.matches;
      });
  }

  public ngOnInit(): void {
    this.mockDataService.getMaintenanceJobs().subscribe((jobs) => {
      this.maintenanceJobs = jobs;
    });
  }

  calculateTotalCost(job: any): number {
    const serviceCost =
      job.maintenanceJob.serviceHours * job.maintenanceJob.fixedRate;
    const sparePartsCost = job.spareParts.reduce(
      (sum: number, part: any) => sum + part.price,
      0
    );
    const vat = (serviceCost + sparePartsCost) * 0.2;
    return serviceCost + sparePartsCost + vat;
  }
}
