<script>
  import readingTime from "../utils/readingTime.js";
  import randomEmoji from "../utils/randomEmoji.js";
  import formatIsoTime from "../utils/fromatIsoTime.js";

  export let post;
</script>

<div class="Post-content">
  <div class="Post-head">
    <div class="Post-title">
      <h2>
        <a rel="prefectch" href="blog/{post.slug}">
          {randomEmoji()}
          {post.title}
        </a>
      </h2>
      <div class="Post-date">
        <time datatime={post.createdAt}>
          📆 {formatIsoTime(post.createdAt)}
        </time>
        <span>{readingTime(post.html)}</span>
      </div>
    </div>
    <div class="Post-tags" />
    <div class="Post-desc">
      <p>{post.desc}</p>
    </div>
  </div>
</div>

<style>
  .Post-content {
    text-align: justify;
  }
  .Post-title a {
    color: #22215b;
    text-decoration: none;
  }

  .Post-desc p {
    color: #333;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  }

  .Post-date span {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 700;
  }

  @media only screen and (min-width: 1023px) {
    .Post-desc {
      margin: 0 1.8rem;
    }
  }
</style>
