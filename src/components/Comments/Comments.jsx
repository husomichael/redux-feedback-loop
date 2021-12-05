import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Comments(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const goToReview = () => {
        console.log('Going to /review');
        history.push('/review');
    };

    const handleCommentsInput = (event) => {
        setComments(event.target.value)
        console.log('in handleCommentsInput, comments:', comments);
    };

    const addComments = () => {
        console.log('Comments being added to store:', comments);
        dispatch({
            type: 'ADD_COMMENT',
            payload: comments
        });
        setComments('');
        goToReview();
    };

    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <p>Comments</p>
            <input value={comments} onChange={handleCommentsInput} type="text" placeholder="Enter comment" />
            <button onClick={addComments}>Next</button>
        </div>
    );
};

export default Comments;