
# Frontend developer test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can provide the answers to questions/code challenge either as zipped file containing the code, or as a link to a fork of this repository

## Question 1

Toby is calling friends using friend's score as guidance, starting from the highest one, after the call the score of the friend called is set to minimum score in the friend's list and all other scores are incremented by 1. If two or more friends share the score Toby will contact the person that he hasn't spoken to yet, otherwise the first one from the subset.

 Given an integer `n`, where 1 <= `n` <= 10^7 and a list of friends' scores of length `n` where 1 <= `score` <=10 ^ 7, write a function that will help Toby determine how many calls he has to perform until all of his friends are granted a chance to speak to him.

 What are the function's time & space complexities?

 Note: You can paste the function in here, or provide the location of the `.js` file instead

 *Answer*:
 ```js

 ```

## Question 2

Take a look at the component `PaypalButton`, located in `/src/PaypalButton.js`.

1. What issues with it can you spot?
   
   *Answer*:
   ```txt

   ```

2. Re-factor it into a functional one, applying improvements/optimisations as you see fit in order to address problems you noted before.
3. Bonus: Can you get rid of the HOC `connect` component as well, (perhaps by utilising other available apis)?

Note: The component uses [paypal sdk](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/). Keep in mind that due to the mock returning a fake value `onAccept` will never be executed in this demo.

You can replace the sandbox paypal account token in `public/index.html`
[formik](https://formik.org/)
