import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor() { }

  // Para um teste sem API, decidi salvar as regioes no LocalStorage
  postRegion(regiao: any): void {
    let regioes = JSON.parse(localStorage.getItem('regioes')) || [];
    regioes.push(regiao);
    localStorage.setItem('regioes', JSON.stringify(regioes));
  }


  getRegions(): any[] {
    return JSON.parse(localStorage.getItem('regioes')) || [];
  }

  // Simula cidades cadastradas na base
  allCities(): any[] {
    return [
      { id: 1, city: 'São Paulo', state: 'SP' },
      { id: 2, city: 'Rio de Janeiro', state: 'RJ' },
      { id: 3, city: 'Salvador', state: 'BA' },
      { id: 4, city: 'Curitiba', state: 'PR' },
      { id: 5, city: 'Porto Alegre', state: 'RS' },
      { id: 6, city: 'Belo Horizonte', state: 'MG' },
      { id: 7, city: 'Manaus', state: 'AM' },
      { id: 8, city: 'Rio Branco', state: 'AC' },
      { id: 9, city: 'Fortaleza', state: 'CE' },
      { id: 10, city: 'Brasilia', state: 'DF' },
      { id: 11, city: 'Recife', state: 'PE' },
      { id: 12, city: 'Goiania', state: 'GO' },
      { id: 13, city: 'Vitoria', state: 'ES' },
      { id: 14, city: 'Natal', state: 'RN' },
      { id: 15, city: 'Palmas', state: 'TO' },
      { id: 16, city: 'Joaquim Nabuco', state: 'PB' },
      { id: 17, city: 'Porto Velho', state: 'RO' },
      { id: 18, city: 'Boa Vista', state: 'RR' },
      { id: 19, city: 'Cuiaba', state: 'MT' },
      { id: 20, city: 'Londrina', state: 'PR' },
      { id: 21, city: 'Campo Grande', state: 'MS' },
      { id: 22, city: 'Maceio', state: 'AL' },
      { id: 23, city: 'Belém', state: 'PA' },
      { id: 24, city: 'Macapá', state: 'AP' },
      { id: 25, city: 'São Luis', state: 'MA' },
      { id: 26, city: 'Teresina', state: 'PI' },
      { id: 27, city: 'Paranagua', state: 'PR' },
      { id: 28, city: 'Santa Catarina', state: 'SC' },
      { id: 29, city: 'Florianopolis', state: 'SC' },
      { id: 30, city: 'Guarulhos', state: 'SP' },
      { id: 31, city: 'Santos', state: 'SP' },
      { id: 32, city: 'São Bernardo do Campo', state: 'SP' },
    ]
  }

  // simula busca por termo em uma API
  searchCities(filter: string): object[] {
    // evita tentar buscar pelo objeto selecionado no combobox
    if (typeof filter !== 'string') return [];

    return this.allCities()
      .filter(city => city.city.toLowerCase().includes(filter.toLowerCase()))
      .slice(0, 5); // retorna os 5 primeiros
  }
}
