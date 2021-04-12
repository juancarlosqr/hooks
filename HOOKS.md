# Hooks

## Agenda

### useState

```js
const [value, setValue] = useState(initialState);
```

or

```js
const [value, setValue] = useState(lazyInitializeState);
```

### useEffect

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

### useContext

```js
const { count } = React.useContext(CountContext);
```

## Important

1. Don't reach for context to solve every state sharing problem. Prefer composition as first option
2. Context does NOT have to be global to the whole app, but can be applied to one part of your tree
3. You can (and probably should) have multiple logically separated contexts in your app.

**Resources**

- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

### useReducer

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

```js
function nameReducer(previousName, newName) {
  return newName;
}

const initialNameValue = 'Joe';

function NameInput() {
  const [name, setName] = useReducer(nameReducer, initialNameValue);
  const handleChange = (event) => setName(event.target.value);

  return (
    <>
      <label>
        Name: <input defaultValue={name} onChange={handleChange} />
      </label>
      <div>You typed: {name}</div>
    </>
  );
}
```

### useRef

For values you want to persist for the full lifetime of the component.

```js
const refContainer = useRef(initialValue);
```

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

- Other useful hooks
