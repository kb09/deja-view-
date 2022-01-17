import PostInfo from "../models/postInfo.js"

/*
this is used to create handlers for our routes so we can call 
them in the routes / post.js instead of having all that code in one file,
helps keep code clean
*/

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostInfo.find()

    res.status(200).json(postMessage)

  } catch (error) {
    res.status(404).json({message: error.message})
    
  }
}

export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new PostInfo(post)

  try {
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}