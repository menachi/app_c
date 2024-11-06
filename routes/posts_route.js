const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");

router.get("/", (req, res) => {
  postsController.getAllPosts(req, res);
});

router.post("/", (req, res) => {
  postsController.createPost(req, res);
});

router.delete("/", (req, res) => {
  postsController.deletePost(req, res);
});

module.exports = router;
