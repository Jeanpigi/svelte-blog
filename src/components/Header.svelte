<script>
  import analyticsTracking from "../utils/analytics.js";
</script>

<style>
  .Header {
    background-color: #24292e;
    color: #ffffff;
    padding: 1em 0 0 0;
  }

  .Header-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: space-between;
    align-items: center;
  }

  .Header-content {
    display: flex;
    align-items: center;
  }

  .Header h1 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.8px;
    cursor: pointer;
  }

  .Header h1 span {
    display: block;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: normal;
    margin: 0.3em 0 0 0;
  }

  .Header ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .Header li {
    display: inline-block;
    margin: 0 0.5em 0 0;
  }

  .Header a {
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
  }

  .Header-logo img {
    width: 100px;
  }

  .Header-social img {
    width: 20px;
  }
</style>

<header class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <img src="logo-512.svg" alt="logo" />
        <h1>Jean Pierre Giovanni Arenas Ortiz</h1>
        <span>Frontend Developer | Ingeniero de sistemas</span>
      </div>
      <div class="Header-social">
        <ul>
          <li>
            <a
              href="https://github.com/Jeanpigi"
              target="_blank"
              rel="noreferrer"
              on:click={analyticsTracking('github')}>
              <img src="github-icon.webp" alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              on:click={analyticsTracking('instagram')}>
              <img src="instagram-icon.webp" alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/JePiGi/"
              target="_blank"
              rel="noreferrer"
              on:click={analyticsTracking('facebook')}>
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
