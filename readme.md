1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById("id") -> Selects only one element by its id. (id is always unique).
getElementsByClassName("class") -> Selects all elements with that class name. It returns a list (HTMLCollection).
querySelector("selector") -> Selects the first element that matches a CSS selector (id, class, tag, etc.).
querySelectorAll("selector") -> Selects all elements that match a CSS selector. It returns a NodeList.


2. How do you **create and insert a new element into the DOM**?

Answer:
First, use document.createElement("tagName") to create a new element.
Then, set text or attributes with .innerText, .setAttribute(), etc.
Finally, insert it using .appendChild() or .append() to a parent element.

3. What is **Event Bubbling** and how does it work?

Answer:
Event bubbling means that when an event happens on a child element, it will also "bubble up" and trigger the same event on its parent elements.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:
Event delegation means adding the event listener to a parent element, not to each child.
It is useful because saves memory and works even for elements that are added later.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
preventDefault() -> Stops the default action of an element.
stopPropagation() -> Stops the event from bubbling up to parent elements.