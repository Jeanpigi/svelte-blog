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

<svelte:head>
  <title>JbearP Blog</title>
  <meta name="description" content="Blog de JbearP" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Bitpierre" />
  <meta name="twitter:creator" content="@Bitpierre" />
  <meta name="twitter:title" content="Jean Pierre Giovanni" />
  <meta name="twitter:description" content="Blog de JbearP" />

  <meta name="og:title" content="Jbearp" />
  <meta name="og:description" content="Blog de JbearP" />
  <meta name="og:url" content="https://blog.jbearp.com" />
  <meta name="og:site_name" content="Jbearp" />
  <meta name="og:locate" content="es_ES" />
  <meta name="og:type" content="article" />
  <meta name="fb:app_id" content="" />

  <meta
    name="google-site-verification"
    content="fgZgQcazxMOVgK0dDRQMa6MJD_0H4_SVKy1pcg-MzT0"
  />
</svelte:head>

<div class="Posts">
  {#each posts as post}
    <Post {post} />
  {/each}
</div>
