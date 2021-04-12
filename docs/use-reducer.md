# useReducer

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
