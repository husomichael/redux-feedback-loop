import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Review(){

    const dispatch = useDispatch();
    const feedback = useSelector((store) => store.feedbackReducer);
    const history = useHistory();

    function handleSubmit(){
        console.log('inside handleSubmit');
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((response) =>{
            console.log('Submit post response:', response);
            dispatch({
                type: "CLEAR_FEEDBACK"
            });
        }).catch((error) => {
            console.log('Submit post error', error);
        })
    };


    return(
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comment}</p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Review;