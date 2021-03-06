import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Feeling(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');

    const goToUnderstanding = () => {
        console.log('Going to /understanding');
        history.push('/understanding');
    };

    const handleFeelingInput = (event) => {
        setFeeling(event.target.value)
        console.log('in handleFeelingInput, feeling:', feeling);
    };

    const addFeeling = () => {
        if(feeling != '' && feeling > 0 && feeling < 6){
            console.log('Feeling being added to store:', feeling)
            dispatch({
                type: 'ADD_FEELING',
                payload: feeling
            });
            setFeeling('');
            goToUnderstanding();
        }else{
            alert('Insert a value of 1 - 5');
        };
    };

    return(
        <div>
            <h1>How are you feeling today?</h1>
            <p>Feeling?</p>
            <input value={feeling} onChange={handleFeelingInput} type="number" placeholder="Enter 1 - 5" />
            <button onClick={addFeeling}>Next</button>
        </div>
    );
};

export default Feeling;