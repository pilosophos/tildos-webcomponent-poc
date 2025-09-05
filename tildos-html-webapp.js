class TildosHtmlWebapp extends TildosWindow {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    super.setTitle(this.dataset.title);

    // It might be a good idea to cache the templates of each webapp
    // in some global registry, so if the user opens the same webapp twice,
    // so Tildos doesn't have to fetch and parse it again
    const templateContent = await this.getTemplateContent();

    const cloned = templateContent.cloneNode(true);
    super.setBody(cloned);

    const script = document.createElement('script');
    script.src = this.dataset.scriptSrc;
    this.appendChild(script);
  }

  async getTemplateContent() {
    const html = await fetch(this.dataset.entrypoint)
      .then(res => res.text())
      .then(htmlText => new DOMParser().parseFromString(htmlText, 'text/html'))
      .catch(err => console.error("Failed to fetch and parse content of a TildosHtmlWebapp!", err));
    return html.querySelector('template').content;
  }
}

window.customElements.define('tildos-html-webapp', TildosHtmlWebapp);