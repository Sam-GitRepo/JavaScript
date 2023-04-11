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




