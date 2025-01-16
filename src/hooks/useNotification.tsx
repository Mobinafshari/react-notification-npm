import { useCallback, useMemo, useState } from "react";
import "./notification.scss";
import { colord } from "colord";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

type ToastProps = {
  id: number;
  text: string;
  type?: "warn" | "error" | "success" | "info";
};


const colors = {
  warn: "#FEEC37",
  success: "#C2FFC7",
  error: "#FF748B",
  info: "#C4D9FF",
};

const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warn: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

const useNotification = (duration: number = 3000) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const trigger = useCallback(
    (text: string, type: ToastProps["type"] = "success") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, text, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration + 500);
    },
    [duration]
  );

  const Toasts = useMemo(() => {
    if (toasts.length === 0) return null;

    return (
      <>
        {toasts.map(({ id, text, type = "success" }, index) => {
          const notificationColor = colors[type];
          return (
            <section
            role="alert"
              key={id}
              className="notification notification-open"
              style={{
                top: 20 + index * 50,
                backgroundColor: notificationColor,
                borderColor: colord(notificationColor).darken(0.1).toHex(),
              }}>
              <div className="notification-text">
                {icons[type]}
                {text}
              </div>
              <AiOutlineClose
                onClick={() =>
                  setToasts((prev) => prev.filter((toast) => toast.id !== id))
                }
                fill="currentColor"
                style={{ cursor: "pointer" }}
              />
            </section>
          );
        })}
      </>
    );
  }, [toasts]);

  return { trigger, Toasts };
};

export default useNotification;
