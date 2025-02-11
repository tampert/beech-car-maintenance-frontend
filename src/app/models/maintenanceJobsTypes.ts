export class MaintenanceJobTypes {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public price: number,
    public serviceHours?: undefined,
    public fixedRate?: undefined
  ) {}
}
