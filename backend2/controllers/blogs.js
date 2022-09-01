const blogRouter = require('express').Router()
const Blog = require('../model/blog')
const User = require('../model/user')
const jwt = require('jsonwebtoken')

blogRouter.get('/', async(request, response) => {
    response.json(await Blog.find({}).populate('userId', {name: 1, username: 1}))
})

blogRouter.get('/:id', async(request, response) => {
    if(!request.token) return response.status(401).json({error: 'Token missing or invalid'})
    const user = jwt.verify(request.token, process.env.SECRET)
    response.json(await Blog.findById(request.params.id))}
)

blogRouter.delete('/:id', async(request, response) => {
    if(!request.token || request.token.length < 10) return response.status(401).json({error: 'Token missing or invalid'})
    const user = jwt.verify(request.token, process.env.SECRET)
    const blog = await Blog.findById(request.params.id).populate('userId', {name: 1, username: 1})
    console.log(user)
    console.log(blog)
    if(user){
        if(user.username == blog.userId.username){
            await Blog.findByIdAndRemove(request.params.id)
            response.status(204).end()
        }else{
            response.status(401).json({error: 'Not authorized'})
        }
    }else{
        response.status(401).json({error: 'Token missing or invalid'})
    }
})

blogRouter.put('/:id', async(request, response) => {
    const body = request.body
    const newBlog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }
    response.json(await Blog.findByIdAndUpdate(request.params.id, newBlog, {new: true}))

})

blogRouter.post('/', async(request, response) => {
    const body = request.body
    let token = request.get('Authorization')
    if(!token || token.length < 10) return response.status(401).json({error: 'Token missing or invalid'})
    token = token.substring(7)
    const obj = jwt.verify(token, process.env.SECRET)
    console.log("Id: " + obj.id)
    const user = await User.findById(obj.id)
    if(!body.author && !body.title) return response.status(400).json({error: 'Author and title are REQUIRED fields'})
    if(!body.likes) body.likes = "0"
    else{
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: !body.likes ? "0": Number.parseInt(body.likes),
            userId : user.id
        })
        const miBlog = await blog.save()
        user.blogs = user.blogs.concat(miBlog.id)
        await user.save()
        response.json(miBlog)
    }
})

module.exports = blogRouter