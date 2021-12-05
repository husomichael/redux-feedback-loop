import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Supported(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [supported, setSupported] = useState('');

    const goToComments = () => {
        console.log('Going to /comments');
        history.push('/comments');
    };

    const handleSupportedInput = (event) => {
        setSupported(event.target.value)
        console.log('in handleSupportedInput, supported:', supported);
    };

    const addSupported = () => {
        if(supported != '' && supported > 0 && supported < 6){
            console.log('Supported being added to store:', supported);
            dispatch({
                type: 'ADD_SUPPORT',
                payload: supported
            });
            setSupported('');
            goToComments();
        }else{
            alert('Insert a value of 1 - 5');
        };
    };

    return(
        <div>
            <h1>How well are you being supported?</h1>
            <p>Supported?</p>
            <input value={supported} onChange={handleSupportedInput} type="number" placeholder="Enter 1 - 5" />
            <button onClick={addSupported}>Next</button>
        </div>
    );
};

export default Supported;