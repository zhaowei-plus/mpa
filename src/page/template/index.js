import $ from 'jquery';


class Template {
  constructor() {
    this.document = document;

    this.init();
    this.bindEvent();
  }

  init() {
    this.$replaceBtn = $(this.document).find('#replaceBtn');
  }

  bindEvent() {
    const bookmark = [
      {
        fileName: '链接图片',
        fileUrl: 'http://uploads.oh100.com/allimg/1709/117-1FZ5102542-52.jpg',
        fileIcon: '',
      },
    ];
    const bkDom = this.document.querySelector('.bookmark');
    this.$replaceBtn.on('click', () => {
        this.enderABookMark(bookmark, bkDom);
    });
  }

  enderABookMark(bookmark = [], dom) {
    if (!dom) {
      return null;
    }

    bookmark.forEach((d) => {
      const { fileName, fileUrl, fileIcon } = d;
      const aDom = document.createElement('a');
      aDom.href = fileUrl;
      aDom.innerHTML = `${fileName}&nbsp;`;
      dom.parentNode.appendChild(aDom);
    });
    dom.parentNode.removeChild(dom);
  };
}

$(() => {
  new Template()
});