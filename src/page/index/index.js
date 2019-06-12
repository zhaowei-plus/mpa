import $ from 'jquery';
import { observable, autorun } from 'mobx';

// const { count, addCount, getCount } = require('src/utils/common.js');
import { count, addCount, getCount } from 'src/utils/es6.js';

class Index {
  constructor() {
    this.document = document;

    this.init();
    this.bindEvent();
  }

  init() {
    console.log('init');
    /**
     * 
     * 
     */
    console.log('count:', count);
    addCount(4);
    console.log('count:', count);
    console.log('count:', getCount());
  }

  bindEvent() {
    console.log('bindEvent');
  }
}

$(() => {
  new Index();
});