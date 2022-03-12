import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "new blog", body: "lorem ipsum...", author: "gg", id: 1 },
    { title: "welcome!", body: "lorem ipsum...", author: "nat", id: 2 },
    { title: "info", body: "lorem ipsum...", author: "brud", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  });

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
