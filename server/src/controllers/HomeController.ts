import Post from "../models/Post";

export default class HomeController {
  public static async index(req, res) {
    let posts = await Post.find().populate('author').sort({'date': -1}).limit(5);
    res.json({
      latest: posts
    })
  }
}

