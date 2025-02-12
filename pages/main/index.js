import {CarouselCustom} from '../../components/carousel/index.js';
import {SubjectPage} from '../subject/index.js';

export class MainPage {
  constructor(parent) {
    this.parent = parent;
  }
  get pageRoot() {
    return document.getElementById('main-page');
  }

  getHTML() {
    return `
            <div id="main-page" class="d-flex w-100 h-100 flex-wrap align-items-center justify-content-center"><div/>
        `;
  }


  render() {
    this.parent.innerHTML = '';
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);

    const carousel = new CarouselCustom(this.parent, this.pageRoot);
    carousel.render();
  }
}
