# Javascript Exercises

 The goal of this problem set is to get you comfortable with the basic elements of programming in Javascript. Try not to google for answer to the problem but instead, if you need assistance, try searching for details on how different components work and see if that can assist you. I would recommend using the Mozilla developer documentation for assistance. Linked [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



1. What data types are the following variables?

- `let val1 = 25.5;`
- `let val2 = 30;`
- `let isComplete = false;`
- `let testVal;`
- `const nums = []`

2. Use a conditional to set the value of the `testVal` variable to be true if the `isComplete` variable, defined above, is `false`.

3. How many characters are in the following string?
> 'Vision in this technological feast becomes unregulated gluttony; all seems not just mythically about the god trick of seeing everything from nowhere, but to have put the myth into ordinary practice. And like the god trick, this eye fucks the world to make techno-monsters.'

4. Create an array of the words in the above string. Name the array `parArray`. 

4. How many words are in the array?

5. What is the 10th word in the array?

6. Lookup and print the value for `movie` in the `movieDir` object literal.

```js

movieDir = {
    director: 'Harun Farocki',
    movie: 'Still Life',
    date: '1997'
};
```

7. Add a `duration` variable to the `movieDir` object with a value of `58`.


8. Create a function called `converter()` that will convert from Celsius to Farenheit. 
    Hint: The general convention to  convert from Ceslisus to Farenheit is to multiply the degrees celsius by 1.8 and add 32.00.

9. Loop through the following array and print out each value in it. Try using a regular `for` loop and a `for of` loop

`const dogBreeds = ['Malamute', 'Akita', 'Terrier', 'Irish Wolfhound', 'Vizsla', 'Kelpie', 'Saint Bernard', 'Shiba Inu', 'Shih Tzu'];`

10. Add the 'Daschund' dog breed to the end of the array.

11. __BONUS__: Loop through the `dogBreeds` array and create a new array with the dogs listed in alphabetical order. Note this will require an array method that we didn't cover! Check out the mozilla docs for help: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

12. __BONUS__: revisit the `converter()` function from question 9 and write it as an arrow function.

13. __BONUS__: In the following object, add a variable of `aptNum` and value of `2C` to the inner `address` object.

```js
let person = {
  firstName: 'Arthur',
  lastName1: 'Jafa',
  hobbies: ['music', 'art', 'reading'],
  address: {
    street: '100 broadway',
    city: 'NYC',
    state: 'NY'
  },
  age: 27
};
```