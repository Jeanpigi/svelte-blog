const fetch = require("node-fetch");
const fs = require("fs");

let postsObject = require("../routes/blog/_posts.json");
require("dotenv").config();

const API = process.env.GHOST_API;

const blogTitle = process.env.BLOG_TITLE;
const blogUrl = process.env.BLOG_URL;
const blogDescription = process.env.BLOG_DESCRIPTION;
const blogFavicon = process.env.BLOG_FAVICON;

const getDate = (date) => {
  if (date) {
    return new Date(date).toUTCString();
  } else {
    return new Date().toUTCString();
  }
};

const writeFile = async (object) => {
  const parseData = JSON.stringify(object);
  const rss = await createRss(object);
  const sitemap = await createSitemap(object);
  fs.writeFileSync("./src/routes/blog/_posts.json", parseData);
  console.log("datos almacenados");
  fs.writeFileSync("./static/rss.xml", rss);
  console.log("Update rss.xml");
  fs.writeFileSync("./static/sitemap.xml", sitemap);
  console.log("Update sitemap.xml");
};

const createRss = async (data) => {
  const parseItems = await data.map((item) => {
    const pubDate = getDate(item.createdAt);
    return `
    <item>
      <title>
        <![CDATA[${item.title}]]>
      </title>
      <link>
        ${blogUrl}/blog/${item.slug}/
      </link>
      <description>
        <![CDATA[ ${item.desc} ]]>
      </description>
      <categoria>
        <![CDATA[ ${item.tag} ]]>
      </categoria>
      <dc:creator>
        <![CDATA[ ${blogTitle} ]]>
      </dc:creator>
      <pubDate>
        ${pubDate}
      </pubDate>
      <content:encoded>
        <![CDATA[ ${item.html} ]]>
      </content:encoded>
    </item>
    `;
  }).join("");
  const template = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
    <channel>
      <title><![CDATA[${blogTitle}]]></title>
      <description><![CDATA[${blogDescription}]]</description>
      <image>
        <url>${blogFavicon}</url>
        <title>
          <![CDATA[${blogTitle}]]
        </title>
        <link><![CDATA[${blogUrl}]]</link>
      </image>
      <generator>
        SveltePractico
      </generator>
      <lastBuildDate>
        ${getDate()}
      </lastBuildDate>
      <atom: link href="${blogUrl}/rss.xml" rel="selft" type="application/rss+xml" />
      <ttl>60</ttl>
      ${parseItems}
    </channel>

    </rss>`;
  return template;
};

const createSitemap = async (data) => {
  const parseItems = await data.map((item) => {
    return `
    <url>
        <loc>${blogUrl}/blog/${item.slug}</loc>
        <lastmod>${getDate(item.createdAt)}</lastmod>
        <priority>0.80</priority>
    </url>
    `;
  }).join("");
  const template = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${blogUrl}</loc>
        <lastmod>${getDate()}</lastmod>
        <priority>1.0</priority>
    </url>
    ${parseItems}
  </urlset>
  `;
  return template;
};

const fecthData = async () => {
  const response = await fetch(API);
  const data = await response.json();
  const posts = await data.posts.map((post) => {
    return {
      "title": post.title,
      "html": post.html,
      "slug": post.slug,
      "createdAt": post.created_at,
      "id": post.id,
      "desc": post.excerpt,
      "tag": post.meta_title,
      "image": post.feature_image,
    };
  });

  if (postsObject.lenght >= 15) {
    if (posts[0].title === postsObject[0].title) {
      postsObject.shift();
      postsObject.unshift(posts[0]);
      writeFile(postsObject);
    } else {
      postsObject.unshift(posts[0]);
      writeFile(postsObject);
    }
  } else {
    writeFile(posts);
  }
};

fecthData();
