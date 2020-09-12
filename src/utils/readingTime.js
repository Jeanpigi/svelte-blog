const readingTime = (text) => {
  const wordsPerMinute = 200;
  const numOfWords = text.split(/\s/g).length;
  const minutes = numOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `📖 Time of reading is ${readTime} Min.`;
};

export default readingTime;
