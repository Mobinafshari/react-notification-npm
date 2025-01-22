import "./assets/index-LG1T4yFP.css";
("use strict");
var e = require("react/jsx-runtime"),
  i = require("react"),
  t = require("colord"),
  r = require("react-icons/ai"),
  o = "notification_module_notification__a6c8efe9",
  s = "notification_module_notificationOpen__a6c8efe9",
  n = "notification_module_notificationText__a6c8efe9";
const c = {
    warn: "#FEEC37",
    success: "#C2FFC7",
    error: "#FF748B",
    info: "#C4D9FF",
  },
  l = {
    success: e.jsx(r.AiOutlineCheckCircle, {}),
    info: e.jsx(r.AiOutlineInfoCircle, {}),
    warn: e.jsx(r.AiOutlineWarning, {}),
    error: e.jsx(r.AiOutlineCloseCircle, {}),
  };
module.exports = (a = 3e3) => {
  const [u, d] = i.useState([]);
  return {
    trigger: i.useCallback(
      (e, i = "success") => {
        const t = Date.now();
        d((r) => [...r, { id: t, text: e, type: i }]),
          setTimeout(() => {
            d((e) => e.filter((e) => e.id !== t));
          }, a + 500);
      },
      [a]
    ),
    Toasts: i.useMemo(
      () =>
        0 === u.length
          ? null
          : e.jsx(e.Fragment, {
              children: u.map(({ id: i, text: a, type: u = "success" }, f) => {
                const C = c[u];
                return e.jsxs(
                  "section",
                  {
                    role: "alert",
                    className: `${o} ${s}`,
                    style: {
                      top: 20 + 50 * f,
                      backgroundColor: C,
                      borderColor: t.colord(C).darken(0.1).toHex(),
                    },
                    children: [
                      e.jsxs("div", { className: n, children: [l[u], a] }),
                      e.jsx(r.AiOutlineClose, {
                        onClick: () => d((e) => e.filter((e) => e.id !== i)),
                        fill: "currentColor",
                        style: { cursor: "pointer" },
                      }),
                    ],
                  },
                  i
                );
              }),
            }),
      [u]
    ),
  };
};
//# sourceMappingURL=index.js.map
