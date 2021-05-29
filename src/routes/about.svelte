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
    <picture>
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
      <strong>Para conocer un poco más sobre mi trabajo te dejo el siguiente enlace:</strong>
      <a href="https://jeanpigi.vercel.app/">
        <i class="fas fa-globe" />
      </a>
    </span>
  </div>
  
</div>

<style>
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

  .About-content picture {
    margin: auto;
    transform-origin: left top;
  }

  .About-content picture:hover {
    transform: rotate(20deg);
  }
  .About-content img {
    width: 150px;
    margin: 1rem;
    border-radius: 50%;
  }

  .About-span {
    font-size: clamp(1.5rem, 2.5vw, 1.7rem);
    padding: 2rem 0;
    font-weight: 200;
  }

  .About-span  a:link {
    font-size: clamp(1.4rem, 2.5vw, 2.3rem);
    color: #191a22;
  }

  .About-span a:visited {
    color: rgb(167, 3, 153);
  }

  .About-content > code {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    text-align: center;
    font-family: menlo, inconsolata, monospace;
    color: #555;
    background-color: #f0f0f0;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
  }

  .About-content code::after {
    content: " 🖥️  ";
  }
</style>
