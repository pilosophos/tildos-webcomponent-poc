class TildosWindow extends HTMLElement {

  /** @type {Function} */
  dragListener;

  constructor() {
    super();
  }

  async connectedCallback() {
    const templateContent = await this.getTemplateContent();

    const cloned = templateContent.cloneNode(true);
    this.prepend(cloned);

    const titlebar = this.querySelector('.tildos__titlebar');
    titlebar.addEventListener('mousedown', beginEvent => this.beginDrag(beginEvent));

    const close = this.querySelector('.tildeos__close');
    close.addEventListener('mousedown', e => e.stopPropagation());
  }

  async getTemplateContent() {
    const html = await fetch('tildos-window.html')
      .then(res => res.text())
      .then(htmlText => new DOMParser().parseFromString(htmlText, 'text/html'))
      .catch(err => console.error("Failed to fetch and parse the TildeosWindow template!", err));
    return html.querySelector('template').content;
  }

  /**
   * Start dragging the window.
   * Applies an event listener to the document, in case the mouse moves faster
   * than the titlebar can move (e.g. if the user right clicks during drag)
   * @param {MouseEvent} beginEvent
   */
  beginDrag(beginEvent) {
    if (this.dragListener) {
      document.removeEventListener('mousemove', this.dragListener);
    }

    const rect = this.getBoundingClientRect();
    const x = beginEvent.clientX - rect.left; //x position within the element.
    const y = beginEvent.clientY - rect.top;  //y position within the element.

    this.dragListener = (mouseEvent) => this.moveWindowToMouse(mouseEvent, this, x, y)
    document.addEventListener('mousemove', this.dragListener);
    document.addEventListener('mouseup', () => this.stopDrag());
  }

  /**
   * Moves the window to the mouse
   * @param {MouseEvent} mouseEvent 
   * @param {TildosWindow} tildosWindow
   */
  moveWindowToMouse(mouseEvent, tildosWindow, startX, startY) {
    tildosWindow.style.left = mouseEvent.clientX - startX + 'px';
    tildosWindow.style.top = mouseEvent.clientY - startY + 'px';
  }

  /**
   * Stop dragging and tear down the mouse move listener.
   */
  stopDrag() {
    document.removeEventListener('mousemove', this.dragListener);
    this.dragListener = null;
  }
}

window.customElements.define('tildos-window', TildosWindow);