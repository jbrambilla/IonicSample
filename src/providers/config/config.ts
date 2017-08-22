import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }
  constructor() {

  }

  getConfigData(): any{

  }

  setConfigData(): any{
    
  }
}
