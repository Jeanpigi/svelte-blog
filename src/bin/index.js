const fetch = require("node-fetch");
const fs = require("fs");

let postsObject = require("../routes/blog/_posts.json");
require("dotenv").config();

const API = process.env.GHOST_API;

const writeFile = (object) => {
  const parseData = JSON.stringify(object);
  fs.writeFileSync("./src/routes/blog/_posts.json", parseData);
  console.log("datos almacenados");
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
