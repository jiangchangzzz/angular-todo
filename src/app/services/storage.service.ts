import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): Object {
    return JSON.parse(localStorage.getItem(key));
  }

  clear(key: string) {
    this.setItem(key, '');
  }
}
