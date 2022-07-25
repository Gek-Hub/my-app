import { useMemo, useState } from "react";
import React from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import Butt1 from "./components/UI/button/Butt1";
import Input1 from "./components/UI/input/Input1";
import PostForm from "./components/PostForm";
import Select1 from "./components/UI/select/Select1";
import PostFilter from "./components/PostFilter";
import Modal1 from "./components/UI/modal/Modal1";
function App() {  
  const [post, setPost] = useState([
    { id: 1, title: "JAVASCRIPT", body: "holy shit"},
    { id: 2, title: "ASCRIPT", body: "shit"},
    { id: 3, title: "RIPT", body: "shitest shit"},
  ]);
  const [filter, setFilter] = useState({sort: '',query: ''})

  const sortedPosts = useMemo(() => {
    console.log('CРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if (filter.sort) {
      return [...post].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return post
  }, [filter.sort,post]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query,sortedPosts]);
  const createPost = (newPost) => {
    setPost([...post, newPost])
  }
  
  const deletePost = (p) => {
    setPost(post.filter(i =>  i.id !== p.id))
  }
  return (
    <div className="App">
      <Modal1 >
        <PostForm create={createPost}/>
      </Modal1>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList deletePost={deletePost} post={sortedAndSearchedPosts} title="Посты про JS"/>
        
    </div>
  );
}
export default App;
