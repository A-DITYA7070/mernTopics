

1. getElementById('title')  :- 

   getElementById is a method in JavaScript's Document Object Model (DOM) that is used to retrieve an element from the document based on its unique ID attribute. This method returns a reference to the first element with the specified ID in the document, or null if no such element exists.

    var element = document.getElementById(elementId);
    elementId: This is a string representing the ID of the element you want to retrieve.
    For example, if you have an HTML element with the ID "myElement":

    <div id="myElement">Hello, world!</div>
    You can use getElementById to retrieve this element in JavaScript:

    var element = document.getElementById('myElement');
    Now, the variable element holds a reference to the <div> element with the ID "myElement". You can then manipulate this element or access its properties and methods as needed.

    It's important to note that IDs should be unique within a document. If multiple elements have the same ID, getElementById will return the first matching element it encounters in the document. Additionally, IDs should follow the rules for HTML element IDs, such as starting with a letter (A-Za-z) and not containing spaces.
    
=> when we do document.getElementById('title');  one.html
   it returns the whole ele like => <h1 class="heading" id="title">Dom learning </h1>

   after selecting like let ele = document.getElementById('title');  
   we can use further function on that like ele.innerHTML or even we can manipulate it like ele.innerHTML = "aditya raj";

                                           [ GET AND SET ATTRIBUTES IN JS ]

        getAttribute and setAttribute are methods in JavaScript's DOM (Document Object Model) that are used to respectively retrieve and set attributes of HTML elements.

        getAttribute:

        The getAttribute method retrieves the value of the specified attribute on the element.
        It takes one argument, which is the name of the attribute you want to retrieve.
        If the attribute does not exist on the element, getAttribute returns null.
        javascript
        Copy code
        var element = document.getElementById('myElement');
        var value = element.getAttribute('data-custom');
        In this example, if the element with ID "myElement" has a custom data attribute called data-custom, the getAttribute method will return its value.

        setAttribute:

        The setAttribute method sets the value of the specified attribute on the element.
        It takes two arguments: the name of the attribute to set, and the value to set it to.
        If the attribute already exists, setAttribute will update its value. If it does not exist, setAttribute will create it.
      
        var element = document.getElementById('myElement');
        element.setAttribute('data-custom', '123');
        In this example, the data-custom attribute with the value '123' is set on the element with ID "myElement". If the attribute already exists, its value will be updated; otherwise, it will be created.

        Example:

        <div id="myElement" data-custom="value"></div>
        var element = document.getElementById('myElement');

        // Retrieving the value of the 'data-custom' attribute
        var value = element.getAttribute('data-custom');
        console.log(value); // Outputs: "value"

        // Setting the value of the 'data-custom' attribute
        element.setAttribute('data-custom', 'new-value');
        getAttribute and setAttribute are commonly used when you need to work with custom data attributes, manipulate existing attributes, or dynamically create new attributes on HTML elements using JavaScript.
                                     GET ATTRIBUTE :- 

   getAttribute :- It is used to get the attribute of the selected items like :- 
   let ele = document.getElementById('title');
   if we want to know the attribute of id or className we can use getAttribute function like
   ele.getAttribute('id') :- title
   ele.getAttribute('class') :- heading
                                  
                                      SET ATTRIBUTE :- 

   setAttribute :- It is used to set the attribute of the selected items like :- 
   let ele = document.getElementById('title');
   if we want to set attribute to this ele 
   ele.setAttribute('class','raj');
   ele.getAttribute('class') :- raj

Note :- setAttribute modifies/overrides the existing value of the attribute..
      if the value of class was previously adi then it will be modified to raj now if we want both the class then we can use..
      ele.setAttribute('class','adi raj');
      ele.getAttribute('class') :- adi raj

Note :-  we can add style by selecting elements..
     ex. ele.style.backgroundColor = "red" :- this will change the background color of the title to red...

                                          TextContent :- 

    textContent is a property in JavaScript's DOM (Document Object Model) that allows you to retrieve or set the textual content of an HTML element and all its descendants.

    Here's how textContent works:

    Retrieving Text Content:
    When you access the textContent property of an element, it returns a string representing the concatenated text content of the element and all its descendant elements.
    It returns the text content as a single string, ignoring any HTML markup. This includes text inside <script> and <style> elements.
    Any whitespace and line breaks within the elements are preserved.
    Example:

    <div id="myElement">
        This is <em>italic</em> text.
    </div>
    var element = document.getElementById('myElement');
    console.log(element.textContent); // Output: "This is italic text."
    Setting Text Content:
    When you set the textContent property of an element, it replaces all existing content within the element with the specified text content.
    Any existing HTML markup within the element will be removed, and the new content will be treated as plain text.
    Example:

    <div id="myElement">
        Initial content
    </div>
  
    var element = document.getElementById('myElement');
    element.textContent = 'New text content';
    console.log(element.textContent); // Output: "New text content"
    textContent is commonly used when you want to work with the textual content of elements without considering any HTML markup. It's particularly useful when you need to extract or modify text content dynamically using JavaScript, such as when building or updating the contents of a web page.

                                     Difference between innerText and textContent :- 
    innerText retrives data only if the text is not hidden but textContent can retrieve the data even if the display of the content is
    hidden .

    innerHTML supports tag also it will give the whole ele which is selected .. (if it is not used properly it is vulnerable)...
                      

                                     getElementByClassName :- 

    getElementsByClassName is a method in JavaScript's Document Object Model (DOM) that allows you to retrieve a collection of elements based on their class name. This method returns a live HTMLCollection of elements that have the specified class name.

    Here's how getElementsByClassName works:

    var elements = document.getElementsByClassName(className);
    className: This is a string representing the class name(s) you want to search for. You can specify multiple class names separated by spaces, and the method will return elements that have all of the specified class names.
    The getElementsByClassName method returns a live HTMLCollection, which means it's automatically updated when the underlying document changes (e.g., elements are added or removed). It's important to note that an HTMLCollection is not an array but rather an array-like object, so you can iterate over it using a loop, but it doesn't have array methods like forEach, map, etc.

    Example:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example</title>
    </head>
    <body>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>

        <script>
            var elements = document.getElementsByClassName('box');
            for (var i = 0; i < elements.length; i++) {
                console.log(elements[i].textContent);
            }
        </script>
    </body>
    </html>
    In this example, getElementsByClassName('box') returns a live HTMLCollection containing all elements with the class name "box". The script then iterates over each element in the collection and logs its text content to the console.
    
    To use it like array we need to convert the HTMLCollection returned by document.getElementByClassName to array ..
    arr = Array.form(ele)
    Array.form is used to convert into array...  now we can use forEach,map etc on arr..

                                                    querySelector :- 


    querySelector is a method in JavaScript's Document Object Model (DOM) that allows you to select and retrieve the first element that matches a specified CSS selector. It returns the first matching element within the document or null if no elements match the selector.

    Here's how querySelector works:

    var element = document.querySelector(selector);
    selector: This is a string representing the CSS selector you want to use to select elements. It can be any valid CSS selector, such as tag names, class names, IDs, attribute selectors, etc.
    The querySelector method returns the first element in the document that matches the specified selector. If multiple elements match the selector, it only returns the first one. If no elements match the selector, it returns null.

    Example:
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example</title>
        <style>
            .box {
                background-color: lightblue;
                padding: 10px;
                margin-bottom: 10px;
            }
        </style>
    </head>
    <body>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>

        <script>
            var firstBox = document.querySelector('.box');
            console.log(firstBox.textContent);
        </script>
    </body>
    </html>
    In this example, document.querySelector('.box') selects the first element with the class name "box" in the document, which is the first <div> element. The script then logs its text content to the console. If no elements matched the selector, querySelector would return null.


                                          querySelectorAll 
    querySelectorAll is a method in JavaScript's Document Object Model (DOM) that allows you to select and retrieve a static NodeList of elements that match a specified CSS selector. It returns all elements that match the selector within the document, or an empty NodeList if no elements match.

    Here's how querySelectorAll works:

    var elements = document.querySelectorAll(selector);
    selector: This is a string representing the CSS selector you want to use to select elements. It can be any valid CSS selector, such as tag names, class names, IDs, attribute selectors, etc.
    The querySelectorAll method returns a static NodeList containing all elements in the document that match the specified selector. If no elements match the selector, it returns an empty NodeList.

    Example:

    html
    Copy code
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example</title>
        <style>
            .box {
                background-color: lightblue;
                padding: 10px;
                margin-bottom: 10px;
            }
        </style>
    </head>
    <body>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>

        <script>
            var boxes = document.querySelectorAll('.box');
            boxes.forEach(function(box) {
                console.log(box.textContent);
            });
        </script>
    </body>
    </html>
    In this example, document.querySelectorAll('.box') selects all elements with the class name "box" in the document, which are the three <div> elements. The script then iterates over each element in the NodeList using forEach and logs its text content to the console. If no elements matched the selector, querySelectorAll would return an empty NodeList.

=> By using query selector we can select the tag and specified tags aswell 
   ex :- let ele = document.querySelector('input[type="password"]');
         it will select the first input field with type password in the dom..
         we can now manipulate it too like ele.style.backgroundColor="red";

=> NodeList returned by querySelectorAll is not array its prototype.. it is nodeList.. we can access it by ele[0],ele[1] etc 
   we can loop it as well but can not use map,reduce,filter ...
=> we can use forEach on this ....
  ex :- ele.forEach(function(l){
    l.style.color="red"
  })

=> to use it as array we can convert nodeList as array..

