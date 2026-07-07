# Client-Side State Management

## A Transflower Mentor Session

> **"Class, today we are not going to learn `localStorage`, `sessionStorage`, or cookies first."**

> **"We are first going to understand why they were invented."**

Because in software engineering,

**technology always comes after the problem.**

# Step 1 — Imagine You Are Shopping on Amazon

You open Amazon.

You search for a laptop.

You add it to your cart.

Then you open another page.

Surprisingly...

🛒 Your cart still contains the laptop.

You didn't add it again.

How did the browser remember it?

Students think.

One student replies,

> "The server remembered?"

The mentor smiles.

Sometimes yes.

But often...

**The browser remembers too.**

That is called **Client-Side State Management**.


# Step 2 — What is State?

Let's forget computers.

Imagine your classroom.

I ask,

> "Who is absent today?"

Someone writes the names on the whiteboard.

That whiteboard now stores the **current state** of the classroom.

If another student enters,

the board changes.

The **state has changed**.

Software works exactly the same way.

State simply means:

> **The current information that an application knows at this moment.**

Examples:

* Logged-in user
* Shopping cart
* Theme (Dark/Light)
* Selected language
* Current page
* Form values
* Notifications
* Chat messages
* User preferences

Every application has a state.


# Step 3 — Why Store State on the Client?

Imagine every click had to travel to the server.

Click Login

↓

Server

↓

Response

↓

Click Add to Cart

↓

Server

↓

Response

↓

Click Dark Mode

↓

Server

↓

Response

That would make the application slow.

Instead,

some information can safely stay inside the browser.

The browser becomes intelligent.

This improves:

* Speed
* User Experience
* Offline support
* Reduced server requests

That is the purpose of client-side state management.


# Step 4 — Where Can the Browser Store Data?

Imagine your home.

You don't keep everything in one place.

Money goes into a wallet.

Clothes go into a cupboard.

Food goes into a refrigerator.

Documents go into a locker.

Similarly,

the browser has different storage options.

Each one is designed for a different purpose.

Let's understand them one by one.


# 1. Cookies

## The Browser's Sticky Notes

Imagine visiting a hotel.

The receptionist gives you a small visitor card.

Every time you return,

you show the same card.

Cookies work like that.

They store tiny pieces of information.

Examples:

* Session ID
* Login Token
* Language Preference
* Remember Me
* Tracking Information

Characteristics:

- ✔ Small size
- ✔ Automatically sent to the server with requests
- ✔ Can have an expiry date

Think of cookies as **sticky notes attached to your browser**.


# 2. Local Storage

## Your Personal Locker

Suppose your company gives you a locker.

You keep your notebook inside.

Tomorrow you return.

The notebook is still there.

Local Storage behaves exactly like that.

Information remains even after:

* Closing the browser
* Restarting the computer
* Opening the website tomorrow

Good for storing:

* Dark Mode
* Language Preference
* Shopping Cart
* Recently Viewed Products

The mentor asks,

> "If I close Chrome today and open it tomorrow, should Dark Mode still be enabled?"

Students answer,

> "Yes."

Then Local Storage is the right choice.

# 3. Session Storage

## Your Classroom Desk

Imagine writing notes on your classroom desk.

As long as the class continues,

the notes remain.

When class ends,

everything is cleared.

Session Storage behaves exactly like that.

The data exists only while the browser tab is open.

Close the tab...

Everything disappears.

Good examples:

* Multi-step forms
* Temporary calculations
* OTP verification flow
* Current shopping checkout session

# 4. IndexedDB

## The Browser's Mini Database

Suppose your company has thousands of employee records.

Would you write them on sticky notes?

No.

You would use a database.

Browsers also have one.

It is called **IndexedDB**.

It stores:

* Large datasets
* Images
* Files
* Offline application data
* Cached API responses

Applications like Gmail and Google Docs use browser databases to continue working even without an internet connection.

Think of IndexedDB as **a small database inside your browser**.


# 5. Framework State

## The Application's Working Memory

Imagine a chef preparing food.

Ingredients are on the table.

The dish is not yet served.

Everything currently being prepared is the chef's working memory.

Frameworks like:

* React
* Angular
* Vue

maintain a similar working memory.

Examples:

* Current user profile
* Shopping cart
* Selected product
* Notification count
* Current page
* Authentication status

This information changes frequently while the application is running.

It is called **Application State**.

Large applications often use centralized state managers so every component sees the same data consistently.

# 6. URL Parameters

## Information Written in the Address

Imagine sending someone this URL:

```text
/products?category=laptop&brand=Dell
```

Without opening the application,

another user immediately sees:

* Laptop category
* Dell products

The state is encoded inside the URL.

Useful for:

* Search Filters
* Pagination
* Sharing Links
* Bookmarks

The URL itself becomes part of the application's state.

# 7. HTML5 History API

## Changing Pages Without Reloading

Think about Gmail.

You open:

Inbox

↓

Sent

↓

Drafts

↓

Settings

Does the browser reload the entire website every time?

No.

Modern Single Page Applications update the URL while keeping the application alive.

The History API allows:

* Forward navigation
* Back navigation
* URL updates
* Better user experience

This is one reason modern web applications feel as smooth as desktop applications.

# Which Storage Should I Choose?

| Requirement                                               | Best Choice                           |
| --------------------------------------------------------- | ------------------------------------- |
| Login session or small server-related data                | Cookies                               |
| Remember user preferences across browser restarts         | Local Storage                         |
| Temporary data for one browser tab                        | Session Storage                       |
| Large offline data and caching                            | IndexedDB                             |
| Data shared across UI components while the app is running | Framework State (React, Angular, Vue) |
| Share filters or page state with others                   | URL Parameters                        |
| Smooth navigation without full page reloads               | History API                           |


# Think Like a Software Engineer

Before choosing a storage mechanism, ask these questions:

* Should the server know this data?
* Should the browser remember it tomorrow?
* Should it disappear when the tab closes?
* Is the data sensitive?
* How much data do I need to store?
* Will different components need access to it?

The right answers lead you to the right storage solution.


# A Message from Your Transflower Mentor

Many students memorize:

* Cookies
* Local Storage
* Session Storage
* IndexedDB

But interviews are rarely about definitions.

An interviewer is more likely to ask:

> "You are building an online banking application. Where will you store the authentication token?"

Or,

> "You are building an e-commerce website. Where will you store the shopping cart?"

Or,

> "You are building an offline note-taking application. Which client-side storage will you choose?"

Those are engineering questions.

The technology is important.

But choosing **when** and **why** to use it is what makes you a software engineer.

**Remember:**

> Client-side state management is not about storing data.

> It is about helping the browser remember just enough information to provide a fast, responsive, and enjoyable user experience while using the right storage mechanism for the right problem.

## Using Cookies in Browswer
Sure, let's create a simple example of client-side state management using cookies in JavaScript. In this example, we'll create a simple counter that increments each time the user clicks a button, and we'll store the current count in a cookie to persist it across page reloads.

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie-based Counter</title>
</head>
<body>
    <h1>Cookie-based Counter</h1>
    <p>Current Count: <span id="count">0</span></p>
    <button id="incrementBtn">Increment</button>

    <script src="script.js"></script>
</body>
</html>
```

JavaScript (script.js):
```javascript
// Function to read a cookie by name
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Function to set a cookie with name, value, and expiration date
function setCookie(name, value, days) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    var cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
}

// Function to increment the counter
function incrementCounter() {
    var countSpan = document.getElementById('count');
    var count = parseInt(countSpan.innerText) + 1;
    countSpan.innerText = count;
    setCookie('counter', count, 365); // Store the updated count in a cookie
}

// Initialize the counter value from the cookie
window.onload = function() {
    var initialCount = getCookie('counter');
    if (initialCount !== null) {
        document.getElementById('count').innerText = initialCount;
    }
};

// Attach event listener to the button to increment the counter
document.getElementById('incrementBtn').addEventListener('click', incrementCounter);
```

In this example:

1. We have an HTML file with a header, a paragraph to display the current count, and a button to increment the count.
2. In the JavaScript file, we define two functions: `getCookie()` to read a cookie by name and `setCookie()` to set a cookie with a name, value, and expiration date.
3. We define another function `incrementCounter()` to increment the counter and update both the displayed count and the cookie value.
4. When the page loads (`window.onload`), we initialize the counter value by reading the 'counter' cookie. If the cookie exists, we update the count displayed on the page.
5. We attach an event listener to the button so that when it's clicked, the `incrementCounter()` function is called to update the count and the cookie.

With this setup, the counter will persist even if the user refreshes the page or closes and reopens the browser, thanks to the cookie-based state management.

## Using LocalStorage and SessionStorage

Sure, let's create a simple example of client-side state management using `localStorage` and `sessionStorage` in JavaScript. In this example, we'll create a simple todo list where users can add items, and the list will persist even if the user refreshes the page (using `localStorage`) or only for the duration of the session (using `sessionStorage`).

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Todo List</h1>
    <div>
        <input type="text" id="todoInput" placeholder="Add new todo">
        <button id="addTodoBtn">Add Todo</button>
    </div>
    <ul id="todoList"></ul>

    <script src="script.js"></script>
</body>
</html>
```

CSS (styles.css):
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

h1 {
    text-align: center;
}

input[type="text"] {
    padding: 5px;
    margin-right: 10px;
}

button {
    padding: 5px 10px;
}
```

JavaScript (script.js):
```javascript
// Function to initialize the todo list from storage
function initTodoList() {
    var todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    renderTodoList(todoList);
}

// Function to render the todo list
function renderTodoList(todoList) {
    var todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';
    todoList.forEach(function(todo, index) {
        var li = document.createElement('li');
        li.textContent = todo;
        todoListContainer.appendChild(li);
    });
}

// Function to add a new todo
function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todo = todoInput.value.trim();
    if (todo !== '') {
        var todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        todoList.push(todo);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList(todoList);
        todoInput.value = ''; // Clear the input field
    }
}

// Initialize the todo list when the page loads
window.onload = function() {
    initTodoList();
};

// Attach event listener to the button to add a new todo
document.getElementById('addTodoBtn').addEventListener('click', addTodo);
```

In this example:

1. We have an HTML file with a header, an input field for adding new todos, a button to add todos, and an unordered list (`<ul>`) where the todos will be displayed.
2. We have a CSS file to style the elements.
3. In the JavaScript file, we define three functions:
   - `initTodoList()`: Retrieves the todo list from `localStorage` and renders it on the page.
   - `renderTodoList(todoList)`: Renders the todo list items on the page.
   - `addTodo()`: Adds a new todo to the list, updates `localStorage`, and re-renders the todo list.
4. When the page loads (`window.onload`), we initialize the todo list by calling `initTodoList()`.
5. We attach an event listener to the "Add Todo" button so that when it's clicked, the `addTodo()` function is called to add the new todo to the list.

## localstorage vs. sessionstorage

`localStorage` and `sessionStorage` are two web storage mechanisms available in modern web browsers that allow web applications to store data locally within the user's browser. While they are similar in functionality, there are key differences between them:

1. **Lifetime**:
   - `localStorage`: Data stored in `localStorage` persists even after the browser is closed and reopened. It has no expiration time and remains stored indefinitely until explicitly cleared by the user or the web application.
   - `sessionStorage`: Data stored in `sessionStorage` is only available for the duration of the page session. It persists only as long as the browser tab or window is open. Once the tab or window is closed, the data is cleared and no longer accessible.

2. **Scope**:
   - Both `localStorage` and `sessionStorage` have a domain-wide scope, meaning that data stored in them is accessible across all pages from the same origin (i.e., same protocol, domain, and port).

3. **Storage Limit**:
   - The storage limit for `localStorage` is typically larger than that of `sessionStorage`. While the exact limit varies between browsers, it's usually around 5-10 MB per origin for `localStorage`, whereas `sessionStorage` usually has a smaller limit, often around 5 MB.

4. **Data Sharing**:
   - Data stored in `localStorage` is shared among all tabs and windows from the same origin, including those opened by the same user in different browser instances.
   - Data stored in `sessionStorage` is isolated to the specific tab or window where it was created. Each tab or window has its own separate `sessionStorage`, and data stored in one tab/window is not accessible from another tab/window.

5. **Persistence**:
   - `localStorage` is commonly used for storing long-term data such as user preferences, settings, or cached data that needs to persist across browser sessions.
   - `sessionStorage` is typically used for storing temporary data that is only needed for the duration of the user's interaction with the web application, such as form data or session tokens.

In summary, `localStorage` is suitable for storing data that needs to persist across browser sessions, while `sessionStorage` is more appropriate for storing temporary data that should be cleared when the user closes the tab or window. The choice between them depends on the specific requirements of the web application and the desired behavior of the stored data.