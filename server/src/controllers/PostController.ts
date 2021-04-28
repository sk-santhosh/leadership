import Post from "../models/Post";

export default class PostController {
  public static async view(req, res) {
    let post = await Post.findById(req.param.id);
    res.json({
      message: post
    })
  }

  public static async create(req, res) {
    console.log(req.token)
    let newPost = await new Post({
      title: req.body.title,
      body: req.body.body,
      author: req.token
    });
    await newPost.save();
    res.json({
      message: newPost
    })
  }

  public static async update(req, res) {
    let post = await Post.findOne({ _id: req.params.id });

    if (post) {
      if (post.author != req.token._id) {
        return res.status(403).json({ error: "Your unauthorized to this post!"})
      }

      post.title = req.body.title;
      post.body = req.body.body;

      post.save((err) => {
        if (err) throw err;

        res.status(200).json({
          status: "Updated!"
        })

      })
    } else {
      res.status(404).json({ error: "Post not found!" })
    }
  }

  public static async delete(req, res) {
    let post = await Post.findOne({ _id: req.params.id });

    if (post) {
      if (post.author != req.token._id) {
        return res.status(403).json({ error: "Your unauthorized to this post!"})
      }

      post.delete((err) => {
        if (err) throw err;
        res.status(200).json({
          status: "Deleted!"
        })
      })
    } else {
      res.status(404).json({ error: "Post not found!" })
    }
  }
}