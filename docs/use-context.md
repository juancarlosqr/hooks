# useContext

```js
const { count } = React.useContext(CountContext);
```

## Important

1. Don't reach for context to solve every state sharing problem. Prefer composition as first option
2. Context does NOT have to be global to the whole app, but can be applied to one part of your tree
3. You can (and probably should) have multiple logically separated contexts in your app.

**Resources**

- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
