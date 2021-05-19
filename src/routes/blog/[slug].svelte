<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import formatIsoTime from "../../utils/fromatIsoTime.js";
  import readingTime from "../../utils/readingTime.js";
  export let post;

  const disqus = () => {
    if (document.readyState === "complete") {
      let d = document,
        s = d.createElement("script");
      s.src = "https://jbearpblog.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    }
  };

  onMount(async () => {
    await disqus();
  });
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="Posts">
  <div class="Post-content">
    <div class="Post-title">
      <h2>{post.title}</h2>
    </div>
    <div class="Post-date">
      <time datetime={post.createdAt}> 📆 {formatIsoTime(post.createdAt)}</time>
      <span>{readingTime(post.html)}</span>
    </div>
    <div class="content">
      {@html post.html}
    </div>
  </div>
  <div class="comments">
      <div id="disqus_thread" />
    </div>
</div>

<style>
  .Posts {
    display: grid;
    grid-gap: 8rem;
    margin: 1rem;
  }
  .Post-content {
    display: grid;
    justify-content: center;
    margin: 0 2rem;
    font-size: clamp(1.4rem, 2.5vw, 1.7rem);
  }

  .Post-title, .Post-date {
    text-align: center;
  }
  .content {
    padding: 2rem 0;
    text-align: justify;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 300;
    line-height: 2.2rem;
  }

  .content p {
  padding: 1rem 0;
}
</style>
