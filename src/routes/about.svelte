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
    <div class="content"> 
      <span class="border">Freelancer</span> 
      <span class="wave">Freelancer</span>  
    </div>
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

  <div class="sharingan-container">
    <div class="sharingan">
      <div class="pupil"></div>
      <div class="iris"></div>
      <div class="tomoes">
        <div class="tomoe-area">
          <div class="tomoe"></div>
        </div>
        <div class="tomoe-area">
          <div class="tomoe"></div>
        </div>
        <div class="tomoe-area">
          <div class="tomoe"></div>
        </div>
      </div>
    </div>
  </div>
  
  
</div>

<style>

  :root {
    --clr-neon: hsl(317, 33%, 17%);
    --crl-bg: hsl(321, 22%, 82%);
    --tomoe-size: calc(400px / 6.5);
  }
  .About {
    margin: 1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
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
    margin-top: 2rem;
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
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-radius: 50px;
  }

  .content span::after {
    content: " 🖥️  ";
  }

.content span {
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  position: absolute;
  letter-spacing: 2pt;
}

.border {
  color: #F2F2F2;
  text-shadow: 
    -1px -1px 0 #764AF1,
    1px -1px 0 #764AF1,
    1px 1px 0 #764AF1,
    -1px 1px 0 #764AF1;
}

.wave {
  color: #9772FB;
  animation: wave 3s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% {
    clip-path: polygon(
      0% 47%,
      10% 48%,
      33% 54%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

.sharingan-container {
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.sharingan {
  width: 400px;
  height: 400px;
  border: calc(400px/30) solid #000;
  border-radius: 50%;
  background: hsl(0, 100%, 36%);
  box-shadow: 0 0 100px 10px #000 inset;
  position: relative;
}

.pupil {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 80px;
  background: #000;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 100px 10px #000;
}

.iris {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  border-radius: 50%;

}

.tomoes {
  height: 100%;
  width: 100%;
  animation: rotateIris 1.4s infinite;
}

.tomoe-area {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.tomoe {
  width: calc(400px / 6.5);
  height: calc(400px / 6.5);
  position: absolute;
  background-color: #000;
  border-radius: 50%;
  left: 50%;
  top: -16.6%;
  transform: translate(-50%);
}

.tomoe::before {
  content: "";
  position: absolute;
  top: -30.3%;
  left: 3.1%;
  width: calc(var(--tomoe-size) * 1.51);
  height: calc(var(--tomoe-size) * 1.69);
  border-radius: 50%;
  border-top: calc(var(--tomoe-size) / 2.6) solid #000;
  border-left: calc(var(--tomoe-size) / 9.7) solid transparent;
  transform: rotate(-35deg);
}

.tomoe-area:first-child {
  transform: translate(-50%, -50%);

}

.tomoe-area:nth-child(2) {
  transform: translate(-50%, -50%) rotate(120deg);
}

.tomoe-area:nth-child(3) {
  transform: translate(-50%, -50%) rotate(-120deg);
}

@keyframes rotateIris {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
