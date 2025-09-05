(function() { // <-- prevents variables from leaking outside this script

  // The following line gets the root div where your webapp's content has been
  // cloned into.
  //
  // If you need to get elements in your webapp, use `root` and not `document`.
  // Otherwise you will be selecting elements from the global scope, which could
  // have unexpected behavior if the user launches your webapp multiple times.
  //
  // NOTE: getElementById does not work on root, so you must use querySelector
  //       to select children of the root by ID.
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

})(); // <-- prevents variables from leaking outside this script