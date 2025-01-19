import * as react_jsx_runtime from 'react/jsx-runtime';

type ToastProps = {
    id: number;
    text: string;
    type?: "warn" | "error" | "success" | "info";
};
declare const useNotification: (duration?: number) => {
    trigger: (text: string, type?: ToastProps["type"]) => void;
    Toasts: react_jsx_runtime.JSX.Element | null;
};

export { useNotification as default };
