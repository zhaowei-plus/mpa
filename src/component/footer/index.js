import $ from 'jquery';

class Footer {
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
    new Footer();
});