if (!customElements.get('footer-menu')) {
  customElements.define(
    'footer-menu',
    class FooterMenu extends HTMLElement {
      constructor() {
        super();
        this.mql = window.matchMedia('(min-width: 750px)');
        this.detailsElements = this.querySelectorAll('details');
        this.mql.addEventListener('change', (event) => this.toggleDetails(event.matches));
        this.toggleDetails(this.mql.matches);
      }

      toggleDetails(open) {
        this.detailsElements.forEach((details) => {
          open ? details.setAttribute('open', '') : details.removeAttribute('open');
        });
      }
    }
  );
}