<footer class="Footer">
  <div class="Footer-container">
    <div class="Footer-content">
      <div class="Footer-copy"> Hecho con 💜 por 🐻 JbearP </div>
      <div class="Footer-svelte">
        Full Power by svelte
        <picture> <img src="svelte.png" alt="svelte" /> </picture>
      </div>
    </div>
  </div>
</footer>

<style>
  .Footer {
    background: #24292e;
    color: white;
    padding-top: 1.5rem;
    margin-top: 0.2rem;
  }

  .Footer-content {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-family: 'Great Vibes', cursive;
  }
  .Footer-copy::after {
    content: " 🇨🇴  ";
  }
  .Footer-svelte {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>
