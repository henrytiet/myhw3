// Custom element #2: prints "Hello World!" to the console when placed on the page.
// It never reads or changes the DOM.
class HelloWorld extends HTMLElement {
    connectedCallback() {
        console.log('Hello World!');
    }
}

customElements.define('hello-world', HelloWorld);
