import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogPost from "./types";

const updateMetaTags = (post: BlogPost) => {
  document.title = post.title;

  // Update or create the description meta tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    //metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", post.description);

  // Update or create the og:image meta tag
  let metaImage = document.querySelector('meta[property="og:image"]');
  if (!metaImage) {
    metaImage = document.createElement("meta");
    metaImage.setAttribute("property", "og:image");
    document.head.appendChild(metaImage);
  }
  metaImage.setAttribute("content", post.image);
};

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Fetch data for a specific post based on the id parameter
    axios
      .get<BlogPost[]>("/posts.json?id=${id}")
      .then((response) => {
        if (response.data.length > 0) {
          console.log(response.data);
          const retrievedPost = response.data.find(
            (p) => p.id === parseInt(id, 10)
          );
          setPost(retrievedPost);
          updateMetaTags(retrievedPost);
        } else {
          console.error("No post found with the specified ID.");
        }
      })
      .catch((error) => console.error("Error fetching post data:", error));
  }, [id]);

  // Update the page metadata with thumbnail image and description
  //   useEffect(() => {
  //     if (post) {
  //       document.title = post.title;
  //       const metaDescription = document.querySelector(
  //         'meta[name="description"]'
  //       );
  //       if (metaDescription) {
  //         metaDescription.setAttribute("content", post.description);
  //       }
  //       const metaImage = document.querySelector('meta[property="og:image"]');
  //       if (metaImage) {
  //         metaImage.setAttribute("content", post.image);
  //       }
  //     }
  //   }, [post]);

  return (
    <div className="container mt-5">
      <h1>{post?.title}</h1>
      <img src={post?.image} className="img-fluid mb-4" alt={post?.title} />
      <p>{post?.description}</p>
    </div>
  );
};

export default Post;
