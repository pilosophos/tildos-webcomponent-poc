class TildosHtmlWebapp extends TildosWindow {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    super.setTitle(this.dataset.title);

    const root = document.createElement('div');
    root.id = window.crypto.randomUUID();
    const template = await this.getTemplateContent(this.dataset.entrypoint);
    root.appendChild(template);

    super.setBody(root);

    const script = document.createElement('script');
    script.src = this.dataset.scriptSrc;
    script.dataset.rootId = root.id;
    this.appendChild(script);
  }
}

window.customElements.define('tildos-html-webapp', TildosHtmlWebapp);