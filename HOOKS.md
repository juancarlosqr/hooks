# Hooks

### useState

```js
const [value, setValue] = useState(initialState);
```

or

```js
const [value, setValue] = useState(lazyInitializedState);
```

### useEffect

For information on when the effect runs check the [hook-flow](https://github.com/donavon/hook-flow)

```js
useEffect(() => {
  // will run in every re-render. be careful!
});
```

```js
useEffect(() => {
  // will run every time either "foo" or "bar" changes. be careful not to mutate "foo" or "bar" inside here
}, [foo, bar]);
```

```js
useEffect(() => {
  // will run only after first render
}, []);
```

**Effects with cleanup function**

> Return a function to cancel or detach listeners, or cleanup values to avoid memory leaks

```js
useEffect(() => {
  window.addEventListener('some_event', listener);

  return () => window.removeEventListener('some_event', listener);
}, []);
```

```js
useEffect(() => {
  const interval = setInterval(() => {
    // This will run every second!
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

```js
useEffect(() => {
  const unsubscribe = service.subscribe();
  // or
  someService.subscribeToSomething(someId);

  return () => {
    unsubscribe && unsubscribe();
    // or
    someService.unsubscribeToSomething(someId);
  };
}, []);
```

### useLayoutEffect

Same api as `useEffect` but with the important difference that blocks the rendering!

For information on when the effect runs check the [hook-flow](https://github.com/donavon/hook-flow)

> What you need 99% of the time is `useEffect` but in the other 1% of cases, this is the simple rule for when you should use `useLayoutEffect`: If you are making observable changes to the DOM/UI, then it should happen in `useLayoutEffect`, otherwise `useEffect`.

### useContext

```js
const context = React.useContext(SolCountContext);
```

#### Important

1. Don't reach for context to solve every state sharing problem. Prefer composition as first option.
2. Context does NOT have to be global to the whole app, but can be applied to only one part of your tree.
3. You can (and probably should) have multiple logically separated contexts in your app.

### useReducer

```js
const [state, dispatch] = useReducer(reducer, initialState, lazyInitializer);
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

**For values you want to persist for the full lifetime of the component.**

```js
const refContainer = useRef(initialValue);
```

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const counterRef = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  useEffect(() => {
    // use it as needed
    counterRef.current = 10;
  }, []);

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

**External Resources**

- [📘 kentcdodds' react-hooks workshop](https://github.com/kentcdodds/react-hooks)
- [📘 kentcdodds' advanced-react-hooks workshop](https://github.com/kentcdodds/advanced-react-hooks)
- [🎥 10 React Hooks Explained // Plus Build your own from Scratch](https://www.youtube.com/watch?v=TNhaISOUy6Q)
- [hook-flow](https://github.com/donavon/hook-flow)
- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- [useEffect vs useLayoutEffect](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
- [react-native useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions)
- [react-native-community/hooks](https://github.com/react-native-community/hooks)
- [react-query](https://react-query.tanstack.com)
- [swr](https://swr.vercel.app/)
- [react-aria](https://react-spectrum.adobe.com/react-aria/)
- [mars-photo-api](https://github.com/chrisccerami/mars-photo-api)
