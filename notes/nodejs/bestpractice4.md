### Best Practice #4: Clean Code & Easy Readability 

#### Use code linters, formatters and style guides; add comments.

##### Linting & Formatting 

 The main goal here is to improve code quality and make it easy to read. Most code setup workflows always contain a code linter and formatter. A linter looks for and warns about syntactically (and even semantically) erroneous code whereas a code formatter (as the name suggests) works towards the more stylistic aspects of your code to ensure a set of formatting and styling guidelines consistent across your whole project. Some of the most popular linters for Javascript are ESLint, JSLint and JSHint. For code formatting, you can look at Prettier. The good thing here is that most IDEs/code editors like Visual Studio Code (VSCode), Atom, etc understand the importance of writing quality code and provide linting and formatting plugins that are super intuitive and extremely easy to set up.

 These IDEs also provide useful features like intelligent code completion, auto imports, on-hover documentation support, debugging tools, code navigation, refactorings and so much more. So I highly recommend getting one of such IDEs (preferably VSCode) set up for your coding workflows.  


##### Style Guides 
Apart from linting and formatting, you can also refer to Javascript coding style and standards used by giants like Google and Airbnb. These guides cover everything from naming conventions (for files, variables, classes, etc) to formatting specifics to file encodings and so much more. This can help you write quality code that conforms to practices and standards used by some of the top developers in the world.


##### Add comments
When writing code, another important thing to be diligent about is adding helpful comments that other developers on your team can benefit from. All it takes is just a five to six-word sentence to nudge your teammate in the right direction towards understanding the purpose of even the most complex of code snippets. This saves everyone a lot of time and confusion and is therefore always a win-win situation.

One thing to note here is that we’ve also got to be intelligent with our comments i.e neither comment too much, nor too less. Worried about finding the balance? In the words of Michael Gary Scott, “You’ll learn baby. You’ll learn!”.

Comments also serve as a way to document your project’s API (for a top-level overview, copyright notice, author information etc), it’s classes (description, parameters), methods and named functions (description, parameters, return type etc). This can also be done using API documentation generator tools like JSDoc.


https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development
