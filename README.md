># `JavaScript`
* JavaScript is a client side scripting language.
* It is used to make web pages alive.
* It is used to programmatically perform actions within the page.
* When JavaScript was created, it was initially called “LiveScript”.

>### `What JavaScript can do?`

* JavaScript can execute not only in the browser, but also on the server.
* We will use JavaScript as a client as well as server side language.
* JavaScript has evolved greatly as a language and is now used to perform a wide variety of tasks. 

>### `What Can In-Browser JavaScript Do?`

If JavaScripts are used in any websites, then it should not be given any low level CPU permissions like switching off the CPU etc. That is why JavaScript is made with extremely safe permissions that does not have any permission to access low level CPU usage. 
* JavaScript can add new HTML and change existing HTML from DOM.
* It can even react to any events (actions).
* It can also manage the AJAX requests (GET or POST request)
* JavaScript can get and set cookies and use local storage.

> ### `What Can’t In-Browser JavaScript Do?`

* JavaScript cannot read or write to and from computer hard disk without user permissions. 
* The browser does not allow the JavaScript of any website to collect the AJAX information of the other website because it generates the error of  same origin policy.
* To summarize, JavaScript can only access the permitted resources but cannot access your documents on personal computers. 
  
These strict policies are developed to make sure that your computer is safe.

> ### `What Makes JavaScript a Unique language?`

* The most important thing that makes it a unique language is, it has a complete integration of HTML and CSS. They provide it with a lot of extra support.
* Also it provides the use of simple APIs (Application Programming Interface).
* It also supports the major modern browsers which are enabled by default. If you turn off the feature of JavaScript in the browser, you cannot access any website.


***
***

>## `Variables, Data Types and Operators`
variables are the data that stores value.
3 Ways to Declare a JavaScript Variable:
* Using var - var are available throughout the function in which they're declared.
* Using let - let only available inside the block where they're defined.
* Using const - const maintain constant values. 

```javaScript
var a = 78;
var b = "Sam";
```

```javaScript
console.log(a);
console.log(b);
```
### JavaScript has 8 Datatype
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

### Operators
There are two types of operators present in JavaScript- 
* Binary Operators - Binary operators work only on 2 operands. For example, x= x+6. Here ‘=’ and ‘+’ are two operands.
* Unary Operators - Unary Operators work only on 1 operand. For example, 3+4

---
---
>## `Strings`

Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
```javascript
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
```
```javaScript
var name = 'Sam';
var profession = 'Developer';
var message = 'Sam is a great guy';
var temp = `${name} is a 'nice' person "and" he is a ${profession}`;
```
$ symbol is used here to pick that particular string from the variable. And if we do, 
```javaScript
console.log(temp);
```


### Different Strings Functions
```javaScript
      var str = "This is a String";
      console.log(str);

      //First occurrence of a substring
      var position = str.indexOf("is");
      console.log(position);

      //Last occurrence of a substring
      position = str.lastIndexOf("is");
      console.log(position);

      //Substring from a string
      var substr = str.slice(1, 6);
      var substr1 = str.substr(1, 3);
      console.log(substr);
      console.log(substr1);
      
      //Replace a String
      var replaced = str.replace('String', 'sam');
      console.log(replaced);

      //convert the whole string to an uppercase or lowercase letters
      console.log(str.toUpperCase());
      console.log(str.toLowerCase());

      //Concat any two strings  
      var newString = str.concat('New String');
      console.log(newString);

      //Remove all the white spaces in the string  
      var strWithWhitespace = '     this  contains          whitespaces   ';
      console.log(strWithWhitespace);
      console.log(strWithWhitespace.trim());

      //extract any character from a string  
      var char3 = str.charAt(2);
      console.log(char3);

      console.log(str[3]);
```
---
---
> ## `Arrays & Objects`

The object class represents one of JavaScript’s data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor. we have two types of values used in JavaScript- primitive and reference.

#### Primitive Types
```JavaScript
      let myVar = 34;
      let myVar2 = "string";
      let myVar3 = true;
      let myVar4 = null;
      let myVar5 = undefined;
```

#### Apart from primitive data types, all the other are objects
```JavaScript
let employee = {
      name: "Sam",
      salary: 100000,
      age: 24,
      "name 2": 'Hritik'
      }
      console.log(employee);
```

#### Declare an array as follows-
```JavaScript
let names = [1, 2, 4, "Sam", undefined];
console.log(names);
```
#### To print the value present at any index number
```JavaScript
console.log(names[1])
```
#### We can also create arrays with the help of a new keyword 
```JavaScript
let names = new Array(23);
```
#### To know the length of an array
```JavaScript
console.log(names.length);
```
#### To sort this array, we can use sort() function
```JavaScript

names = names.sort();

```
#### we declare a new array as-

```JavaScript
let names = new Array(41, 2, 4, "Sam", undefined);
```
---
---

> ## `Functions`

A JavaScript function is a block of code designed to perform a particular task. They are one of the building blocks in JavaScript.

#### The above code with the help of JavaScript functions as follows-

```JavaScript
function greet(name){
          console.log(name + " is a good guy");
}
let name = "Sam";
let name1 = "Sharma";
let name2 = "Jha";
greet(name);
greet(name1);
greet(name2);
```

#### Return Something

```JavaScript
function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let returnVal = sum(1,2,3);
console.log(returnVal)
```

---
---

> ## `Interaction`

The webpage more interactive and decide how the user will interact with the page. These things will be done by Alert, Prompt, and Confirm.

#### alret()

The alert() method displays an alert box with a specified message and an OK button. It is often used to make sure information comes through to the user. The alert box takes the focus away from the current window and forces the browser and forces the browser to read the message

```JavaScript
alert("This is a message");
```
####  prompt()

The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want to input a value before entering a page. When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.
```JavaScript
let name = prompt("What is your name?", "Guest");
console.log(name);
```

#### confirm()

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used if you want the user to verify or accept something. The confirm box takes the focus away from the current window and forces the browser to read the message.  The confirm() method returns true if the user clicked "OK", and false otherwise. This method is only used if we want to double-check any task performed by the user.

```JavaScript
      let deletePost = confirm("Do you really want to delete this post?");  
      // console.log(deletePost);
      if(deletePost){
            console.log("Your post has been deleted successfully");
      }
      else{
            console.log("Your post has not been deleted");
      }
```

--- 
---

> ## `Lopps`

#### 3 ways to write  for loop in JS


```JavaScript
let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];

     for (let index = 0; index < friends.length; index++) {
      console.log("Hello friend, " + friends[index]);
     }
```

```JavaScript
friends.forEach(function f(element){
   console.log("Hello Friend, " + element + " to modern JavaScript");
     });
```

```JavaScript
for (element of friends){
      console.log("Hello Friend, " + element + " to modern JavaScript again");
     }
```
* To iterate through an object, we can use for/in loops.
```JavaScript
let employee = {
      name: "Sam",
      salary: 200000000,
      age: 24
    }

    for(key in employee){
      console.log(`The ${key} of employee is ${employee[key]}`);
    }
```
There are 2 More types of loop
* while
* Do-while
```JavaScript
let i =0;
    while(i<4){
      console.log(`${i} is less than 4`);
      i++;
    }
```
```JavaScript
let j =34;
    do{
      console.log(`${j} is do-while loop`);
      j++;
    }while(j<4);
```
---
---
>## `DOM (Document Object Model)`
When a web page is loaded, the browser creates a Document Object Model of the page.
The HTML DOM model is constructed as a tree of Objects:
![logo](https://www.w3schools.com/js/pic_htmltree.gif)

The HTML DOM (Document Object Model) is a standard object model and programming interface for HTML. It defines:

* The HTML elements as objects
* The properties of all HTML elements
* The methods to access all HTML elements
* The events for all HTML elements


```JavaScript
 <div id="main" class="container">
        <ul id="nav">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>More About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
```
* The most common way to access an HTML element is to use the id of the element **getElementById()**

```JavaScript
let main = document.getElementById('main');
console.log(main);
```
* Find all the elements with same class name, use **getElementsByClassName()**

```JavaScript
let containers = document.getElementsByClassName('container');
console.log(containers);
```
* Find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the **querySelector()**

```JavaScript
let sel = document.querySelector('container');
console.log("Selector returns ", sel);
```
* use **querySelectorAll()** to target the elements

```JavaScript
let sel = document.querySelectorAll('#nav');
console.log("Selector returns ", sel);
```
---
---

> ## `Events & Listening to Events`


HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

Here is a list of some common HTML events-

* Onchange-  An HTML element has been changed
* Onclick- The user clicks an HTML element
* Onmouseover-   The user moves the mouse over an HTML element
* Onmouseout-The user moves the mouse away from an HTML element
* Onkeydown- The user pushes a keyboard key
* Onload- The browser has finished loading the page


If we want that while clicking the button the paragraph should hide and by again clicking, it should come back, then we can write as follows-

```JavaScript
<button id="btn" onclick="toggleHide()">Show/Hide</button>
function toggleHide(){
      let btn = document.getElementById('btn');
      let para = document.getElementById('para'); 
      if(para.style.display != 'none'){
      para.style.display = 'none';
      }
      else{
      para.style.display = 'block';
      }
    }
```
* If we want to alert when the mouse pointer is on the paragraph

```JavaScript
let para = document.getElementById('para');
      para.addEventListener('mouseover', function run(){
            alert('Mouse Inside')
      });
```
* If we want to alert when the pointer is outside the paragraph,

```JavaScript
para.addEventListener('mouseout', function run(){
            alert('Mouse now went outside')
      });
```
---
---
> ## `setInterval & setTimeOut`

The window object allows execution of code at specified time intervals. These time intervals are called timing events.


* Executes a function, after waiting a specified number of milliseconds.

```JavaScript
setTimeout(function, milliseconds)
```
* Same as **setTimeout()**, but repeats the execution of the function continuously.
  
```JavaScript
setInterval(function, milliseconds)
```
* The **setTimeout()** method calls a function or evaluates an expression after a specified number of milliseconds. This function is only executed once. Use the **clearTime()** method to prevent the function running.
```JavaScript
function greet(){
        console.log("Hello Good Morning ");
    }
setTimeout(greet, 5000);
```
* To clear the timeout, we can use the function **clearTimeout()**
```JavaScript
console.log(timeOut);
```
* The setInterval function is used. It calls a function or evaluates an expression at specified intervals in milliseconds. It will continue calling the function until **clearInterval()** function is called or the window is closed
  
```JavaScript
setInterval(greet, 1000, "Harry", "Good Night");
```
* To stop this, we have to use **clearInterval()** as
```JavaScript
clearInterval(intervalId);
```
Another example
```JavaScript
function displayTime(){
        time = new Date();
        console.log(time);
        document.getElementById('time').innerHTML = time;
    }
    setInterval(displayTime,  1000);
```
---
---
> ## `Date & Time`

* Date objects are created with the **new Date()** constructor.
```JavaScript
let now = new Date();
console.log(now);
```
* To initialize the date of any given time
  
```JavaScript
let newDate = new Date("2029-09-30");
console.log(newDate)
```
* However, there is another way to initialize the date.
```JavaScript
// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
      let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
      console.log(newDate);
```
* We can also set date and time manually with the functions like **setDate()** and **setMinutes**
* 
```JavaScript
newDate.setDate(8);
newDate.setMinutes(29);
console.log(newDate)
```
* Through this constructor, we can initialize the date in the given format.
```JavaScript
let yr = newDate.getFullYear();
console.log("The year is ", yr);

let dat = newDate.getDate();
console.log("The date is ", dat);

let month = newDate.getMonth();
console.log("The month is ", month);

let hours = newDate.getHours();
console.log("The hours is ", hours);
```
---
---
> ## `Arrow Functions`

An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to this, arguments, super or new.target keywords. Arrow function expressions are ill-suited as methods, and they cannot be used as constructors.

```JavaScript
//Basic Function
function greet() {
      console.log('Good morning');
    }

    greet();

// Arrow function
let greet =  ()=> {
      console.log('Good morning');
     }
```
* We will get the same output as the above after executing this code. This function can also be used with the **setTimeout()** function 
  
```JavaScript
setTimeout(() => {
      console.log("We are inside setTimeout");
    }, 3000);
```
* Simply add the two numbers with the arrow functions 
  
```JavaScript
let sum2 = (a , b) => a + b;
```
* Any single variable in our code, then we don’t need to put any braces also
```JavaScript
let half = a => a/2;
```
* The use of lexical Function
```JavaScript
let obj1={
        names:["sam", "sharma", "Jha","verma", "raja","rajjo"],
        speak(){
            this.names.forEach((student)=>{
                console.log("Kukdoo Koo " + student);
            });
        }
    }
    obj1.speak();
```
* Made a speak function, add a forEach() loop to it, and then added an arrow function. But if we add a variable greeting and add this.greeting inside the console.log 
  
```JavaScript
let obj1={
        greeting: "Good Morning",
        names: ["Harry", "Rohan", "SkillF", "DjKhiladi"],
        speak(){
            this.names.forEach((student)=>{
                console.log(this.greeting + " Kukdoo Koo " + student);
            });
        }
    }
    obj1.speak();
```
---
---

> ## `h`
```JavaScript

```
```JavaScript

```
```JavaScript

```
```JavaScript

```
```JavaScript

```
```JavaScript

```
