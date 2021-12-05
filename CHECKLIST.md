[x]npm install
    [x]npm install redux react-redux
    [x]npm install logger

[x]setup database

[x]initialize components
    [x]header
    [x]feeling
    [x]comments
    [x]supported
    [x]understandixng
    [x]review
    [x]admin

[x]setup redux store
    [x]Provider
    [x]Create redux store
    [x]applyMiddleware
    [x]Logger
    []feedbackReducer
        [x]Object with 4 properties. {feeling: , understanding: , support: , comment: }
        [x]Setup 5 cases for reducer to listen for.
            [x]4 cases for setting properties.
            [x]5th case to reset data. (call on post route.then).
    [x]Redux dispatches tied to "Next" buttons on each page.

[x]Setup router
    [x]Router in app.js
    [x]Routes match pages. (/feeling, /understanding, etc.).
        Example:

        <Route exact path = "/">
            <Route to go to /feeling>
        </Route>

    [x]Setup useHistory on each page, call at the end of redux dispatch.
    
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
    [x]header
    [x]feeling
    [x]comments
    [x]supported
    [x]understanding
    [x]review
    []admin

[]STRETCH:
    []Mess with Material UI styling.
    []Admin page
    []Deploy to Heroku.

