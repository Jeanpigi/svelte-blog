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

<style>
  h2 {
    color: #22215b;
    font-size: 2.2rem;
    padding: .4rem;
  }

  .Post-title {
    color: #333;
    font-size: 1.4rem;
    font-weight: 300;
    margin-top: .5rem;
    padding: .2rem;
  }

  .date time,
  span {
    color: #594863;
  }
  .comments {
    margin-top: .2rem;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="Post">
  <div class="Post-title">
    <h2>{post.title}</h2>
  </div>
  <p class="date">
    <time datetime={post.createdAt}> 📆 {formatIsoTime(post.createdAt)}</time>
    <span>{readingTime(post.html)}</span>
  </p>
  <div class="content">
    {@html post.html}
  </div>
  <div class="comments">
    <div id="disqus_thread" />
  </div>
</div>
