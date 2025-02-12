import {slides} from './carousel.usecase.js';
import {SubjectPage} from '../../pages/subject/index.js';
export class CarouselCustom {
  constructor(root, parent) {
    this.root = root;
    this.parent = parent;
    this.slides = slides;
  }

  onClick = e => {
    const cardId = e.target.id;
    console.log(e.target.id);
    this.root.innerHTML = '';
    const subjectPage = new SubjectPage(this.root);
    subjectPage.render(slides[cardId]);
  };

  render() {
    const indicators = this.slides
      .map(
        (_, index) =>
          `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${
            index === 0 ? 'active' : ''
          }" aria-current="${
            index === 0 ? 'true' : 'false'
          }" aria-label="Slide ${index + 1}"></button>`,
      )
      .join('');

    const items = this.slides
      .map(
        (slide, index) =>
          `<div id="click-card-${slide.id}"  
          class="carousel-item position-relative ${
            index === 0 ? 'active' : ''
          }">
                <img src="${slide.image}" class="d-block w-100" alt="${
            slide.alt
          }">
                <button class=' position-absolute top-0 end-0' id="${
                  slide.id
                }" onclick = this.onClick>Перейти</button>
                <div class="carousel-caption h-100 d-flex flex-column justify-content-between align-items-center">
                    <h5 class="text-dark">${slide.title}</h5>
                    <p class="text-dark">${slide.description}</p>
                </div>
            </div>`,
      )
      .join('');

    this.parent.insertAdjacentHTML(
      'beforeend',
      `<div id="carouselExampleCaptions" class="carousel carousel-dark slide w-50 border border-3" data-bs-ride="false">
                <div class="carousel-indicators">${indicators}</div>
                <div class="carousel-inner">${items}</div>
                <button class="carousel-control-prev h-50 my-auto" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next h-50 my-auto" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>`,
    );

    const carouselItems = this.parent.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
      item.addEventListener('click', e => this.onClick(e));
    });
  }
}
