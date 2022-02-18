---
slug: "/blog/react-hooks-explained"
date: "2019-05-10"
description: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies"
author: "Mustapha Ibrahim"
github: "https://github.com/ibrahimmustapha"
twitter: "https://twitter.com/codewithibrahim"
hero_image: "./assets/img6.png"
hero_image_alt: "react hooks"
title: "React Hooks Explained With Usestate"
---

You’re not a complete react developer if you don’t fully understand how react-hooks work. Hooks in react makes react more fun to code. Before the introduction of hooks and functional components in react, there was class components and States and Lifecycle. But first all, **what is react?** Let's talk about it.

## Table of content
---
> - [What is React?](#header1)
> - [Why should you learn react? ](#header2) 
> - [What are class components](#header3) 
> - [What are functional Components](#header4)
> - [Hooks](#header5)
> - [Why use Hooks](#header6)
> - [Conclusion](#header7)

### What is React?
<div id='header1'/>

React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies (wikipedea). React is used for building single page web applications (SPA). ``SPAs`` are web applications that render everything on a single page dynamically unlike the traditional websites that loads an entire new web page.

### Why should you learn react?
<div id='header2'/>

1. **Single Page Web Applications -** As I explained earlier, single page application ``(SPA)`` are web application that renders everything on a single webpage dynamically. React makes it possible to develop single page applications. Popular web applications like **Gmail, Netflix, Facebook, Twitter** are good examples of single page application.

2. **Easy to Maintain -** Web page applications written with react are ``99%`` of the time divided into smaller components. For example a portfolio web application can be divided into components such as ``home, about, contact and blog.`` This makes react code easy to maintain.

3. **Opensource -** Open source means the software is made available for free ``(not propriotory)``. React is free to use and modify to suit one's needs. As a developer, you get the chance to contribute to the develpment of React which gives you more experience and a big advantage in the job market. 

4. **Large Community -** React has a large community due to its popularity. According to <mark>Stackoverflow Developer Survey</mark> React is the most popular web framework. There are tons of forums, blogs and articles about React which comes in handy when developing projects. 

### What are Class Components
<div id='header3'/>

Class components are JavaScript classes that renders ``JSX``. Class components uses a method called ``render()`` to return JSX code.

#### Example of a functional Components
```js
class App extends React.Component {
    render() {
        return (
            <div>
            <p>I'm {this.props.age} years old.</p>
            </div>
        )
    }
}
```

### What are Functional Components
<div id='header4'/>

React functional components are JavaScript functions that accepts ``props`` (properties) which returns ``JSX``. JSX stands for JavaScript ``XML``. JSX allows us to write HTML elements in JavaScript code. 

#### Example of a functional Components
```js
function MyCompany(props) {
    return (
        <div>
        <h1>Hi, my name is {props.name}</h1>
        <p>Hello, Mr. React</p>
        </div>
    )
}
```

### Hooks
<div id='header5'/>

Hooks are functions that let you “hook into” React state and lifecycle features from function components. React hooks were initially introduced in ``React 16.8``. The beauty of hooks is that - it allows you to use state and other React components without writing a class. Hooks makes it possible to use states in ``React Functional Components.``

#### The useState Hook
The ``useState`` hook is called inside a ``functional component``. The ``useState`` hook is declared by returning two variables - i.e ``the current state and a function to update the state.`` 

#### An example to explain the concept of hooks 
```js
import React, { useState } from 'react'

function Example() {
    // Declare state variable
    const [count, setCount] = useState(0)
    return  (
        <div>
        <p>I am {count} years old </p>
        <button onClick={() => setCount(count + 1)}>
        Add +1
        </button>
        </div>
    )
}
```
It's totally okay to smash your computer right now (kiding. Ha!). You first declare the state variable 
```js
const [count, setCount] = useState(0)
```
This variable consist of the inital state variable ``(count)`` and a function to update the state ``(setCount).`` In this example the initial state (count) is set to 0. This function

In order to update the state ``(count)``, we call the function from an event handler i.e ``onClick`` to update the current state value. In this example, the current state value is incremented by 1 anytime a user clicks the button. 

### Why use Hooks
<div id='header6'/>

Hooks solves a number of issues with React. Some of these issues include -

1. It’s hard to reuse stateful logic between components i.e ``(class component).``
2. Complex components become hard to understand i.e ``(class component).``
3. Classes confuse both people and machines i.e ``(class component).``

### Conclusion
<div id='header7'/>

React hooks brings a lot of to the table and everyone should master it. Thanks for making it down here. 

Before you leave - follow me on twitter [@codewithibrahim](https://twitter.com/codewithibrahim). Have a nice day :)!