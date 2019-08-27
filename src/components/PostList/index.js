import React, { Component } from 'react';

import Post from '../Post';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    id: 1,
                    author: {
                        name: 'Julio Alcantara',
                        avatar: 'https://avatars0.githubusercontent.com/u/43827846?v=4'
                    },
                    date: '04 Jun 2019',
                    content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
                    comments: [
                        {
                            id: 1,
                            author: {
                                name: 'Diego Fernandes',
                                avatar: 'https://avatars0.githubusercontent.com/u/43827846?v=4'
                            },
                            content: "Conteúdo do comentário"
                        },
                        {
                            id: 2,
                            author: {
                                name: 'Diego aaaaaa',
                                avatar: 'https://avatars0.githubusercontent.com/u/43827846?v=4'
                            },
                            content: "Conteúdo do comentárioaaaa"
                        }
                    ],
                },
            ]
        };
    }


    render() {
        const { posts } = this.state;

        return posts.map(post => <Post key={post.id} data={post} />);
    }
}

export default PostList;