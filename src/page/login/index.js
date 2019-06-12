import $ from 'jquery';
import { observable, autorun } from 'mobx';

class Login {
  constructor() {
    this.document = document;

    this.init();
    this.bindEvent();
  }

  init() {
    this.$username = $('#username');
    this.$passwrod = $('#passwrod');
    this.$loginBtn = $('#loginBtn');
  }

  bindEvent() {
    let self = this;

    self.$loginBtn.on('click', (e) => {
      e.preventDefault();

      const user = {
        username: self.$username.val(),
        password: self.$passwrod.val(),
      };

      fetch(`http://zw.node.com:8080/login?username=${user.username}&password=${user.password}`)
        .then(function (response) {
          return response.json();
        })
        .then(function(response) {
          console.log('response:', response);

          if (response.success) {
            const { result } = response;
            if (result) {
              console.log('登录成功');
            }
          } else {
            console.log(response.error);
          }
        });
    });
  }
}

$(() => {
  new Login();
});
