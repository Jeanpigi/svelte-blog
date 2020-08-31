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
  const filterPost = posts.filter((post) => post.tag === "history");
</script>

<svelte:head>
  <title>Histories</title>
</svelte:head>

<div class="Histories">
  <h1>Histories</h1>
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
