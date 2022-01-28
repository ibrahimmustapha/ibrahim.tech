---
slug: "/blog/big-o-notation-explained"
date: "2019-05-07"
description: "Big O notation is used to calculate how much time and space it takes an algorithms to be executed as input size grows (in computer science)."
author: "Mustapha Ibrahim"
github: "https://github.com/ibrahimmustapha"
hero_image: "./img2.jpg"
hero_image_alt: "green robot"
title: "Big O Notation Explained with an Example"
---

Computer programming is not just knowing the syntax of a programming language like Java or Python, there's more and the almighty big O is no exception. 
 
## What is big O notation

Big O notation is used to calculate how much time and space it takes an algorithms to be executed as input size grows (in computer science). 

## Big O notation basically talks about 2 (two) things:

- **Time Complexity**
-  **Space Complexity**

## Space Complexity

Space Complexity 
Space complexity in simple words is the amount of memory required by an algorithm ``computer program`` to be executed. 

Space complexity doesn’t really matter this days due how cheap computer memory has become. Time is more important these days.

## Time Complexity

Time complexity is the amount of time it takes an ``algorithm`` to run or be executed. Below are the 5 popular time complexities in big – notation.

- O (1)  -  Constant time
- O (log n)  - Logarithmic time
- O (n)  -  Linear time
- O (n log n)  -  Log-linear time
- O (n^2)  -  Quadratic

## An Example of an algorithm to make coffee to explain the concept better

- Pour hot water in a mug
- Pour coffee into a mug
- **Fetch sugar with a spoon**
- **Pour the sugar in to the tea**
- Repeat steps 3 and 4 until you’ve added the desired amount of sugar.

Looking at the algorithm above, the more the sugar the larger the algorithm grows 


| Amount of Sugar | Steps Involded |
| --------------- | -------------- |
| 1 spoon         | 4 steps        |
| 2 spoon         | 6 steps        |
| 3 spoon         | 8 steps        |


## How to Calculate the time complexity of the algorithm above (**with the example above**)

Number of desired sugar = n
Total number of steps =  2n + 2

The two in front of the n is the steps 3 and 4 (which is 2 steps)  and the other 2 is steps 1 and 2. This means steps one and two are constant steps because they do not change no matter the input size size (which  is sugar). 

The (n) represents the desired amount of sugar which changes depending on the person taking the coffee. In this case the time complexity is O(n) which is Linear Time Complexity. ``And also the time complexity of an algorithm is determined by the worst case scenario.``

## Why Linear Time Complexity
In linear time complexity, the algorithm grows directly proportional to the size of the input data. 

This means the bigger the input gets, the bigger the time it takes to execute the algorithm which makes it a linear time complexity. Just like this ⬇


| Amount of Sugar | Steps Involded |
| --------------- | -------------- |
| 1 spoon         | 4 steps        |
| 2 spoon         | 6 steps        |
| 3 spoon         | 8 steps        |


## Let’s talk about some of the types of time complexities down here⬇

### Constant Time Complexity O(1)
If it takes an algorithm the same amount of time to be executed regardless of the size of the input data, 

it is termed as a constant time complexity O(1).  This by far the best time complexity.

### Linear Time Complexity O(n)
In linear time complexity, the algorithm grows directly proportional to the size of the input data. 

This means the greater the bigger the input gets, the bigger the time it takes to execute the algorithm.

### Quadratic Time Complexity O(n^2)
In quadratic time complexity, the algorithm grows directly proportional to twice the size of the input data.

## Here’s a graph to demonstrate the time complexities mentioned above


![1200px-Comparison_computational_complexity.svg.png](https://cdn-images-1.medium.com/max/1000/1*eDRWfab60l7trIFmP4WuiQ.png)

Hi 👋 there I'm Ibrahim and Thanks for reading this article. 
And don’t forget to follow me on twitter [@codewithibrahim](https://twitter.com/codewithibrahim) for more content.

Subscribe to my channel  [Code With Ibrahim](https://www.youtube.com/channel/UCDtJePh9OtGrU9oaXXPNn8Q) 