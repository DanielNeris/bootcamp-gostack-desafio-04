import React from 'react';

function Comment({ data }) {
    console.log(data)
    return (
        <>
            {data.map(comment => (
                <div key={comment.id}>
                    <div>
                        <img src={comment.author.avatar} width="50" />
                        <strong>{comment.author.name}</strong>
                    </div>
                    <p>{comment.content}</p>
                </div>
            ))}
        </>
    );
}

export default Comment;