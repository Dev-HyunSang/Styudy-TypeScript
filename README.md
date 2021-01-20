# Study TypeScript

## Learing Video
- [TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!](https://youtu.be/BwuLxPH8IDs)
- [TypeScript Setup With Node & Express](https://youtu.be/zRo2tvQpus8)

## Learing Documents
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## What IS TypeScipt
- Adds new Features + Advantages to JavaScript
- Browsers CAN'T execute it!
- A JavaScript Superset
- A Language buliing up on JavaScript

**Compiled to** Features are Compiled to JS(JavaScript) "workarounds", possible errors are thrown

## Why TypeScript?
```js
function add(num1, num2) {
    return num1 + num2;
};
console.log(add('2','3'));
```
```add('2','3')``` **Unwanted Behavior at Runtime**
=> **Mitigation Strategies** Add if check to add function Validate & sanitize user input => **Developers can still write invalid code!** => **TypeScript is a "Tool" that helps developers write better code!**

## Installing & Using TypeScript
*You must have [**Node.js**](https://nodejs.org/en/) and [**NPM**](https://www.npmjs.com/get-npm) before installing TypeScript.*
### Installing 
```shell
$ npm install -g typescript
```
### Using TypeScript
```shell
$ tsc 'TypeScritp File Name'
```
