<style>
  .Footer {
    background: #24292e;
    color: white;
    padding-top: 1.5rem;
    margin-top: 0.2rem;
    font-size: 1.3rem;
    font-weight: 300;
    height: 6rem;
  }

  .Footer-content {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .Footer-svelte {
    display: flex;
    justify-content: center;
  }
</style>

<footer class="Footer">
  <div class="Footer-container">
    <div class="Footer-content">
      <div class="Footer-copy">Hecho con 💜 por 🐻 JbearP 🇨🇴</div>
      <div class="Footer-svelte">
        Full Power by svelte
        <picture> <img src="svelte.png" alt="svelte" /> </picture>
      </div>
    </div>
  </div>
</footer>
