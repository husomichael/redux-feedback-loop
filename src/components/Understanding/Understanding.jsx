import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');

    const goToSupported = () => {
        console.log('Going to /supported');
        history.push('/supported');
    };

    const handleUnderstandingInput = (event) => {
        setUnderstanding(event.target.value)
        console.log('in handleUnderstandingInput, understanding:', understanding);
    };

    const addUnderstanding = () => {
        if(understanding != '' && understanding > 0 && understanding < 6){
            console.log('Understanding being added to store:', understanding)
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understanding
            });
            setUnderstanding('');
            goToSupported();
        }else{
            alert('Insert a value of 1 - 5');
        };
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