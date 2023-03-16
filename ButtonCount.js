class Mybutton extends HTMLElement {
    constructor() {
        super();

        let count = 0;
        let outp = `Times clicked: ${count}`;

        const shadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.addEventListener('click', e => { 
            count += 1;
            //alert(`Times clicked: ${count}`);
            document.querySelector('my-button').innerHTML = `Times clicked: ${count}`;
        });

        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                }
            </style>
            <button><slot></slot></button>
        `;

        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define('my-button', Mybutton);
