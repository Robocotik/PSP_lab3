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
            <div style="background: rgb(255,255,255);
background: -moz-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(0,215,246,1) 26%, rgba(158,1,1,1) 63%, rgba(73,61,61,1) 100%);
background: -webkit-linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(0,215,246,1) 26%, rgba(158,1,1,1) 63%, rgba(73,61,61,1) 100%);
background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(0,215,246,1) 26%, rgba(158,1,1,1) 63%, rgba(73,61,61,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#493d3d",GradientType=1);
" id="main-page" class="d-flex w-100 h-100 flex-wrap align-items-center justify-content-center"><div/>
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
