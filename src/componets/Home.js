import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "new blog", body: "lorem ipsum...", author: "gg", id: 1 },
    { title: "welcome!", body: "lorem ipsum...", author: "nat", id: 2 },
    { title: "info", body: "lorem ipsum...", author: "brud", id: 3 },
  ]);

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
