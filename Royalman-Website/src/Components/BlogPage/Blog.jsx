import React, { useState, useEffect } from "react";
import posts from "./Posts.json";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Load posts from the JSON file  
    setBlogPosts(posts);
  }, []);



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">
                <strong>Date:</strong> {post.date}
              </p>
              <p className="text-gray-800 mb-6"  dangerouslySetInnerHTML={{ __html: post.content.slice(0,100)}}>
               
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Author:</strong> {post.author}
              </p>
              <div className="mt-4">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
