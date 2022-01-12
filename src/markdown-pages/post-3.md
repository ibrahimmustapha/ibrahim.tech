---
slug: "/blog/my-third-post"
date: "2019-06-08"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
hero_image: "./img1.jpg"
hero_image_alt: "green robot"
title: "My third blog post"
---

# Gatsby example websites

Example websites sit on one or the other end of the spectrum from very basic
to complex/complete.

A basic example website should demonstrate a specific technology/plugin/technique to help other developers understand how to accomplish a task. They should be named `using-*` (e.g. `using-sass`).

Complex/complete websites are for studying how to build more complex websites.

```javascript{numberLines: true}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

## Running an example site

1.  Enter one of the sites (e.g. `cd gatsbygram`)
2.  Install the dependencies for the site `npm install`
3.  Run the Gatsby development server `gatsby develop`

## Checklist for building an example website

- Free of errors
- Has Google Analytics setup
- Notifications setup to ping PRs on success/failure of build
- For `using-x` websites, link to the site from the plugin README and to the
  plugin(s) from the website.

## Building all the example websites

There's also a bash script in this folder called `build-all-examples.sh`, which automates the process of changing into each example folder, running `npm i`, and running `gatsby build`.

## Running an example site

1.  Enter one of the sites (e.g. `cd gatsbygram`)
2.  Install the dependencies for the site `npm install`
3.  Run the Gatsby development server `gatsby develop`

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}
```

Complex/complete websites are for studying how to build more complex websites.

## Running an example site

1.  Enter one of the sites (e.g. `cd gatsbygram`)
2.  Install the dependencies for the site `npm install`
3.  Run the Gatsby development server `gatsby develop`

![Bill_Gates](./img1.jpg)

## JavaScript codeblock example

~~~javascript
_.memoize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!has(cache, address)) cache[address] = func.apply(this, arguments);
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};
~~~