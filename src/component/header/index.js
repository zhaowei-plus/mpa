import $ from 'jquery';

class Header {
    constructor() {
        this.init();
        this.bindEvent();
    }

    init() {
        console.log('init');
    }

    bindEvent() {
        console.log('bindEvent');
    }
}

$(() => {
    new Header();
});