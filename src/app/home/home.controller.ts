module app.home {
  'use strict';

  export class HomeController {

    public isAngularRunning: boolean;

    /* @ngInject */
    constructor () {
        this.isAngularRunning = true;
    }
  }

}
