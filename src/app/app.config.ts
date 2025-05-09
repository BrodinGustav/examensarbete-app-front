import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';   //Aktiverar HttpClient
import { DatePipe } from '@angular/common';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideCharts(withDefaultRegisterables()), provideRouter(routes),provideHttpClient(), DatePipe] //Möjgligör för globalhantering
};
