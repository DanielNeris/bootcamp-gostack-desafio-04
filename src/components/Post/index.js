import React from 'react';

import Comment from '../Comment';

function Post({ data }) {
    console.log(data)
    return (
        <div>
            <div>
                <img src={data.author.avatar} width="50" />
                <strong>{data.author.name}</strong>
                <span>{data.date}</span>
                <p>{data.content}</p>
            </div>
            <div>
                <Comment data={data.comments} />
            </div>
        </div>
    );
}

export default Post;