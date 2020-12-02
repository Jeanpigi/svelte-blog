<script>
  import readingTime from "../utils/readingTime.js";
  import randomEmoji from "../utils/randomEmoji.js";
  import formatIsoTime from "../utils/fromatIsoTime.js";

  export let post;
</script>

<style>
  .Post-item {
    color: #191a22;
    position: relative;
  }

  .Post-content {
    font-size: 1.6rem;
    font-weight: 300;
    display: grid;
    justify-content: space-between;
    grid-gap: 5px;
    grid-template-columns: 1fr;
  }

  .Post-title {
    font-size: 2rem;
    padding: .1rem;
  }

  .Post-title p {
    color: #333;
    font-size: 1.3rem;
    font-weight: 300;
    margin-top: 5px;
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: #22215b;
  }

  .Post-desc p {
    color: #333;
    font-size: 1.6rem;
    line-height: 28px;
    margin: 0 auto;
    word-break: break-word;
  }

  .dot {
    font-weight: 700;
  }
</style>

<div class="Post-item">
  <div class="Post-content">
    <div class="Post-head">
      <div class="Post-title">
        <h2>
          <a rel="prefectch" href="blog/{post.slug}">
            {randomEmoji()}
            {post.title}
          </a>
        </h2>
        <p>
          <time datatime={post.createdAt}>
            📆 {formatIsoTime(post.createdAt)}
          </time>
          <span class="dot">.</span>
          <span>{readingTime(post.html)}</span>
        </p>
      </div>
      <div class="Post-tags" />
      <div class="Post-desc">
        <p>{post.desc}</p>
      </div>
    </div>
  </div>
</div>
