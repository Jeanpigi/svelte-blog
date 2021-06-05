<svelte:head>
  <title>About</title>
</svelte:head>

<div class="About">
  <h1><strong>¿Qué es Jbearp Blog?</strong></h1>
  <div class="About-parrafo">
    <p>
      Jbearp es un blog dondé encontrarás contenido sobre tecnología e historias
      web, creado y desarrollado por mí, <strong
        >Jean Pierre Giovanni Arenas Ortiz</strong
      >
      con el objetivo de compartir conocimientos y escribir series web. Espero que
      te gusté y te doy la bienvenida.
    </p>
    <p>
      El Jbearp Blog existen dos pestañas importantes; Historias dondé se
      publican todo el contenido de series web y Technología dondé va todo el
      contenido de programación, diseño, video juegos y tecnología.
    </p>
  </div>

  <div class="About-content">
    <picture class="About-content-picture">
      <img src="https://i.ibb.co/kxzzXdt/imagen.jpg" alt="imagen" border="0" />
    </picture>
    <code> Freelancer </code>
  </div>

  <div class="About-parrafo">
    <p>
      <strong>¿Quién soy?</strong> Soy Especialista TIC para la Innovación Educativa,
      Ingeniero de sistemas y Frontend Developer Caqueteño con experiencia en el
      sector educativo. Busco colaborar en una posición en la creación de sitios
      web debido a mis logros y trabajos implementados, además de los certificados
      obtenidos de la plataforma Platzi.
    </p>
  </div>

  <div class="About-span">
    <span>
      <strong>Conoce más sobre mi trabajo:</strong>
    </span>
    <a class="About-span-button" href="https://jeanpigi.vercel.app/" target="_blank" rel="noopener">
      <i class="fas fa-globe" />
    </a>
  </div>
  
</div>

<style>

  :root {
    --clr-neon: hsl(317, 33%, 17%);
    --crl-bg: hsl(321, 22%, 82%);
  }
  .About {
    text-align: justify;
  }

  .About-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .About h1 {
    text-align: center;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  }

  .About-parrafo {
    margin: 1rem;
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    display: grid;
    flex-direction: column;
    gap: 3rem;
    font-weight: 200;
    line-height: 2.2rem;
    font-family: 'Tinos', serif;
  }

  .About-parrafo strong:hover{
    color: rgb(167, 3, 153);
  }

  .About-content-picture {
    transition: transform 1s;
  }

  .About-content-picture:hover {
    transform: rotate(20deg);
  }
  .About-content-picture img {
    width: 150px;
    margin: 1rem;
    border-radius: 50%;
    box-shadow: 0 20px 50px rgba(#1B0937, 0.3);
  }

  .About-span {
    font-size: clamp(1.5rem, 2.5vw, 1.7rem);
    padding: 2rem 0;
    font-weight: 200;
  }

  .About-span-button {
    font-size: clamp(1.4rem, 2.5vw, 2.3rem);
    display: inline-block;
    cursor: pointer;
    color: var( --clr-neon);
    padding: 0.25em 1em;
    position: relative;
  }

  .About-span-button::before {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--crl-neon);

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(2em);
    opacity: 0.7;
  }

  .About-span-button::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em var(--clr-neon);
    opacity: 0;
    transition: opacity 100ms linear;
    background: var(--clr-neon);
    z-index: -1;
  }

  .About-span-button:hover,
  .About-span-button:focus {
    color: var(--crl-bg);
  }

  .About-span-button:hover::before, 
  .About-span-button:focus::before {
    opacity: 1;
  }

  .About-span-button:hover::after,
  .About-span-button:focus::after {
    opacity: 1;
  }
  .About-content > code {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    text-align: center;
    font-family: menlo, inconsolata, monospace;
    color: #555;
    background-color: #f0f0f0;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
    box-shadow: 0 50px 70px rgba(#624F7D,0.12);
  }

  .About-content code::after {
    content: " 🖥️  ";
  }
</style>
