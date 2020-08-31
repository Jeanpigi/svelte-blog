<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import Post from "../components/Posts.svelte";
  export let posts;
  const filterPost = posts.filter((post) => post.tag === "tech");
</script>

<style>
  .Posts {
    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
    grid-template-columns: 1fr;
  }
</style>

<svelte:head>
  <title>Technology</title>
</svelte:head>

<div class="Tech">
  <h1>Technology</h1>
  <div class="Posts">
    {#if filterPost.length >= 1}
      {#each filterPost as post}
        <Post {post} />
      {/each}
    {:else}
      <p>Sin Resultados...</p>
    {/if}
  </div>
</div>
