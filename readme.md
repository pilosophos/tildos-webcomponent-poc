## Tildos Web Component window system proof-of-concept
This repo is a proof of concept of how webapps could be implemented in a
web component-based window system in the Tildos project.

The example webapp is a simple counter, where you click a button and it
counts up.

There are three implementations in three folders:
- `/counterAppWebComponent`, where it is completely implemented as its a web component.
- `/counterAppHtml`, where it relies on the `<tildos-html-webapp>` component to render an HTML file and inject its JS dynamically.
- `/counterAppIframe`, where it relies on the `<tildos-iframe-webapp>` component to inject an iframe.

Each folder has a readme with info about each implementation. I'm really tired now so if you want more info,
ask me on IRC or something.