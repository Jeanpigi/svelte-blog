<script>
  import analyticsTracking from "../utils/analytics.js";
</script>

<style>
  .Header {
    background-color: #24292e;
    color: #ffffff;
    padding-top: .1rem 0 0 0;
  }

  .Header-container {
    display: grid;
    grid-template-columns: minmax(auto,  320px);
    justify-content: center;
    align-items: center;
  }

  .Header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Header h1 {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Ubuntu", sans-serif;
    letter-spacing: 0.8px;
    cursor: pointer;
    margin-left: 5px;
  }

  .Header h1 span {
    display: block;
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: normal;
    margin-top: 0.3rem;
  }

  .Header ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .Header li {
    display: inline-block;
    margin-bottom: .5rem;
  }

  .Header a {
    text-decoration: none;
    font-weight: 300;
    font-size: 2rem;
  }

  .Header-logo {
    display: flex;
    align-items: center;
  }
  .Header-logo img {
    width: 7rem;
    cursor: pointer;
  }

  .Header-social i {
    width: 20px;
  }

  @media only screen and (min-width: 1024px) {
    .Header-container {
      grid-template-columns: minmax(auto, 1024px);
    }
  }
</style>

<header class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <img src="logo-512.svg" alt="logo" />
        <h1>JbearP Blog <span> Tecnología | Historias web</span></h1>
      </div>
      <div class="Header-social">
        <ul>
          <li>
            <a
              href="https://github.com/Jeanpigi"
              target="_blank"
              rel="noreferrer"
              on:click={analyticsTracking('github')}>
              <i aria-hidden class="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jean_pierre_giovanni/"
              target="_blank"
              rel="noreferrer"
              on:click={analyticsTracking('instagram')}>
              <i aria-hidden class="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/JePiGi/"
              target="_blank"
              rel="noreferrer"
              on:click={analyticsTracking('facebook')}>
              <i aria-hidden class="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCXNcM9LiqXfXgKU8HIwg9Xg"
              target="_blank"
              rel="noreferrer"
              on:click={analyticsTracking('youtube')}>
              <i aria-hidden class="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
