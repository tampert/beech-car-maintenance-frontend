import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  getCars() {
    return of([
      { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
      { id: 1, brand: 'Honda', model: 'Civic', year: 2019 },
    ]);
  }

  getMaintenanceJobTypes() {
    return of([
      { id: 1, name: 'Oil Change', serviceHours: 1.5, fixedRate: 50.0 },
      { id: 2, name: 'Oil Filter', type: 'Generic', price: 10.0 },
    ]);
  }
  getMaintenanceJobs() {
    return of([
      {
        id: 1,
        position: 1,
        car: { brand: 'Toyota', model: 'Corolla', year: 2020 },
        customer: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '123456789',
        },
        maintenanceJob: {
          name: 'Oil Change',
          serviceHours: 1.5,
          fixedRate: 50.0,
        },
        timeSlot: {
          startTime: '2024-03-23T10:00:00',
          endTime: '2024-03-23T12:00:00',
        },
        spareParts: [
          { name: 'Oil Filter', type: 'Generic', price: 10.0 },
          { name: 'Engine Oil', type: 'Brand-Specific', price: 30.0 },
        ],
      },
      {
        id: 2,
        position: 2,
        car: { brand: 'Honda', model: 'Civic', year: 2019 },
        customer: {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '987654321',
        },
        maintenanceJob: {
          name: 'Brake Replacement',
          serviceHours: 2.0,
          fixedRate: 75.0,
        },
        timeSlot: {
          startTime: '2024-03-24T09:00:00',
          endTime: '2024-03-24T11:00:00',
        },
        spareParts: [
          { name: 'Brake Pads', type: 'Model-Specific', price: 50.0 },
          { name: 'Brake Fluid', type: 'Generic', price: 15.0 },
        ],
      },
    ]);
  }
}
