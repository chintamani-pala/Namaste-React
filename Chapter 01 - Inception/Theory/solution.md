## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is `Emmet`?
A: `Emmet` is a toolkit beloved by web developers for its ability to expedite HTML and CSS coding through `shorthand notation`. By employing simple abbreviations, developers can swiftly produce `complex code` structures, significantly `boosting productivity` during web development projects.


## Q: Difference between a `Library and Framework`?
A: A `library` is a collection of `pre-written code` that provides specific functionalities that developers can use in their applications. It's like a toolset where developers can pick and choose the tools they need for their project. A `framework`, on the other hand, is a more comprehensive set of tools and guidelines that dictate the `structure and flow of an application`. It provides a skeleton for the application and often requires developers to follow its `conventions and architecture`.


## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is named for its core principle of being `reactive to changes in data`. It's called "React" because it `allows developers to efficiently update the user interface in response to changes in application state`, leading to a more `dynamic and responsive user experience`. This reactivity is one of the fundamental features of React, making it a popular choice for building interactive and dynamic web applications.


## Q: What is `crossorigin in script tag`?
A: The crossorigin attribute in a `<script>` tag sets the mode of the request to an `HTTP CORS (Cross-Origin Resource Sharing)` request. It's used when `loading scripts from another domain` to indicate whether the browser should make a CORS request.
When set to "anonymous", the browser will omit credentials such as cookies or HTTP authentication, enhancing security when fetching the script cross-origin. This attribute is essential for `handling security concerns and ensuring proper resource sharing` between different domains on the web.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
A: `React` is a JavaScript library for building user interfaces, offering features like `component-based architecture and state management`. `ReactDOM`, on the other hand, is a package specifically tailored for `rendering React components into the DOM (Document Object Model)` of a web browser. It provides methods like `ReactDOM.render()` to mount components onto the DOM. In essence, `React focuses on UI development logic`, while `ReactDOM handles the integration of React components into the browser environment`. Together, they enable developers to create dynamic and interactive web applications efficiently.


## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: The `react.development.js` file is intended for `development environments`, featuring additional `debugging information and warnings to aid developers` in `troubleshooting and optimizing their code`. It has a larger file size due to these features, which can impact performance but provides valuable insights during development. Conversely, the `react.production.js` file is `optimized for production use`, removing debugging information to `reduce file size and improve performance`. It's smaller and more efficient, making it suitable for deployment in live applications where performance is critical.

## Q: What is `async and defer`?
A: `Async` Downloads the script `asynchronously while parsing HTML and executes it immediately after downloading`, without blocking HTML parsing.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` Also `downloads the script asynchronously but defers execution until after HTML parsing is complete`, ensuring scripts don't interfere with HTML rendering.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

For modern web development practices, always include type="module" in `<script>` tags to utilize ES6 modules:
```sh
<script type="module" src="main.js"></script> Place this tag within the head section of your HTML document.

```

For legacy browser support, utilize `<script defer nomodule>` as a fallback:
```sh
 <script defer nomodule src="fallback.js"></script>
```


Using `ES6 modules` improves code `organization and enables strict mode by default`, enhancing `performance and error reporting`. Execute scripts after DOM initialization for easier `DOM manipulation without extra event listeners`. This approach prevents global namespace pollution and supports `top-level await in compatible environments`. `Async loading enhances page load performance by parsing scripts asynchronously`.