<script>
  export let segment;
</script>

<nav class="Nav-container pulser_effect">
  <div class="Nav-content">
    <div class="Nav-Social">
      <ul>
        <li>
          <a aria-current={segment === undefined ? "page" : undefined} href=".">
            Inicio
          </a>
        </li>
        <li>
          <a
            aria-current={segment === "about" ? "page" : undefined}
            href="about"
          >
            About
          </a>
        </li>
        <li>
          <a
            aria-current={segment === "histories" ? "page" : undefined}
            href="histories"
          >
            Historias
          </a>
        </li>
        <li>
          <a aria-current={segment === "tech" ? "page" : undefined} href="tech">
            Technología
          </a>
        </li>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === "blog" ? "page" : undefined}
            href="blog"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .Nav-container {
    border-bottom: 1px solid rgb(167, 3, 153);
    background-color: #fafbfc;
    color: #191a22;
    display: grid;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: 0 4px 16px rgba(#000000,0.25);
  }

  .Nav-content {
    display: flex;
    justify-content: space-between;
    padding-left: 0.1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
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
