## Task 1 of 5: Fixed a Bug with Disappearing Text in an Input Field

### Problem
In the app, clicking a button displays a message, but at the same time **resets the text inside input fields**. This leads to a poor user experience, as the entered data is lost unexpectedly.

### Why This Happens
The issue occurs because the button click triggers a **component re-render or state reset**. Common reasons include:

- The input value is **not controlled by React state**.
- The state holding the input value is being **reset when the button is clicked**.
- The button is inside a `<form>` and has `type="submit"`, causing a **form submission and page refresh**.
- State is recreated due to conditional rendering or incorrect component structure.

### Solution
To prevent the input text from resetting:

1. Make the input a **controlled component** by storing its value in `useState`.
2. Ensure the button **does not reset state** unrelated to its action.
3. If inside a form, set `type="button"` or prevent default form submission.
