# useEffect

```js
useEffect(() => {
  // will run in every re-render. be careful!
});
```

```js
useEffect(() => {
  // will run every time "foo" changes. be careful not to use "setFoo" here
}, [foo]);
```

```js
useEffect(() => {
  // will run only after first render
}, []);
```

**Resources**

- [https://github.com/donavon/hook-flow](https://github.com/donavon/hook-flow)
