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
import {
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Car } from '../../models/car';
import { MaintenanceJobTypes } from '../../models/maintenanceJobsTypes';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MockDataService } from '../../services/mock-data.service';
import { Part } from '../../models/part';

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
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './maintenance-form.component.html',
  styleUrl: './maintenance-form.component.css',
})
export class MaintenanceFormComponent {
  // Mock
  cars: Car[] = [];
  parts: Part[] = [];
  maintenanceJobsTypes: any[] = [];
  // Form
  maintenanceForm = new FormGroup({
    customerName: new FormControl<string | null>(''),
    formCarBrand: new FormControl<string | null>(''),
    formCarModel: new FormControl<string | null>(''),
    formCarPart: new FormControl<string | null>(''),
    formMaintenanceType: new FormControl<MaintenanceJobTypes | null>(null),
    formServicHours: new FormControl<number | null>(0, [Validators.min(0)]),
  });

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadData();
    this.maintenanceForm
      .get('formMaintenanceType')
      ?.valueChanges.subscribe((maintenanceType) => {
        if (maintenanceType) {
          this.maintenanceForm
            .get('formServicHours')
            ?.setValue(maintenanceType.serviceHours);
        }
      });

    this.maintenanceForm
      .get('formMaintenanceType')
      ?.valueChanges.subscribe(() => {
        this.totalCost; // Triggers recalculation
      });
  }

  private loadData(): void {
    this.mockDataService.getCars().subscribe((cars) => {
      this.cars = cars;
    });

    this.mockDataService.getMaintenanceJobTypes().subscribe((jobTypes) => {
      this.maintenanceJobsTypes = jobTypes;
    });

    this.mockDataService.getParts().subscribe((parts) => {
      this.parts = parts;
    });
  }
  onSubmit(): void {
    if (this.maintenanceForm.valid) {
      console.log(this.maintenanceForm.value);
    }
  }

  getMaintenanceTypes() {
    let car = this.cars.find(
      (item) => item.model === this.maintenanceForm.get('formCarModel')?.value
    );

    if (car?.type) {
      if (car?.type === 'generic') {
        return [
          ...new Set(
            this.maintenanceJobsTypes.filter((job) => job.type === car.type)
          ),
        ];
      }
      return [
        ...new Set(
          this.maintenanceJobsTypes.filter((job) => job.type !== 'generic')
        ),
      ];
    }

    return this.maintenanceJobsTypes;
  }

  get car() {
    return this.maintenanceForm.get('formCarModel') as FormControl;
  }

  get brands() {
    return [...new Set(this.cars.map((item) => item.brand))];
  }

  get models() {
    let brand = this.maintenanceForm.get('formCarBrand')?.value;
    return [
      ...new Set(
        this.cars
          .filter((item) => item.brand === brand)
          .map((item) => item.model)
      ),
    ];
  }

  get Costs() {
    if (!this.maintenanceForm.get('formCarModel')?.value) {
      return 0;
    }
    return (
      this.maintenanceForm.get('formMaintenanceType')?.value?.fixedRate ||
      this.maintenanceForm.get('formMaintenanceType')?.value?.price
    );
  }

  getParts() {
    let car = this.cars.find(
      (item) => item.model === this.maintenanceForm.get('formCarModel')?.value
    );
    return this.parts
      .filter((p) => p.type === car?.type)
      .map((item) => item.name);
  }

  get isCustom() {
    return true;
    let part = this.parts.find(
      (item) => item.name === this.maintenanceForm.get('formCarPart')?.value
    );
    return part?.type === 'custom';
  }

  get totalCost(): number {
    const maintenanceType = this.maintenanceForm.get(
      'formMaintenanceType'
    )?.value;

    if (!maintenanceType) return 0;

    const price = maintenanceType.price || 0;
    const serviceHours = maintenanceType.serviceHours || 0;
    const fixedRate = maintenanceType.fixedRate || 0;

    return price * serviceHours + fixedRate;
  }
}
