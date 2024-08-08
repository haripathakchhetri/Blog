
// const mios = [];
// `${mios}`
// JSON.parse(mios);


export const setBlogToLocal = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}


export const getBlogsFromLocal = () => {
  const blogs = localStorage.getItem('blogs');
  return blogs === null ? [] : JSON.parse(blogs);
}



