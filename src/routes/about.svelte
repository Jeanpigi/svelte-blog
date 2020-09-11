<style>
  .About-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .About-content img {
    width: 150px;
    border-radius: 50%;
    margin: 1em 2em 1em 0;
  }

  @media only screen and (max-width: 479px) {
    .About-content {
      display: grid;
    }

    code {
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="About">
  <h1><strong>¿Qué es Jbearp Blog?</strong></h1>
  <p>
    Jbearp es un blog dondé encontrarás contenido sobre tecnologías e historias
    web, creado y desarrollado por mí, <strong>Jean Pierre Giovanni Arenas Ortiz</strong>
    con el objetivo de compartir conocimientos y escribir series web. Espero que
    te gusté y te doy la bienvenida.
  </p>
  <p>
    El Jbearp Blog existen dos pestañas importantes; Histories dondé se publican
    todo el contenido de series web y Technologies dondé va todo el contenido de
    programación, diseño y aprendizajes sobre tecnología.
  </p>
  <div class="About-content">
    <img src="https://i.ibb.co/kxzzXdt/imagen.jpg" alt="imagen" border="0" />
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
</div>
