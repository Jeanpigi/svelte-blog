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
          {formatIsoTime(post.createdAt)}
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
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
  }
  .Post-title a {
    color: #22215b;
    text-decoration: none;
    transition: box-shadow 0.25s;
  }

  .Post-title a:focus {
    box-shadow: 0 0 0 7px rgba(#9818EF, 0.56);
  }

  .Post-desc {
    margin-top: 1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
  }

  .Post-desc > p {
    color: #333;
    font-size: clamp(1.7rem, 2.5vw, 2rem);
  }

  .Post-date > span {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 700;
  }

  .Post-date time::before {
    content: " 📆  ";
  }

</style>
