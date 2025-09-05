class TildosHtmlWebapp extends TildosWindow {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    super.setTitle(this.dataset.title);

    const template = await this.getTemplateContent(this.dataset.entrypoint);
    super.setBody(template);

    const script = document.createElement('script');
    script.src = this.dataset.scriptSrc;
    this.appendChild(script);
  }
}

window.customElements.define('tildos-html-webapp', TildosHtmlWebapp);