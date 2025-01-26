<h1>React Notification library</h1>

<p>Fiest please import library in your project.</p>
<strong>import useNotification from "react-notification-npm"
</strong>
<hr/>

```js
const { Toasts, trigger } = useNotification();
  return (
    <div>
      {Toasts}
      <button onClick={() => trigger(message , "error")}>Show toast</button>
    </div>
```
