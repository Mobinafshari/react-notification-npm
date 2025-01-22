import useNotification from "../hooks/useNotification";
import styles from "../hooks/notification.module.scss";

function Notification() {
  const { Toasts, trigger } = useNotification();

  return (
    <div className={styles["notification"]}>
      {Toasts}
      <button onClick={() => trigger("hello", "error")}>Show toast</button>
    </div>
  );
}

export default Notification;
