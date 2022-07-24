import React from 'react';
import Butt1 from './UI/button/Butt1';

const Poster = (props) => {
    
    
    return (
        <div className="post">
        <div className="post_cont">
          <strong>{props.number}.{props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post_btn">
          <Butt1 onClick={() => props.deletePost(props.post)}> Удалить</Butt1>
        </div>
      </div> 
    );
};

export default Poster;