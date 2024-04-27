import View from './view';

import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const previousPageMarkup = `
    <button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
    `;

    const nextPageMarkup = `
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>
    `;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, there are other pages
    if (currentPage === 1 && numPages > 1) {
      return nextPageMarkup;
    }
    // Last page
    if (currentPage === numPages && numPages > 1) return previousPageMarkup;
    // Other page
    if (currentPage < numPages) {
      return previousPageMarkup + nextPageMarkup;
    }
    // Page 1, there are no other pages
    return '';
  }
}

export default new PaginationView();
