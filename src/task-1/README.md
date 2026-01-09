Task 1 of 2: Fix the request counter

You are working on an art marketplace application that allows a user to place multiple orders for the same art object at the same time. Each time the user clicks the “Buy” button, the “Pending” counter should increase by one. After three seconds, the “Pending” counter should decrease, and the “Completed” counter should increase.

However, the “Pending purchases” counter does not work as intended. When the “Buy” button is clicked, it decreases to -1 (which should not happen!). And if the button is clicked twice quickly, both counters behave unpredictably.

Why does this happen? Fix both counters.
