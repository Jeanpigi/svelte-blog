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
  .Post-title {
    font-size: 1.6rem;
    padding: .1rem;
    text-align: center;
  }

  .Post-date {
    color: #333;
    font-size: 1.3rem;
    font-weight: 300;
    margin-top: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="Post">
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
  <div class="comments">
    <div id="disqus_thread" />
  </div>
</div>
