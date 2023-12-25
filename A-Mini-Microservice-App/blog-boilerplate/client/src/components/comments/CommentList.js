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
    return (
        <div>
            <ul>
                {comments.map((comment) => <li key={comment.id}>{comment.content}</li>)}
            </ul>
        </div>
    )
}

export default CommentList
