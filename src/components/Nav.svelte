<script>
  export let segment;

  let active = false;

</script>

<nav class="Nav-container pulser_effect">
      <ul>
        <li>
          <a aria-current={segment === undefined ? "page" : undefined} href=".">
            <span>Inicio</span>
          </a>
        </li>
        <li>
          <a
            aria-current={segment === "about" ? "page" : undefined}
            href="about"
          >
           <span>About</span> 
          </a>
        </li>
        <li class="list">
          <a
            aria-current={segment === "histories" ? "page" : undefined}
            href="histories"
          >
          <span>Historias</span> 
          </a>
        </li>
        <li class="list">
          <a aria-current={segment === "tech" ? "page" : undefined} href="tech">
            <span>Technología</span>
          </a>
        </li>
        <li class="list">
          <a
            rel="prefetch"
            aria-current={segment === "blog" ? "page" : undefined}
            href="blog"
          >
           <span>Blog</span> 
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
</nav>

<style>
  .Nav-container {
    border-bottom: 1px solid rgb(167, 3, 153);
    background-color: #fafbfc;
    color: #191a22;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 60px;
  }

  .Nav-container ul {
    display: flex;
    width: 350px;
  }

  /* ul::after {
    content: "";
    display: block;
    clear: both;
  } */

  .Nav-container ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 60px;
    z-index: 2;
  }

  .Nav-container ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    
  }

  .Nav-container ul li a span {
    font-size: 1.4rem;
    font-weight: 300;
    position: relative;
    display: block;
    width: 55px;
    height: 55px;
    text-align: center;
    line-height: 65px;
    border-radius: 50%;
  }

  .Nav-container ul li.active a span {
    background: #24292e;
    color: #fff;
    transform: translateY(-27px);
  }

  .Nav-container ul li a span::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #24292e;
    filter: blur(5px);
    opacity: 0;
  }

  .Nav-container ul li.active a span::before {
    opacity: 0.5;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 3px;
    background-color: #564761;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 1em 1em 0;
    display: block;
    font-size: 1.4rem;
    font-weight: 300;
    transition: all 0.3s ease-in-out 0s;
    color: rgba(25, 26, 34, 0.7);
  }

  a:hover {
    color: rgba(25, 26, 34, 1);
  }

  a:visited {
    color: rgb(167, 3, 153);
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(#792CE2, 1); }
    100% { box-shadow: 0 0 0 40px rgba(#792CE2, 0); }
  }

  .pulser_effect {
    animation: pulse infinite 1s;
  }
</style>
