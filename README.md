# Study TypeScript

## Learing Video
- [TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!](https://youtu.be/BwuLxPH8IDs)
- [TypeScript Setup With Node & Express](https://youtu.be/zRo2tvQpus8)

## Learing Documents
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Back-End / Node.js & Express
- [TypeScript 을 사용해 Express , Node.js 세팅](https://medium.com/@hckcksrl/typescript-%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-express-node-js-%EC%84%B8%ED%8C%85-12bbdd62513f)
- [TypeScript + Express + node.js 설정하기](https://velog.io/@y1andyu/TypeScript-Express-node.js-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [TypeScript로 Node.js Express 서버 개발하기](https://novemberde.github.io/node/2017/10/22/Express-Typescript.html)

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
**As I said before when using TSC, TypeScript is converted to JavaScript.**

```shell
$ tsc 'TypeScritp File Name'
```
