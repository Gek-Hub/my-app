import { useMemo, useState } from "react";
import React from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import Butt1 from "./components/UI/button/Butt1";
import Input1 from "./components/UI/input/Input1";
import PostForm from "./components/PostForm";
import Select1 from "./components/UI/select/Select1";

function App() {  
  const [post, setPost] = useState([
    { id: 1, title: "JAVASCRIPT", body: "holy shit"},
    { id: 2, title: "ASCRIPT", body: "shit"},
    { id: 3, title: "RIPT", body: "shitest shit"},
  ]);
  const [selectedSort, setSelectedSort] = useState('') 
  const [searchQuary, setSearchQuary] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('CРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if (selectedSort) {
      return [...post].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return post
  }, [selectedSort,post]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuary.toLowerCase()))
  }, [searchQuary,sortedPosts]);
  const createPost = (newPost) => {
    setPost([...post, newPost])
  }
  
  const deletePost = (p) => {
    setPost(post.filter(i =>  i.id !== p.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPost([...post].sort((a,b) => a[sort].localeCompare(b[sort])))  
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Input1 
          onChange={e => setSearchQuary(e.target.value)}
          value={searchQuary}
          placeholder=' Поиск...'
        />
        <Select1
          onChange={sortPosts}
          value={selectedSort}
          defaultOption='Сортировка по:'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length 
        ? 
        <PostList deletePost={deletePost} post={sortedAndSearchedPosts} title="Посты про JS"/>
        : 
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }
    </div>
  );
}
export default App;
