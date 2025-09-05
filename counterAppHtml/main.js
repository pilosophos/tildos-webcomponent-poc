(function() { // <-- prevent variable leakage (see `counterAppHtml/readme.md`)

  // Gets the root div where your webapp's renders to. (see `counterAppHtml/readme.md`)
  const root = document.getElementById(document.currentScript.dataset.rootId);

  /** YOUR APP'S BUSINESS LOGIC BEGINS HERE */
  const counter = root.querySelector('#counter');
  const button = root.querySelector('#button');
  
  let clicks = 0;
  
  button.addEventListener('click', () => {
    clicks++;
    counter.textContent = clicks;
  });
  /** YOUR APP'S BUSINESS LOGIC ENDS BEGINS HERE */

})(); // <-- prevent variable leakage (see `counterAppHtml/readme.md`)