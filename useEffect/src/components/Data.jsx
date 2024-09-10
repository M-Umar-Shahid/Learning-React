import { useState, useEffect } from "react";

function Data() {
  const [posts, setPosts] = useState([]); // State to store the posts

  useEffect(() => {
    // Fetch data from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json(); // Convert response to JSON
        setPosts(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Call the function to fetch posts
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Data;
