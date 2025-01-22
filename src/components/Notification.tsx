import useNotification from "../hooks/useNotification";


function Notification() {
  const { Toasts, trigger } = useNotification();

  return (
    <>
      {Toasts}
      <button onClick={() => trigger("hello", "error")}>Show toast</button>
    </>
  );
}

export default Notification;
