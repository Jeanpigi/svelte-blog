<style>
  .About {
    text-align: justify;
  }

  .About-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .About > h1 {
    text-align: center;
  }

  .About > p {
    margin: 1rem;
    font-size: 1.4rem;
  }

  .About-content picture {
    margin: auto;
  }

  .About-content img {
    width: 150px;
    border-radius: 50%;
    margin: 1rem;
  }

  code {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 479px) {
    .About-content {
      display: grid;
    }

    code {
      text-align: center;
      font-size: 1.1rem;
    }
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
      Especialista TIC para la Innovación Educativa | Ingeniero de sistemas |
      Frontend Developer.
    </code>
  </div>
  <p>
    <strong>¿Quién soy?</strong> Soy Especialista TIC para la Innovación Educativa,
    Ingeniero de sistemas y Frontend Developer Caqueteño con experiencia en el sector
    educativo. Busco colaborar en una posición en la creación de sitios web debido
    a mis logros y trabajos implementados, además de los certificados obtenidos de
    la plataforma Platzi.
  </p>
  <p>
    <strong>Trayectoria: </strong>
    <li>Desarrollador frontend con tres años de experiencia</li>
    <li>Analista de Proyectos Educativos</li>
    <li>Sistematizador de Proyectos</li>
    <li>Auxiliar IT</li>
  </p>
  <p>
    🌱 Actualmente estoy aprendiendo sobre Deno, TypeScript, Python y Go.
  </p>
  <p>
    📫 Cómo contactarme: Actualmente, busco nuevas oportunidades que puedan
    ayudarme a mejorar como persona y profesional. Ya sea que necesites
    contactarme a través de mi red social.
  </p>
</div>
