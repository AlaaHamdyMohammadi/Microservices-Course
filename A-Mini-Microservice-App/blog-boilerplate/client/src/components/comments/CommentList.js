// import { useEffect, useState } from "react";
// import axios  from 'axios';

function CommentList({ comments }) {
    // const [comments, setComments] = useState([]);

    // useEffect(() => {
    //     async function fetchData(){
    //         const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    //         // console.log(res.data);
    //         setComments(res.data); 
    //     }
    //     fetchData();
    // }, [postId]);

    const renderedComments = comments.map((comment) => {
        let content;
        
        if(comment.status === 'approved'){
            content = comment.content;
        }
        if(comment.status === 'pending'){
            content = 'This comment is waiting moderation';
        }
        if(comment.status === 'rejected'){
            content = 'This comment has been rejected';
        }

        return <li key={comment.id}>{content}</li>;
    })

    return (
      <div>
        <ul>{renderedComments}</ul>
      </div>
    );
}

export default CommentList
