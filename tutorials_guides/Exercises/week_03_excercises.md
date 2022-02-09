# Javascript Exercises

 Like last week's set of questions, the goal of this problem set is to get you comfortable with the basic elements of programming in Javascript. Try not to google for answer to the problem but instead, if you need assistance, try searching for details on how different components work and see if that can assist you. I would recommend using the Mozilla developer documentation for assistance. Linked [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



1. Write a function `min(a,b)` which returns the smallest of two numbers `a` and` b`.


2. Write a function `pow(x,n)` that returns `x` in power `n`. Or, in other words, multiplies `x` by itself `n` times and returns the result.


3. What are the final values of all variables `a`, `b`, `c` and `d` after the code below?

```js
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

```

4. Rewrite the following function with arrow functions.

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

```

5. Create a function that reverses the following string `As the Zapatistas might say, let us approach the internet at the speed of dreams`.


6. Return only the even numbers from the following array
```js
let onlyEven = [1, 2, 3,  4, 8, 16,  21, 45, 22, -12, 0, 53];
```