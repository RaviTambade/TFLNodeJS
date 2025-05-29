## Javascript DOM 

## 🏰 **Story: The Magical HTML Kingdom (Understanding DOM)**
> *“Let me tell you a story. Imagine your web page is a magical kingdom, and HTML is the blueprint for building that kingdom.”*

### **Step 1: HTML is the Blueprint**

> *The kingdom is built using blocks—these are HTML tags like `<div>`, `<p>`, `<h1>`, and `<img>`. Each tag is a room or object—maybe a throne room, a garden, a lamp post, or a picture on the wall.*

> *So when you write this in HTML:*

```html
<body>
  <h1>Welcome to the Kingdom</h1>
  <p>This is a magical land of code.</p>
  <img src="castle.jpg" />
</body>
```

> *…you’re designing the layout of the kingdom.*

### **Step 2: DOM is the Magical Family Tree**

> *Now imagine once the kingdom is built, a magical scroll is created—the **DOM**. It’s like a living **family tree** of all the rooms and objects in the kingdom.*

> *The `document` is the King’s scroll—it holds everything.*

> *Each tag becomes a **node** (just like a person in a family tree). The `<body>` is the parent, and inside it are children like `<h1>`, `<p>`, and `<img>`.*

> *So, if HTML is the building… then DOM is like the map to walk inside and interact with everything.*

### **Step 3: JavaScript is the Wizard**

> *In this magical world, there’s a wise wizard—**JavaScript**. This wizard can walk around the kingdom using the DOM scroll and make changes.*

> *Want to change the castle’s title?*

```javascript
document.querySelector("h1").textContent = "Welcome to JavaScript Castle";
```

> *Boom 💥! The wizard waves his wand, and the scroll is updated, and the kingdom changes instantly.*

### **Step 4: jQuery is the Helpful Assistant**

> *Now the wizard can be powerful but sometimes a bit slow with spells. So he hires a smart assistant—**jQuery**—who can do things quicker and with simpler words.*

```javascript
$("h1").text("jQuery Rules the Kingdom");
```

> *With just a few words, the assistant makes the same change—cleanly and efficiently.*

## **Wrap-up: What is the DOM?**

> *The DOM is like a **living blueprint** of your HTML world, created by the browser, so that JavaScript (and jQuery) can **see**, **change**, and **control** everything—like a wizard with a magical scroll.*

## Mentor Tip to Students:

> *"Once you start seeing your HTML page as a living, breathing structure—full of relationships and possibilities—you won’t just write code. You’ll build kingdoms where logic and creativity rule together. Learn to walk the DOM tree like a true explorer!"*

 Here's an overview of DOM manipulation techniques in JavaScript:

### Accessing DOM Elements:

#### 1. `document.getElementById()`:
Returns a reference to the element with the specified ID.

```javascript
let element = document.getElementById("myElement");
```

#### 2. `document.querySelector()`:
Returns the first element that matches a specified CSS selector.

```javascript
let element = document.querySelector(".myClass");
```

#### 3. `document.querySelectorAll()`:
Returns a NodeList containing all elements that match a specified CSS selector.

```javascript
let elements = document.querySelectorAll("div");
```

### Manipulating DOM Elements:

#### 1. Changing Content:
```javascript
// Changing text content
element.textContent = "New Text";

// Changing HTML content
element.innerHTML = "<b>New HTML</b>";
```

#### 2. Changing Attributes:
```javascript
// Setting attributes
element.setAttribute("src", "image.jpg");

// Getting attributes
let src = element.getAttribute("src");
```

#### 3. Changing Styles:
```javascript
// Setting styles
element.style.color = "red";

// Getting styles
let color = element.style.color;
```

#### 4. Adding and Removing Classes:
```javascript
// Adding a class
element.classList.add("active");

// Removing a class
element.classList.remove("inactive");
```

### Creating New Elements:

```javascript
// Create a new element
let newElement = document.createElement("div");

// Set attributes and content
newElement.textContent = "New Element";
newElement.setAttribute("class", "newClass");

// Append the new element to the DOM
parentElement.appendChild(newElement);
```

### Event Handling:

#### 1. Adding Event Listeners:
```javascript
element.addEventListener("click", function() {
    console.log("Element clicked");
});
```

#### 2. Event Delegation:
```javascript
parentElement.addEventListener("click", function(event) {
    if (event.target.classList.contains("child")) {
        console.log("Child element clicked");
    }
});
```

### Removing Elements:

```javascript
// Remove an element
parentElement.removeChild(childElement);
```

### Traversing the DOM:

```javascript
// Accessing parent element
let parentElement = childElement.parentElement;

// Accessing next sibling element
let nextSibling = childElement.nextElementSibling;

// Accessing previous sibling element
let previousSibling = childElement.previousElementSibling;
```

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Example</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div id="container">
        <button id="btn">Click me</button>
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>

    <script>
        // Accessing DOM elements
        let container = document.getElementById("container");
        let btn = document.getElementById("btn");
        let listItems = document.querySelectorAll("#list li");

        // Adding event listener
        btn.addEventListener("click", function() {
            container.style.backgroundColor = "lightblue";
        });

        // Iterating over list items
        listItems.forEach(function(item) {
            item.addEventListener("mouseover", function() {
                item.classList.add("highlight");
            });

            item.addEventListener("mouseout", function() {
                item.classList.remove("highlight");
            });
        });
    </script>
</body>
</html>
```

This example demonstrates basic DOM manipulation techniques such as accessing elements, changing content and styles, adding event listeners, and iterating over elements. DOM manipulation is a powerful aspect of JavaScript that allows you to create dynamic and interactive web pages.
