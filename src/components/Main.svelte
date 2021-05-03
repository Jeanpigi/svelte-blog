<script>
  import Sidebar from "./Sidebar.svelte";
</script>

<style>
  .Main-container {
    display: grid;
    grid-template-columns: minmax(auto, 320px);
    justify-content: center;
    align-items: center;
  }

  .Main-content {
    margin: 1.2rem ;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 60px;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1023px) {
    .Main-container {
      grid-template-columns: minmax(auto, 1024px);
    }


    .Main-content {
      grid-template-columns: 3fr 1fr;
    }
  }
</style>

<main class="Main">
  <div class="Main-container">
    <div class="Main-content">
      <slot />
      <Sidebar />
    </div>
  </div>
</main>
