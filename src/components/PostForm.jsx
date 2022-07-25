import React, { useState } from 'react';
import PostList from './PostList';
import Butt1 from './UI/button/Butt1';
import Input1 from './UI/input/Input1';

const PostForm = (props) => {
    
    const [addPost, setAddPost] = useState({title:'',body:''})
    const createPost = (e) => {
        e.preventDefault()
        if (addPost.title) {
            const newPost = {
                ...addPost, id:Date.now()
            }
            props.create(newPost)
            setAddPost({...addPost,title:'',body:''})
        }
        
    }
    return (
    <div>
        <form>
    {/* УРАВЛЯЕМЫЙ КОМПОНЕНТ */}
      <Input1 
      value={addPost.title}
      onChange={e => setAddPost({...addPost,title:e.target.value})}
      type="text"
      placeholder='Название поста:'
      />
      <Input1 
      value={addPost.body}
      onChange={e => setAddPost({...addPost,body:e.target.value})}
      type="text" 
      placeholder='Описание:'
      />
      <Butt1 onClick={createPost}>Сoздать пост</Butt1>
    </form>
    </div>
    );
};

export default PostForm;