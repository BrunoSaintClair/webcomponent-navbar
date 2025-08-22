class Navbar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const nav = document.createElement('nav');
        const divLinkD = document.createElement('div');
        const divLinkC = document.createElement('div');
        const divLinkB = document.createElement('div');
        const divLinkA = document.createElement('div');
        const style = document.createElement('style');

        divLinkA.innerHTML = `
            <a href="/">Sobre a liga</a>
        `
        divLinkB.innerHTML = `
            <a href="/projetos">Projetos</a>
        `
        divLinkC.innerHTML = `
            <a href="/membros">Membros</a>
        `
        divLinkD.innerHTML = `
            <a href="/contato">Contato</a>
        `

        nav.classList.add("navbar")
        divLinkA.classList.add("links")
        divLinkB.classList.add("links")
        divLinkC.classList.add("links")
        divLinkD.classList.add("links")

        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;700&display=swap');

            @media (max-width: 600px) {
                .navbar {
                    padding: 12px;
                    min-height: 56px;
                }

                .links a {
                    font-size: 14px;
                }
            }

            .navbar {
                display: flex;
                position: fixed;
                justify-content: space-around;
                align-items: center;
                padding: 8px 16px;
                min-height: 48px;
                top: 0;
                right: 0;
                left: 0;
                z-index: 1000;
                background: linear-gradient(90deg, #7b2ff7, #b13ff5);
                color: white;
                font-family: 'MuseoModerno', sans-serif;
            }

            .links a {
                display: inline-block;
                color: white;
                text-decoration: none;
                font-weight: bold;
                font-size: 18px;
                transition: transform 0.1s ease-in-out;
            }

            .links a:hover {
                transform: scale(1.1);
            }
        `
        
        shadow.appendChild(style);
        shadow.appendChild(nav);
        nav.appendChild(divLinkA);
        nav.appendChild(divLinkB);
        nav.appendChild(divLinkC);
        nav.appendChild(divLinkD);
    }
}

customElements.define('lawd-navbar', Navbar);
