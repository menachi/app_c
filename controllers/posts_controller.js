const getAllPosts = (req, res) => {
  console.log("get all posts");
  res.send("get all posts");
};

const createPost = (req, res) => {
  console.log("create a post");
  res.send("create a post");
};

const deletePost = (req, res) => {
  console.log("delete a post");
  res.send("delete a post");
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
