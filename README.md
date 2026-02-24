## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### getElementById:
The getElementById method is a part of the Document Object Model (DOM) API. its select by sigle element.it is very fast. 
### getElementsByClassName:
The getElementsByClassName() method is used to get HTML elements of the same class names. its select by multiple element.it is Slightly slower. 

### querySelector:
Returns the first matching element in the DOM . If no match is found, it returns null.
### querySelectorAll:
Returns all matching elements as a NodeList, which is a collection of elements. If no match is found, it returns an empty NodeList.




### 2. How do you create and insert a new element into the DOM?
create a element  into the DOMusing document.createElement() method.
insert a new element into the DOM using Element.append() or Element.apeendChild()




### 3. What is Event Bubbling? And how does it work?
Event Bubbling like a bubble rising from the bottom  to the surface.
 it works:  when an event (like a click) happens on an element, it doesn't just stay there. It "bubbles up" to its parent, then its grandparent, and so on.




### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation as a "Smart Manager" strategy. Instead of giving instructions to every single employee (element). the instructions to the manager (parent element) and let them handle everything that happens in their department.
it useful because 1. Better Performance. 2. Works for "Future" Elements




### 5. What is the difference between preventDefault() and stopPropagation() methods?
### preventDefault() methods:
stops that specific "default" thing from happening, but the event still "bubbles up" the DOM tree. Common Use Case: Form validation or custom link behavior.
### stopPropagation() methods:
stops that specific "default" thing and Don't let this event bubble up any further. Common Use Case:Preventing a child click from triggering a parent's "close" or "delete" function.
