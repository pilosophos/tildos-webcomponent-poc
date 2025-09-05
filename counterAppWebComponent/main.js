class CounterAppWebComponent extends TildosWindow {
  constructor() {
    super();
  }

  /**
   * Initializes the web component when it's added to the page
   */
  async connectedCallback() {
    super.connectedCallback();

    // IMPORTANT: This HTML file should point to your webapp's template
    const template = await super.getTemplateContent('counterAppWebComponent/main.html');
    super.setBody(template);

    this.main(this.querySelector('.window-body'));
  }

  /**
   * main() is where your webapp's main business logic goes
   * @param {HTMLElement} root The div where your webapp is rendered to
   */
  main(root) {
    super.setTitle('Counter App (pure web component)');

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