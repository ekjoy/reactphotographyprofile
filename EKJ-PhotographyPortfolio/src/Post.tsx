import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogPost from "./types";

const updateMetaTags = (post: BlogPost) => {
  document.title = post?.title;

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

  const [post, setPost] = useState<BlogPost>();
  const thumpnailurl = "http://coreapi.eldhosekjoy.com/images/";

  useEffect(() => {
    // Fetch data for a specific post based on the id parameter
    axios
      .get<BlogPost>(
        "http://coreapi.eldhosekjoy.com/api/BlogTopicContent/GetBlogTopicContent?id=" +
          id
      )
      .then((response) => {
        if (response.data) {
          // if (response.data.length > 0) {
          //   console.log(response.data);
          //   let retrievedPost: BlogPost | undefined = response.data.find(
          //     (p) => p.id.toString() === id
          //   );
          //   setPost(retrievedPost);
          //   updateMetaTags(retrievedPost!);
          // }
          // let retrievedPost: BlogPost | undefined = response.data.pipe(map((x) => {
          //   const blogPost: BlogPost = {
          //     id: x.id,
          //     title: x.title,
          //     description: x.description,
          //     content: x.content,
          //     image: x.image,
          //     labels: [],
          //     modifiedBy: "",
          //     modifieddate: "",
          //   };
          //   return blogPost;
          // }));
          let retrievedPost: BlogPost | undefined = response.data;
          console.log(retrievedPost);
          setPost(retrievedPost);
          updateMetaTags(retrievedPost!);
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
    <div className="container mt-4" style={{ paddingTop: "30px" }}>
      {/* <h1>{post?.title}</h1>
      <img
        src={thumpnailurl + post?.image}
        className="img-img-fluid mb-4"
        alt={post?.title}
      />
      <div dangerouslySetInnerHTML={{ __html: post?.content! }} /> */}

      <div className="row">
        <div className="card">
          <h1>{post?.title}</h1>
          <img
            src={thumpnailurl + post?.image}
            className="card-img-top"
            alt={post?.title}
          />

          <div
            className="card-body d-flex flex-column"
            dangerouslySetInnerHTML={{ __html: post?.content! }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
