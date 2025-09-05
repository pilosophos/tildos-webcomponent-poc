class CounterAppWebComponent extends TildosWindow {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    super.setTitle('Counter App (pure web component)');

    const template = await super.getTemplateContent('counterAppWebComponent/main.html');
    super.setBody(template);

    this.initWebapp(this.querySelector('.window-body'));
  }

  initWebapp(root) {
    const counter = root.querySelector('.counter');
    const button = root.querySelector('.button');
    
    let clicks = 0;
    
    button.addEventListener('click', () => {
      clicks++;
      counter.textContent = clicks;
    });
  }
}

window.customElements.define('counter-app', CounterAppWebComponent);