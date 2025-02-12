export class SubjectComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `<div style="width: 80%;" class = 'h-100  d-flex flex-column justify-content-between align-items-center'>
        <h1>${data.title}</h1>
        <h1>${data.tutor_FIO}</h1>
        <div class = 'd-flex justify-content-between align-items-center gap-2  w-100'>
            <div class = 'd-flex flex-column h-100 w-50'>
                <p>${data.tutor_statistic}</p>
                <a target = '_blank' href="${data.tutor_href}" >Ссылка на студиИзбу </a> 
            </div>
            
            <img src="${data.tutor_img}" class="img-fluid" style="object-fit: cover; max-height: 80dvh; min-width: 40%; max-width: 50%"  alt="Преподаватель"  />
        </div>
        </div>`;
  }
  render(data) {
    this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
  }
}
