# Counter App (implemented as a pure web component)
This implements the counter webapp as its own web component that inherits from TildosWindow.

This is the best way to implement your webapp, because if you define
window manager API methods in TildosWindow (such as `TildosWindow.setTitle()`),
you can just use them easily without going through any hoops (just call `super.setTitle()`).

## Boilerplate
Unfortunately, this has a fair amount of boilerplate. If you copy `main.js`, you will need to pay attention to:

```js
const template = await super.getTemplateContent('counterAppWebComponent/main.html');
```

and change the HTML path to the file containing your webapp's HTML template.

You will also replace the `main()` function with your app's business logic. `root` is the div where your app is rendered into, so you should use `root.querySelector()` to get child elements (as opposed to `document.querySelector()`).