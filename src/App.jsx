import React, { useState } from "react";
import './style/App.css'
import PostLists from "./Componenes/PostLists";
const App = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript 1",
      body: "JS 1995 yilda Brendin Eoch tamonidan ishlab chiqilgan dasturlash tili"
    },
    {
      id: 2,
      title: "Javascript 2",
      body: "JS 1995 yilda Brendin Eoch tamonidan ishlab chiqilgan dasturlash tili"
    },
    {
      id: 3,
      title: "Javascript 3",
      body: "JS 1995 yilda Brendin Eoch tamonidan ishlab chiqilgan dasturlash tili"
    }
  ]);
  const [posts1, setPosts1] = useState([
    {
      id: 1,
      title: "Phyton",
      body: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation"
    },
    {
      id: 2,
      title: "Phyton 2",
      body: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation"
    },
    {
      id: 3,
      title: "Phyton 3",
      body: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation"
    }
  ]);

  return (
    <div className="App">
      <PostLists posts={posts} title={'Javascript haqida'}/>
      <PostLists posts={posts1} title={'Phyton haqida'}/>
    </div>
  );
};

export default App;
