import {slides} from './carousel.usecase.js';

export class CarouselCustom {
  constructor(parent) {
    this.parent = parent;
    this.slides = slides; // Массив слайдов
  }

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
          class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${slide.image}" class="d-block w-100" alt="${
            slide.alt
          }">
                
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>`,
    );
  }
}
