class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();

    // crea un DOM encapsulado y aislado para evitar colisiones de estilos etc..
    this.attachShadow({ mode: "open" });
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "isakidev";
    const size = this.getAttribute("size") ?? "40";

    //? Al usar un DOM encapsulado ya no se usa: this.innerHTML sino this.shadowRoot.innerHtml

    const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%
        }
      </style>

      <img
        src=${url}
        alt="Avatar de ${username}"
        class"avatar"
      />
    `;
  }

  // cuando el componente se anada al DOM, se renderiza el contenido
  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
