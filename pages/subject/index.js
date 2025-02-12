import {ButtonBack} from '../../components/button/index.js';
import {SubjectComponent} from '../../components/subjectCard/index.js';
import {MainPage} from '../main/index.js';
export class SubjectPage {
  constructor(parent) {
    this.parent = parent;
  }
  get pageRoot() {
    return document.getElementById('main-page');
  }

  getHTML() {
    return `
            <div id="main-page" class="d-flex position-relative flex-column w-100 h-100 flex-wrap align-items-center justify-content-center"><div/>
        `;
  }

  clickBack() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }

  render(data) {
    this.parent.innerHTML = '';
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);

    const Button = new ButtonBack(this.pageRoot);

    Button.render(this.clickBack.bind(this));

    const Subject = new SubjectComponent(this.pageRoot);
    Subject.render(data);
  }
}
