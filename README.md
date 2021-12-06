# Redux Feedback Loop

## Description

Duration: 3 days.

A feedback loop to take in user feedback and comments. Feedback is stored in a redux store and then sent to a database via post route on the review page's submit button. The thank you page allows the user to go back to step one to leave another feedback entry.

The loop consists of 8 components working together to make 6 separate pages. The header component is always visible at the top. The feeling, understanding, supported, and comments components are all very similiar to eachother. They each dispatch user inputs to the feedbackReducer in the redux store on "next" button click. Their "next" buttons are also tied to routing the user to the next page. 

The feeling, understanding, and supported components will only take an input of 1 - 5. If a different input or no input is put in, an alert will be sent to the user specifying that only a value of 1 - 5 will be accepted. 

The comments component will allow the user to move on with no input if they desire.

The review component shows the user's prior inputs on the previous 4 components and has a submit button at the bottom. On submit the feedbackReducer will be sent via post route to the database and stored. The feedbackReducer will then be cleared, and the user will be routed to the ThankYou component.

The ThankYou component has a "Leave New Feedback" button allowing the user to repeat the process.

In the App component, routes are set up for each other component.

## Screen Shot

![Alt text](/public/images/screenshot.png "Screenshot")

## Usage

1. Enter 1 - 5 for "How are you feeling?" feedback. Click "Next".
2. Enter 1 - 5 for "How well are you understanding?" feedback. Click "Next".
3. Enter 1 - 5 for "How well do you feel supported?" feedback. Click "Next".
4. Enter any comments you might have in the comments feedback. Click "Next".
5. Review your feedback. Click "Submit" to submit.
6. On Thank You page, click "Leave New Feedback" to restart the loop.

## Built With

React.js, Javascript, CSS, Express.js, Axios, Redux, SQL

## Acknowledgement

Thank you to Prime Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have any suggestions, questions, or issues, please email me at husomichael@gmail.com.