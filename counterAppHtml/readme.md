# Counter App (using partial HTML)
This implements the counter webapp with a partial HTML file and a JS file for the business logic.

It needs a little bit of boilerplate and isn't as flexible as implementing it as a web component directly.

## Getting the root div
Your JS gets injected into the page dynamically in the global scope, like JS scripts do normally when you hard code them into an HTML file.

That could be confusing if the user opens multiple instances of your app, so for convenience we select the root div that your app, and if you need to get the elements within your webapp, you can use `root.querySelector` and `root.querySelectorAll`.

### How it works
The line that actually acquires the root element is this:

```js
const root = document.getElementById(document.currentScript.dataset.rootId);
```

What's happening is that the `<tildos-html-webapp>` web component that loads your HTML and JS actually creates a unique ID for the root div before loading your JS. Then, when the script is loaded, the dynamically loaded `<script>` has its `data-rootId` changed to this ID, which the script can then reference.

This also means that the script can't be loaded as `type="module"`, since `document.currentScript` doesn't work with that. Therefore, you need to guard against variable leakage.

Maybe there's a workaround for this problem, but I haven't tried anything yet.

## Prevent variable leakage
The first and last lines of the JS, `(function() {` and `})();` encapsulates your code in a function, then runs it immediately. All the variables declared in this scope are inaccessible from the outside, so someone else's script can't use these variables, and your variables won't conflict with anyone else's.