import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
// mock data and models
import { MockDataService } from '../../services/mock-data.service';
import { Car } from '../../models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cars: Car[] = [];
  dataSource: any[] = [];

  displayedColumns: string[] = [
    'position',
    'name',
    'car',
    'jobName',
    'jobCost',
  ];

  constructor(
    private mockDataService: MockDataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.mockDataService.getMaintenanceJobs().subscribe((jobs) => {
      this.dataSource = jobs;
    });

    this.mockDataService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }
  getTotalCost(element: any): number {
    if (!element || !element.maintenanceJob) {
      return 0;
    }
    return this.calculateTotalCost(element);
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
  goToMaintenanceForm() {
    this.router.navigate(['/maintenance-form']);
  }
}
