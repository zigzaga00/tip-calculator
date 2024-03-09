# breakdown of the tip project

## querySelector() method

```javascript=
const button = document.querySelector("button");
const output = document.querySelector(".output");
```

We start by selecting html elements using the `querySelector()` method which can be used on the `document` element.

This method lets us select elements in different ways by using *css* selectors - it will return to us the first element it finds based on the argument we pass to it. We can use more complex *css* selectors and combinations of them to select more specific elements from the *document* but in this case we do not need to do anything fancy :relieved: 

In our tip project, we first of all create a variable called *button* which will contain the first `button` element the `querySelector()` method finds in the `document` This is okay since there is only one `button` element in this simple project.

We next create a variable called *output* which will contain the first element from the `document` which has been assigned the class of `output` This shows how we can use *css* selectors to select elements. The `.` in `.output` illustrates this as this is how we make selections based on class names in *css*

---

## making the button clickable and adding a function

```javascript=
button.addEventListener("click", () => {
}
);
```

Next, we want to make the button clickable so it is interactive. We do this using the `addEventListener()` method which is builtin with javascript. It is therefore available with all element objects. We specify what type of event we want to listen for - this is given as the first argument to the `addEventListener()` method and in this case we want to listen for a *click* event.

We want to invoke a function when the button is clicked, so we add an anonymous function as a *callback* which will execute every time the button is clicked. We can use an *arrow function* :arrow_right: to save a little bit of time with the syntax but this is not necessary.

---

## adding the function code

```javascript=
button.addEventListener("click", () => {
    const cost = document.querySelector("input");
    let tip = (cost.value * 0.15).toFixed(2);
    let outputText = `<b>You should tip £${tip} on £${cost.value}`;
    output.innerHTML = outputText;
}
);
```

We first of all use the `querySelector` method to select the first `input` element in our *html* document. We only have one `input` element so this is fine. We store this returned element in a variable called *cost*

We next create a variable called *tip* which uses the *value* of the *cost* variable. We multiply the *value* of the *cost* variable (which is actually the *value* of our `input` element) by 0.15 since this is the percentage of the total cost which the user is adding as a tip.

We then use the `toFixed()` method to limit the number of decimal places we see. We specify the number of decimal places we want to show using *2* as an argument passed to `toFixed()`

The next part of our function places some *html* into a variable called *outputText* - this will replace the `innerHTML` of the element in our *html* document which has the `output` class assigned to it.

We use a string template literal to make our code easier to understand. We use `<b></b>` to bring attention to the output text since this is really what the user wants to know.

> [!NOTE]
> In html the `<b>` element is used to bring attention to things - not to make them bold :roll_eyes:

> [!TIP]
> If you insist on making things bold, you can use the CSS `font-weight` property to do so :thumbsup: 

The last part of our function uses the `innerHTML()` method to replace the inner html of the element stored in our *output* variable to show the tip and original cost as worked out in the *outputText* part of our function. This essentially changes the original text which asks for a total to be input to show the tip the user wanted to work out.

And so ends this walkthrough of our tip project - I hope it has been useful and thank you for taking the time to read it! :smiley: 
