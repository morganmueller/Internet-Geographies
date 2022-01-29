# Introduction to Javascript

## So what is Javascript?


JavaScript is a web programming language that manipulates and controls the behavior of web pages by interacting with the various elements on the page and loading data. It, along with HTML and CSS, forms the foundation of modern web browsers and the internet. JavaScript is considered, unofficially, to be the most popular programming language in the world. Many web site templates, such as Bootstrap, are in JavaScript, and it is the programming language that most of the major mapping and data visualization libraries, including Leaflet and D3 that we are using in this course, are implemented in.

One of the major concepts in web development is that of **server-side** versus **client-side**. The server is the location on the web that serves your website to the rest of the world, the client is the computer that is accessing that website, requesting information from the server. JavaScript can be both, but is primarily a client-side language, working on your client computer. In the manner we are using it, JavaScript is a scripting language that will operate in two fundamental ways. The first is executing scripts and tasks when the web page is loaded (i.e. load a dataset on page open), and the second is executing scripts and tasks after the web page visitor tells it to (i.e. clicking a button) or another task is completed (i.e. a menu is closed). When the script executes, it can manipulate the content of the page, change how it is being viewed through the browser, give information to a server, or tell the browser to go back to the server and get new information. Often, however, the instructions given by the script can be followed without additional communication with the server.

JavaScript, in a manner similar to CSS, interacts with HTML elements using the DOM.


## Variables


[Variables](http://www.w3schools.com/js/js_variables.asp) are containers that hold data values, simple or complex, that can be referred to later in your code, much like algebra. They give our code persistence. Compared to other programming languages, you don’t have to explicitly define a variable name or its datatype beforehand; you can create variables on the fly!
 
### Variable Scope

Scope refers to the set of objects you have access to at any point in your script.

How long do variables last when you declare them? There are two main types of variables, global variables and local variables. Variables declared within a function are **Local** to that function. Values held within a local variable will not be usable after the function ends. Variables declared outside a function are **Global**, and can be used anywhere on the webpage.


ES6 JavaScript ES6 has introduced \`const\` and \`let\`. Where \`var\` is function scoped, \`const\` and \`let\` are block scoped, meaning they can't be redefined within a single block. This helps prevent bugs, so \`var\` has generally been phased out in modern JavaScript. 

The difference between \`const\` and \`let\` make them both useful for different purposes. \`const\` should be used for things that will not be changed by a function or manipulation (it does not allow for rebinding).

```js 
    const a = 10;

    a = 20;

    return a;
```

The code block above would throw an error because it tries to re-define the  variable`a`, but since `a` is defined using `const`.


## Javascript Data types

Data in JavaScript are objects that represent values or other objects. Primitive data types must be of a specific type, where Reference data types can be thought of a references to other objects in your document.

Primitive Data Types

- *Number*: Any integer or floating-point value
- *String*: Text characters that are delimited by quotes
- *Boolean*: true or false
- *Null*: Variable set to have the value of null
- *Undefined*: Variable declared, but set to have no value

Reference data types
- *Arrays*
- *Objects*
- *Functions* (We'll cover these more in the next session)


Examples of JavaScript data, and what can be stored as a variable and referred to later are shown below.


### Numbers

A [*number*](https://javascript.info/number) can be either an integer or a floating point number. There are a range of operations that can be done on numbers, including basic arithmetic, rounding, etc. In addition to regular numbers, Javascript reserves three additional values that are numeric \`Infinity\`, \`-Infinity\`, and \`NaN\`, which stands for not a number. Be wary of the fact that if an operation returns \`NaN\`, all further operations will be allowed to take that as an imput (it won't break the script), but it will continue to return \`NaN\`.

```js
    let a = 10;
    let b = 6;
    //number
    let c = a / b;
    //NAN
    let d = a / "5";
```
### Strings
A [*string*](https://javascript.info/string) can be any alphanumeric characters surrounded by quotes. Some useful operations that you can conduct on them include concatenation, changing letter case, finding their length, etc.

In JavaScript, simple strings can be defined in either single (') or double ("). Dynamic strings, which have "extended functionality" can be contained within backticks (\`).

```js
    let name = "Tolstoy"

    let output = `hello, world, it's ${name}`;
```

### Booleans

[*Boolean*](https://javascript.info/logical-operators) values are either **true** or **false**. They are good for evaluation and flow control. Boolean values are the result of **comparison operators**.

Boolean values can be applied to logical operators.

- &&: AND operator. True only if both values are true. 
- ||: OR operator. True if one or both values are true.
- !: NOT operator. True if statement is false.Boolean values can be applied to logical operators.

- &&: AND operator. True only if both values are true. 
- ||: OR operator. True if one or both values are true.
- !: NOT operator. True if statement is false.


### Arrays
Arrays are special objects in JavaScript that store multiple values, and are defined by [square brackets]. We've seen these before, and should be comfortable using them. You can refer to a specific value in an array using an index number (remember, it is 0-indexed).

```js
    const ra = ["one", "two", 3.0];
```

### Objects

Objects are the kings of JavaScript and almost everything you work with in JavaScript is an object. Objects are elements of JavaScript that have properties and values. To illustrate this, I will reference a nice example from W3schools, in real life, a car is an **object**. This car has **properties** like weight and color that are set to certain **values**, and it has **methods**, like start and stop.
You will commonly be accessing objects within objects. Typical syntax might look like the following.

#### Properties
Objects often store information in *name.values* pairs, which are called properties. In the example above, the car holds a number of values, and to refer to them, you must call that exact name.value (or, name["value"]) pair.

#### Methods of Objects

In addition to properties, many objects have methods that can be used with them. In the example above, you can see that they are differentiated from properties with parentheses (). For instance, you can change a string to being all uppercase using the built-in .toUpperCase() method.

## JSON
Data can be stored in something called [JSON](https://www.w3schools.com/js/js_json_intro.asp), which is a JavaScript element. JSONs are great for storing data because they have a flexible structure, are lightweight way to store data, and are languge independent. 

A JSON is structured within brackets, using name/value pairs, with data separated by commas. Curly brackets are used to store objects, and square brackets are used to hold arrays (remember, objects and arrays are referenced differently).


## Flow Control

Flow Control is the way that we define how script is read, processed, and enacted. There are [a number of different tools](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) that can be used to manage what code should be used at different parts of a program, but today, we will focus on loops, \`while\` statements, and conditional statements.

## Iteration

Loops allow us to automate repetitive tasks. The repeated execution of a set of statements is called iteration. There are a number of way to iterate in JavaScript. We can use \`for\` loops, \`while\` loops, or conditional \`if\` statements.  The \`for\` loop loops over each of the elements of a list or iterator, assigning the current element to the variable name given. A \`while\` loop repeats a sequence of statements until some condition becomes false. \`If\`-statements execute a section of code if a given boolean evaluates to True. 

### For Loops

As we just mentioned, for loops iterate through each element of a list or iterator, making them really useful for manipulating arrays.

A basic [for loop](https://www.w3schools.com/js/js_loop_for.asp) will use the following syntax. Note the **first argument** is an index for the the start value, the **second** is a conditional for the index stating where the loop will stop when the value is false, and the **last** is the increment of the loop. Note the syntax, \`i++\` will increase i by 1 every single time the loop circles. The code in the middle is what will run.

```js
    for(let i=0; i<10; i++){
    console.log(`Iterator value is ${i}`);   // Remember that the output will show up in the Console.
  }  
```
 You can also iterate over arrays!

```js
 let array = [0, 1, 2, 3, 4]

 for(let i in array) {
    array[i] = array[i] ** 2;
  } 
  
  return array;
}
```

### While Loops

[While loops](https://www.w3schools.com/js/js_loop_while.asp) on the other hand iterate through a block of code as long as a specific condition remains true.

```js
var counter = 0;
while(counter < 5){
    console.log(`The counter is ${counter}, which is less than 5.`)
    counter += 1 // adds 1 to counter each time, will stop at 1000
}
```

But be careful! Loops that don't end are called infinite loops, and they will crash your program! In case you need to "jump out" or skip over an iteration of a loop, you can use the [\`break\` or \`continue\`](https://www.w3schools.com/js/js_break.asp) statements.


### Conditionals

Conditionals run pieces of code if an expression produces a boolean value. Your code can 'diverge' and run different paths.

Conditionals run if true, skip if false.

```js
 const num = 100;
  
  if(num == 100) {
    return "100!"
  }
  else {
   return "Not 100..." 
  }
```

If statements can be used to check if elements on in your page, or if properties are set to certain values. For example, you can toggle pop-up boxes on and off in a visualization by using an if statement to see if the layers is visible. If visible is true, hide the layer, and vice versa.

Conditionals are powerful! You can use multiple else statements to explore multiple options.

```js
var number = 100;

if(number == 100){
    return "Number is 100";
} else if(number < 100){
    return "Number is less than 100.";
} else if(number > 100){
    return "Number is greater than 100.";
}
```

## Functions

Just like Python, functions are pieces of code that can run when called upon. To use a function, it must be defined using the function declaration.

When defining a function, you also define the parameters that are required for the function. These parameters are placeholders for accepting variable values created outside of the function. For example, let's look at a basic function.

```js
function mult(a,b) {
    return a*b;
}

// call the function, providing arguments for the parameters
const x = 4;
const y = 5;

return mult(x,y); // run function with x and y as our arguments 
```

### Return Values
Functions often compute values that are then used in the DOM to either change the document (add or remove content), modify a variable (change a property value or visibility), or provide a value that is then used in another function. The computed values provided by the function are called **return values**. The \`return\` keyword is used in a function code block to tell the code to give a value back to the caller. Using the \`return\` keyword saves the return value for other use. Functions stop executing when the JavaScript reaches a \`return\` value. You can change variables without return values, but to receive values that can be used later, you use \`return\`.

### Parameters versus Arguments
In the function definition above, we listed parameters that are taken by the function. *Parameters* are placeholders for objects that will be passed to the function when called. *Arguments* are the real values of the objects received as parameters for the function when it is invoked.

If a parameter is defined in JavaScript, it must be passed an argument when invoked. However, it is possible to provide default values if an argument is not received. [More on that here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)


Methods are the options and actions that can be performed on objects. Using the car as an object analogy, the methods might be start, drive, brake, and stop. These are actions the car can perform. In other words, write a function that defines how to start the car. In JavaScript, to start the car, access the start method by using \`car.start()\`. Likewise, write one for brake. Access the brake method by using \`car.brake()\`.