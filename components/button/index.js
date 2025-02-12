export class ButtonBack {
  constructor(parent) {
    this.parent = parent;
  }

  addListeners(listener) {
    document.getElementById('back-button').addEventListener('click', listener);
  }

  render(listener) {
    this.parent.insertAdjacentHTML(
      'beforeend',
      '<button type="button" id="back-button" class="btn btn-primary position-absolute top-0 start-0" >назад</button>',
    );
    this.addListeners(listener);
  }
}
