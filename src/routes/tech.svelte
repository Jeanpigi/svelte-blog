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

<svelte:head>
  <title>Technology</title>
</svelte:head>

<div class="Tech">
  <div class="Posts">
    {#if filterPost.length >= 1}
      {#each filterPost as post}
        <Post {post} />
      {/each}
    {:else}
      <p>Lo sentimos no hay Resultados...</p>
    {/if}
  </div>
</div>
