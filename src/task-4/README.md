## Sharing State Between Components

Sometimes you want the state of two components to always change together.  
To achieve this:

- Remove the state from both components
- Move the state to their **closest common parent**
- Pass the state down to the components via **props**

This pattern is known as **lifting state up**, and it is one of the most common and important practices when writing React applications.
