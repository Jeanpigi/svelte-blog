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
  export let posts;
</script>

<style>

.Post-blog > h1 {
  padding: 1rem 0;
  text-align: center;
}

.Post-blog > ul > li {
  font-size: 1.6rem;
  font-weight: 300;
  padding-bottom: 1rem;
  text-align: center;
}

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="Post-blog">
  <h1>Publicaciones recientes</h1>

  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
    {/each}
  </ul>
</div>
