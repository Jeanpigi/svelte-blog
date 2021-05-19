<style>
  .About {
    text-align: justify;
  }

  .About-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .About > h1 {
    text-align: center;
  }

  .About > p {
    margin: 1rem;
    font-size: clamp(1.4rem, 2.5vw 1.8rem);
  }

  .About-content picture {
    margin: auto;
  }

  .About-content img {
    width: 150px;
    border-radius: 50%;
    margin: 1rem;
  }

  .About > span {
    font-size: clamp(1.3rem, 2.5vw, 2rem);
    padding: 2rem 0;
  }

  .About > span > a {
    font-size: clamp(1.4rem, 2.5vw, 2.3rem);
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
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="About">
  <h1><strong>¿Qué es Jbearp Blog?</strong></h1>
  <p>
    Jbearp es un blog dondé encontrarás contenido sobre tecnología e historias
    web, creado y desarrollado por mí, <strong>Jean Pierre Giovanni Arenas Ortiz</strong>
    con el objetivo de compartir conocimientos y escribir series web. Espero que
    te gusté y te doy la bienvenida.
  </p>
  <p>
    El Jbearp Blog existen dos pestañas importantes; Historias dondé se publican
    todo el contenido de series web y Technología dondé va todo el contenido de
    programación, diseño, video juegos y tecnología.
  </p>
  <div class="About-content">
    <picture>
      <img src="https://i.ibb.co/kxzzXdt/imagen.jpg" alt="imagen" border="0" />
    </picture>
    <code>
      Freelancer
    </code>
  </div>
  <p>
    <strong>¿Quién soy?</strong> Soy Especialista TIC para la Innovación Educativa,
    Ingeniero de sistemas y Frontend Developer Caqueteño con experiencia en el sector
    educativo. Busco colaborar en una posición en la creación de sitios web debido
    a mis logros y trabajos implementados, además de los certificados obtenidos de
    la plataforma Platzi.
  </p>
  <span>
    <strong>Para conocer un poco más sobre mi trabajo te dejo el siguiente enlace:</strong>
    <a href="https://jeanpigi.vercel.app/"><i class="fas fa-globe"></i></a>
  </span>
</div>
