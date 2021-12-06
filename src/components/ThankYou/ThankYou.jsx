import {useHistory} from 'react-router-dom';

function ThankYou(){
    const history = useHistory();

    const goToHome = () => {
        console.log('Going to /');
        history.push('/');
    };

    return(
        <div>
            <h1>Thank You!</h1>
            <div>
                <button onClick={goToHome}>Leave New Feedback</button>
            </div>
        </div>
    );
};

export default ThankYou;