import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/respApi.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    this.paisService.getPaisPorRegion(this.regionActiva).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    });
  }

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary m-1 px-4'
      : 'btn btn-outline-primary m-1 px-4';
  }
}
