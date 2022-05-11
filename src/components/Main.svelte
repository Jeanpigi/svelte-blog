<script>
  import Sidebar from "./Sidebar.svelte";
</script>

<main class="Main">
  <div class="Main-container">
    <slot />
    <Sidebar />
  </div>
</main>

<style>
  .Main-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 1.2rem;
    grid-gap: 6rem;
  }
  @media only screen and (min-width: 1023px) {
    .Main-container {
      grid-template-columns: 3fr 1fr;
    }
  }
</style>
