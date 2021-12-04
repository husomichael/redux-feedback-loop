[x]npm install
    [x]npm install redux react-redux
    [x]npm install logger

[x]setup database

[]initialize components
    []header
    []feeling
    []comments
    []thankYou
    []supported
    []understanding
    []review
    []admin

[]setup redux store
    []Provider
    []Create redux store
    []applyMiddleware
    []Logger
    []feedbackReducer
        []Object with 4 properties. {feeling: , understanding: , support: , comment: }
        []Setup 5 cases for reducer to listen for.
            []4 cases for setting properties.
            []5th case to reset data. (call on post route.then).
    []Redux dispatches tied to "Next" buttons on each page.

[]Setup router
    []Router in app.js
    []Routes match pages. (/feeling, /understanding, etc.).
        Example:

        <Route exact path = "/">
            <Route to go to /feeling>
        </Route>

    []Setup useHistory on each page, call at the end of redux dispatch.
    
        Example: 

        import { useHistory } from 'react-router-dom';

        const history = useHistory();

        const goToCheckout = () => {
        console.log('Going to Checkout');
        history.push('/checkout');
        };

        const addNewCustomer = (event) => {
        console.log("new customer dispatch", newCustomer);
        dispatch({
        type: "ADD_CUSTOMER",
        payload: newCustomer,
        });
        goToCheckout();
        };    

[]setup components
    []header
    []feeling
    []comments
    []thankYou
    []supported
    []understanding
    []review
    []admin

[]STRETCH:
    []Mess with Material UI styling.
    []Admin page
    []Deploy to Heroku.

