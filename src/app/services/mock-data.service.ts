import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  fixData: any[] = [
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
        { name: 'Oil Filter', type: 'generic', price: 10.0 },
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
        { name: 'Brake Fluid', type: 'generic', price: 15.0 },
      ],
    },
  ];

  getCars() {
    return of([
      {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020,
        type: 'generic',
      },
      { id: 2, brand: 'Toyota', model: 'Yaris', year: 2020, type: 'custom' },
      {
        id: 3,
        brand: 'Toyota',
        model: 'Land Cruiser',
        year: 2020,
        type: 'custom',
      },
      { id: 4, brand: 'Honda', model: 'Civic', year: 2019, type: 'generic' },
      { id: 5, brand: 'Honda', model: 'Sedan', year: 2019, type: 'custom' },
      { id: 6, brand: 'Honda', model: 'Passpot', year: 2019, type: 'custom' },
      { id: 4, brand: 'Renault', model: 'Twingo', year: 2021, type: 'generic' },
      { id: 5, brand: 'Renault', model: 'Captur', year: 2021, type: 'custom' },
      { id: 6, brand: 'Renault', model: 'Zoe', year: 2021, type: 'custom' },
    ]);
  }

  getMaintenanceJobTypes() {
    return of([
      {
        id: 1,
        name: 'Oil Change',
        serviceHours: 2,
        price: 10.0,
        fixedRate: 50.0,
      },
      {
        id: 2,
        name: 'Engine Air Filter Replacement',
        serviceHours: 2.5,
        price: 10.0,
        fixedRate: 150.0,
      },
      {
        id: 3,
        name: 'Cabin Air Filter Replacement',
        serviceHours: 3.5,
        price: 10.0,
        fixedRate: 25.0,
      },
      {
        id: 4,
        name: 'Windshield Wiper Blades',
        serviceHours: 1.5,
        price: 10.0,
        fixedRate: 50.0,
      },
      {
        id: 5,
        name: 'Bulb Replacement',
        serviceHours: 1.5,
        fixedRate: 50.0,
        price: 10.0,
      },
      {
        id: 6,
        name: 'Oil Filter',
        type: 'generic',
        serviceHours: 1,
        price: 10.0,
        fixedRate: 5.0,
      },
      {
        id: 7,
        name: 'Fluid Check',
        type: 'generic',
        serviceHours: 1,
        price: 20.0,
        fixedRate: 5.0,
      },
      {
        id: 8,
        name: 'Battery Replacement',
        type: 'generic',
        serviceHours: 1,
        price: 30.0,
        fixedRate: 5.0,
      },
    ]);
  }
  getMaintenanceJobs() {
    return of([...this.fixData]);
  }

  getParts() {
    return of([
      {
        id: 0,
        name: 'Oil Filter',
        type: 'custom',
        price: 10.0,
        fixedRate: 5.0,
      },
      {
        id: 1,
        name: 'Engine Oil',
        type: 'custom',
        price: 30.0,
        fixedRate: 5.0,
      },
      {
        id: 2,
        name: 'Summer Tires',
        type: 'generic',
        price: 50.0,
        fixedRate: 5.0,
      },
      {
        id: 3,
        name: 'Winter Tires',
        type: 'generic',
        price: 50.0,
        fixedRate: 5.0,
      },
    ]);
  }
}
