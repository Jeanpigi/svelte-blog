<script>
  import analyticsTracking from "../utils/analytics.js";
</script>

<header class="Header">
  <div class="Header-logo">
    <img src="logo-512.svg" alt="logo" />
  </div>
  <div class="Header-title">
    <h1>JbearP Blog</h1>
    <span> Tecnología | Historias web</span>
  </div>
  <div class="Header-social">
    <ul>
      <li>
        <a
          href="https://github.com/Jeanpigi"
          target="_blank"
          rel="noreferrer"
          on:click={analyticsTracking("github")}
        >
          <i aria-hidden class="fab fa-github" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/jean_pierre_giovanni/"
          target="_blank"
          rel="noreferrer"
          on:click={analyticsTracking("instagram")}
        >
          <i aria-hidden class="fab fa-instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/JePiGi/"
          target="_blank"
          rel="noreferrer"
          on:click={analyticsTracking("facebook")}
        >
          <i aria-hidden class="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCXNcM9LiqXfXgKU8HIwg9Xg"
          target="_blank"
          rel="noreferrer"
          on:click={analyticsTracking("youtube")}
        >
          <i aria-hidden class="fab fa-youtube" />
        </a>
      </li>
    </ul>
  </div>
</header>

<style>
  .Header {
    background-color: #24292e;
    color: #ffffff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Header-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: clamp(1.3rem, 2.5vw, 2rem);
  }

  .Header-title span {
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: normal;
  }

  .Header-social ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 1rem;
  }
  .Header a {
    text-decoration: none;
    font-weight: 300;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    color: white;
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
</style>
