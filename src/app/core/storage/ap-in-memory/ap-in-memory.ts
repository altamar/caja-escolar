import { Injectable } from '@angular/core';
import { InMemoryKeys } from '../in-memory-key';
import { InMemoryGeneric } from '../in-memory-generic';


@Injectable()
export class ApInMemoryProvider {
  constructor() {}

  setItemByKey(key: InMemoryKeys, data: any): void {
    if (data !== undefined || data !== null) {
      sessionStorage.setItem(btoa(key), data);
    }
  }

  setItemByGenericKey<T>(inMemory: InMemoryGeneric<T>, data: any): void {
    if (data !== undefined || data !== null) {
      sessionStorage.setItem(btoa(inMemory.key), data);
    }
  }
  getItemByKey(key: InMemoryKeys): any {
    const cipherText = sessionStorage.getItem(btoa(key));
    if (cipherText === null) {
      return null;
    }
    return cipherText;
  }

  clearItem(key: string): void {
    sessionStorage.removeItem(btoa(key));
  }

  getAll(): any {
    return sessionStorage;
  }

  clearAll() {
    sessionStorage.clear();
  }

}