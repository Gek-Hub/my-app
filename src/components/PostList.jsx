import React from 'react';
import Poster from './Poster';

const PostList = ({post, title, deletePost}) => {

  if (!post.length) {
    return(
    <h1 style={{textAlign: 'center'}}>
      Посты не найдены!
    </h1>
    )
  }

  return (
      <div>
      <h1 style={{textAlign: 'center'}}> {title}</h1>
    {post.map((p, index) => 
      <Poster deletePost={deletePost} number={index+1} post={p} key={post.id}/>
    )}
    </div>
  );
};

export default PostList;