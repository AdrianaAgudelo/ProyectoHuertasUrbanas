import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tablero-sensores',
  templateUrl: './tablero-sensores.component.html',
  styleUrls: ['./tablero-sensores.component.css']
})
export class TableroSensoresComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Temperatura', cols: 1, rows: 1 },
          { title: 'Humedad', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Temperatura', cols: 1, rows: 1 },
        { title: 'Humedad', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
