import { Injectable } from '@angular/core';

let key_name = "showslide";
@Injectable()
export class ConfigProvider {
  constructor() {

  }

  getConfigData(): any{
    return localStorage.getItem(key_name);
  }

  setConfigData(): any{
    localStorage.setItem(key_name, "true");

  }
}
