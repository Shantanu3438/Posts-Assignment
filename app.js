const express = require('express');
const { Post } = require('./models');
const app = express();

app.use(express.json());


// Create new posts
app.post('/posts', async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
});

//Get all the posts created
app.get('/posts', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

// Get a specific post by ID
app.get('/posts/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});


// Update a post
app.put('/posts/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  await post.update(req.body);
  res.json(post);
});

// Delete a post
app.delete('/posts/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  await post.destroy();
  res.json({ message: 'Post deleted successfully' });
});

//Start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
