class Navbar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const nav = document.createElement('nav');
        const divLogo = document.createElement('div');
        const divLinks = document.createElement('div');
        const style = document.createElement('style');

        divLogo.innerHTML = 'Logo da LAWD'
        divLinks.innerHTML = `
            <a href="/">Sobre a liga</a>
            <a href="/projetos">Projetos</a>
            <a href="/membros">Membros</a>
            <a href="/contato">Contato</a>
        `

        nav.classList.add("navbar")
        divLogo.classList.add("logo")
        divLinks.classList.add("links")

        style.textContent = `
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 4px;
                background-color: purple;
                color: white;
            }

            .links {
                display: flex;
                gap: 12px;
            }
        `
        
        shadow.appendChild(style);
        shadow.appendChild(nav);
        nav.appendChild(divLogo);
        nav.appendChild(divLinks);
    }
}

customElements.define('lawd-navbar', Navbar);
