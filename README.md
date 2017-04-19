# WebdriverIO and CucumberJS
> tldr; An example set up for CucumberJS and WebdriverIO, utilising tags, suites, page objects and reusable steps.

## Overview
An simple example of how to use CucumberJS with WebdriverIO, that takes screenshots of the page and a specified component every step.

It implements:

- Tags
- Suites
- Reusable steps
- Page objects

The project is structured to have feature files, page objects and steps inline with the code that relates to the feature.


It was important to have generic steps:

```
 Given I open the url "https://www.reddit.com"
```

And specific actions for pages:

```
Given I am on the homepage
```

A base page is extended by other pages.

> Almost all checks and actions come from the WebdriverIO's great [Cucumber Boilerplate](https://github.com/webdriverio/cucumber-boilerplate). 

## Usuage

### General
```
npm start
```

### Suites
```
node index.js --suite title
```

### Tags
```
node index.js --tags ~@component
```