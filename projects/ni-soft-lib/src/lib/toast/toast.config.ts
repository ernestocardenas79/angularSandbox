import { InjectionToken } from '@angular/core';
import { ToastData } from './toast.interface';


export interface ToastConfig {
  position?: {
    top: number;
    right: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

export const defaultToastConfig: ToastConfig = {
  position: {
    top: 20,
    right: 20,
  },
  animation: {
    fadeOut: 2500,
    fadeIn: 300,
  },
};

export const TOAST_DATA = new InjectionToken<ToastData>('TOAST_DATA');

export const TOAST_CONFIG_TOKEN = new InjectionToken<ToastConfig>('TOAST_CONFIG_TOKEN');
