import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogPost from "./types";

const Home = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch data from the JSON file (replace with your API endpoint)
    axios
      .get("posts.json")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Blog Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-lg-4 mb-3 d-flex align-items-stretch"
          >
            <div className="card">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text mb-4">{post.description}</p>
                <Link
                  to={`/post/${post.id}`}
                  className="btn btn-primary text-white mt-auto align-self-start"
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

export default Home;
