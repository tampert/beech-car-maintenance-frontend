# BeechCarMaintenanceFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To install the project, run:

```bash
npm i
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Documentation

## Acceptance Criteria

The system must provide an interface where a user (e.g., an employee at Beech Car Maintenance) can:

1. Select a car (brand and model).
2. Choose a maintenance job (which affects the required service hours and spare parts).
3. See the breakdown of costs:
   - Base service fee (hourly rate, affected by weekend vs. weekday pricing).
   - Spare parts costs (retrieved dynamically from an external system or mocked for frontend).
   - VAT calculation.
   - Final total price.
4. Submit the maintenance request.
5. (Bonus) View past maintenance jobs.

## MoSCoW Prioritization

### Must-Have (M)

- UI to select car brand, model, and maintenance job.
- Display of service hours and spare parts cost breakdown.
- VAT calculation and final price display.
  Clear distinction between weekday and weekend rates.
- Mocked backend API to simulate getting spare parts prices.
- Angular Material UI for clean, modern design.

### Should-Have (S)

- A list of predefined maintenance jobs and cars to choose from.
- Form validation (e.g., required fields, numeric inputs).
- Basic navigation (dashboard, job details page).

### Could-Have (C)

- Ability to add new maintenance jobs dynamically.
- Light/dark theme toggle.
- Localization (multi-language support).
- Dockerize the app

### Won’t-Have (W)

- Real backend in PHP (as we are mocking data).
- Authentication/login system (unless needed for user roles).
- Detailed analytics on maintenance jobs.

### Plan or approach (plan of aanpak).

- Search git for previous assignments :)
- Ask ChatGPT and deepseek for help since there were no restraints about using AI.

- The main challenge there was no design, I had to learn angular again.
- Learn how to mock data in Angular for other projects.
- Learn how material design components work in Angular.
- Having fun trying out the different available components at https://material.angular.io/

- Creating a design/mock-up for the frontend.
- Extra added routes dashboard | maintenance form
- Develop by trial and error.
- Because of time pressure I noticed that my code is not optimized, a bit sloppy.
  F.e. I use the complete import of the MatCardModule
  import { MatCardModule } from '@angular/material/card';
  vs Specific hooks of the MatCard
  import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';

  I could have used app.modules.ts but I learned that standalone components import modules directly in its own @component metadata
