import React from 'react'
import Comment from './Comment'


const commentdata = [
    {
        name: "Ashish Karn",
        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
        replies: [],
    },
    {
        name: "Ashish Karn",
        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
        replies: [
            {
                name: "Ashish Karn",
                text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                replies: [],
            },
        ],
    },
    {
        name: "Ashish Karn",
        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
        replies: [
            {
                name: "Ashish Karn",
                text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                replies: [
                    {
                        name: "Ashish Karn",
                        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                        replies: [
                            {
                                name: "Ashish Karn",
                                text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                                replies: [],
                            },
                        ],
                    },
                    {
                        name: "Ashish Karn",
                        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                        replies: [
                            {
                                name: "Ashish Karn",
                                text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                                replies: [
                                    {
                                        name: "Ashish Karn",
                                        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Ashish Karn",
        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
        replies: [],
    },
    {
        name: "Ashish Karn",
        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
        replies: [
            {
                name: "Ashish Karn",
                text: "Lorem Ipsum and others in the Lorem Ipsum space and",
                replies: [],
            },
        ],
    },
    {
        name: "Ashish Karn",
        text: "Lorem Ipsum and others in the Lorem Ipsum space and",
        replies: [],
    },
]


const CommentsList = ({ comments }) => {
    return comments.map((comment, index) =>
        <div  key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    );
};


const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments: </h1>
            <CommentsList comments={commentdata} />
        </div>
    )
}

export default CommentsContainer