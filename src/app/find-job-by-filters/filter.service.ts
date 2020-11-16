import {Filter} from './Filter.interface';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class FilterService {
  filtersOther: Filter[] = [
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-filtros-salario.jpg', title: '35.000$ o más'},
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-filtros-jornada.jpg', title: 'Teletrabajo'},
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-filtros-teletrabajo.jpg', title: 'Media jornada'},
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-filtros-directivo.jpg', title: 'Directivo'}
  ];
  filtersLocation: Filter[] = [
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-ciudades-madrid.jpg', title: 'Madrid'},
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-ciudades-barcelona.jpg', title: 'Barcelona'},
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-ciudades-valencia.jpg', title: 'Valencia'},
    {img: 'https://media.infojobs.net/portales/ij/appgrade/pictures/pic-home-ciudades-bilbao.jpg', title: 'Bilbao'}
  ];

  getFiltersOther(): Filter[] {
    return [...this.filtersOther];
  }

  getFiltersLocation(): Filter[] {
    return [...this.filtersLocation];
  }
}
