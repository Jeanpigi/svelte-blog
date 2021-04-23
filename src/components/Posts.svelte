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

  a {
    color: #22215b;
    text-decoration: none;
  }

  .Post-desc p {
    color: #333;
    font-size: 1.6rem;
    line-height: 28px;
    margin: 0 auto;
    word-break: break-word;
  }

  span {
    font-size: 1.6rem;
    font-weight: 700;
  }

  @media only screen and (min-width: 1024px) {
    .Post-title {
      text-align: unset;
    }
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
</div>
