class TildosIframeWebapp extends TildosWindow {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    super.setTitle(this.dataset.title);

    const iframe = document.createElement('iframe');
    iframe.src = this.dataset.src;
    super.setBody(iframe);
  }
}

window.customElements.define('tildos-iframe-webapp', TildosIframeWebapp);