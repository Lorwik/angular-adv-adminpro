import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebardService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo:  'Main', url: '/' },
        { titulo:  'Progressbar', url: 'progress' },
        { titulo:  'Graficas', url: 'grafica1' },
      ]
    }
  ];

  constructor() { }
}
