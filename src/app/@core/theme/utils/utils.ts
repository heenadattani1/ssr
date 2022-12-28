import { InjectionToken } from '@angular/core';

export const THEMES = new InjectionToken('THEMES');
export const ACTIVE_THEME = new InjectionToken('ACTIVE_THEME');

export interface Theme {
  name: string;
  properties: { [key: string]: string };
}

export interface ThemeOptions {
  themes: Theme[];
  active: string;
}
