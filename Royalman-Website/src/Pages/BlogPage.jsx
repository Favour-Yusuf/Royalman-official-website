import React from 'react'
import Blog from '../Components/BlogPage/Blog'
import BlogHero from '../Components/BlogPage/BlogHero'
import { Helmet } from 'react-helmet-async'

const BlogPage = () => {
  return (
    <div>
      <Helmet>
        <title>{post.title} | Royalman Digital Concept</title>
        <meta name="description" content='Royalman blogs' />
        <link rel="canonical" href= '/blog/'/>
      </Helmet>
        <BlogHero/>
        <Blog/>
    </div>
  )
}

export default BlogPage