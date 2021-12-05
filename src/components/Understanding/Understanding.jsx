import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');

    const handleUnderstandingInput = (event) => {
        setUnderstanding(event.target.value)
        console.log('in handleUnderstandingInput, understanding:', understanding);
    };

    const addUnderstanding = () => {
        console.log('Understanding being added to store:', )
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        });
        setUnderstanding('');
    };

    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>
            <input value={understanding} onChange={handleUnderstandingInput} type="number" placeholder="Enter 1 - 5" />
            <button onClick={addUnderstanding}>Next</button>
        </div>
    );
};

export default Understanding;