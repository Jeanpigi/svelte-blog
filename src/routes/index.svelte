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
</script>

<style>
  .Posts {
    display: grid;
    justify-content: space-between;
    grid-gap: 15px;
    grid-template-columns: 1fr;
  }
</style>

<svelte:head>
  <title>JbearP Blog</title>
  <meta name="description" content="Blog de JbearP" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Jeanpigi" />
  <meta name="twitter:creator" content="@Jeanpigi" />
  <meta name="twitter:title" content="Jean Pierre Giovanni" />
  <meta name="twitter:description" content="Blog de JbearP" />

  <meta name="og:title" content="Jean Pierre Giovanni" />
  <meta name="og:description" content="Blog de JbearP" />
  <meta name="og:url" content="https://blog.jbearp.com" />
  <meta name="og:site_name" content="Jean Pierre Giovanni" />
  <meta name="og:locate" content="es_ES" />
  <meta name="og:type" content="article" />
  <meta name="fb:app_id" content="" />

</svelte:head>

<div class="Home">
  <div class="Posts">
    {#each posts as post}
      <Post {post} />
    {/each}
  </div>
</div>
