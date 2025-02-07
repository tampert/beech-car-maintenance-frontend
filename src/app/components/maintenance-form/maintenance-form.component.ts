import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { Car } from '../../models/car';
import { CommonModule } from '@angular/common';

import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-maintenance-form',
  imports: [
    CommonModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './maintenance-form.component.html',
  styleUrl: './maintenance-form.component.css',
})
export class MaintenanceFormComponent {
  customerName = new FormControl('');
  cars: Car[] = [];
  maintenanceJobsTypes: any[] = [];

  constructor(private mockDataService: MockDataService) {}

  public ngOnInit(): void {
    this.mockDataService.getCars().subscribe((cars) => {
      this.cars = cars;
    });

    this.mockDataService.getMaintenanceJobTypes().subscribe((jobTypes) => {
      this.maintenanceJobsTypes = jobTypes;
    });
  }
}
