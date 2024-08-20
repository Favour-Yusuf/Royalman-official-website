import React from "react";
import { useParams } from "react-router-dom";
import posts from "./Posts.json";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Helmet>
        <title>{post.title} | Royalman Digital Concept</title>
        <meta name="description" content={post.content.slice(0, 150)} />
      </Helmet>
      {/* Hero Section */}
      <div className="w-[100%] mb-5">
        <div
          className="relative h-[65vh] lg:h-[100vh] w-[100%] bg-about bg-cover"
          style={{ backgroundImage: `url(${post.heroImage})` }}
        >
          <div className="h-[100%] w-[100%] absolute bg-black bg-opacity-60 flex items-center justify-center flex-col">
            <h1 className="text-white text-5xl font-bold mb-2 lg:w-[50%] ml-5">{post.title}</h1>
            <p className="text-white text-lg">{post.date}</p>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-4">
            <strong>Author:</strong> {post.author}
          </p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover lg:object-contain mb-6 rounded-lg shadow-lg"
          />

          {/* Render the content as HTML */}
          <div
            className="text-gray-800 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
