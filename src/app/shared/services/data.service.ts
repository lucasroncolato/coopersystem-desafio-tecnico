import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storageSource: any;

  constructor() {
  }

  limpar(): void {
    this.storageSource = null;
  }

  setStorage(storage: any): void {
    this.storageSource = storage;
  }

  getStorage(): any {
    return this.storageSource;
  }

}
