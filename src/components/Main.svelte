<script>
  import Sidebar from "./Sidebar.svelte";
</script>

<style>
  .Main-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 1.2rem;
    grid-gap: 60px;
  }
  @media only screen and (min-width: 1023px) {
    .Main-container {
      grid-template-columns: 3fr 1fr;
    }
  }
</style>

<main class="Main">
  <div class="Main-container"> 
      <slot />
      <Sidebar />
  </div>
</main>
