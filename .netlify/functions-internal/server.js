var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/.pnpm/@remix-run+dev@1.4.0_react-dom@17.0.2+react@17.0.2/node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  headers: () => headers,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/cookies.ts
var import_node = require("@remix-run/node");
var colorSchemeCookie = (0, import_node.createCookie)("color-scheme");
var getColorSchemeToken = async (request) => await colorSchemeCookie.parse(request.headers.get("Cookie"));
var getColorScheme = async (request) => {
  const userSelectedColorScheme = await getColorSchemeToken(request);
  const systemPreferredColorScheme = request.headers.get("Sec-CH-Prefers-Color-Scheme");
  return userSelectedColorScheme ?? systemPreferredColorScheme ?? "light";
};

// app/styles/app.css
var app_default = "/build/_assets/app-ATFTGVWN.css";

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/root.tsx
function links() {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossoriginisolated: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;800&family=Poppins:wght@400;700&display=swap"
    }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "James McKenzie | Home",
  viewport: "width=device-width,initial-scale=1",
  description: "A multi-disciplined Software Engineer based in London. Currently building the future of banking at Checkout.com."
});
var headers = () => ({
  "Accept-CH": "Sec-CH-Prefers-Color-Scheme"
});
var loader = async ({ request }) => ({
  colorScheme: await getColorScheme(request)
});
function App() {
  const { colorScheme } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: colorScheme
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/routes/action/setTheme.tsx
var setTheme_exports = {};
__export(setTheme_exports, {
  action: () => action
});
var import_node2 = require("@remix-run/node");
var action = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === "light" ? "dark" : "light";
  return (0, import_node2.json)({ success: true }, {
    headers: {
      "Set-Cookie": await colorSchemeCookie.serialize(newColorScheme)
    }
  });
};

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action2,
  default: () => contact_default
});
var import_node4 = require("@remix-run/node");

// app/components/Layout/Layout.tsx
var import_react5 = __toESM(require("react"));

// app/components/Backround/Background.tsx
var Background = ({ children }) => /* @__PURE__ */ React.createElement("div", {
  className: " bg-gradient-to-r from-purple-100 via-purple-200 to-blue-200 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900"
}, children);
var Background_default = Background;

// app/components/Header/Header.tsx
var import_react4 = require("@remix-run/react");

// app/components/DarkModeToggle/index.tsx
var import_react3 = require("@remix-run/react");
var DarkModeToggle = () => {
  const fetcher = (0, import_react3.useFetcher)();
  return /* @__PURE__ */ React.createElement(fetcher.Form, {
    method: "post",
    action: "/action/setTheme"
  }, /* @__PURE__ */ React.createElement("button", {
    "aria-label": "Toggle dark mode",
    onClick: () => {
      const html = document.getElementsByTagName("html")[0];
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
      } else {
        html.classList.add("dark");
      }
    },
    id: "theme-toggle",
    type: "submit",
    className: "text-gray-500 dark:text-gray-400 hover:bg-gray-200 hover:shadow-inner dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-4  rounded-lg text-sm p-2.5 transition-all"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "dark:hidden",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "3"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "4.22",
    y1: "4.22",
    x2: "5.64",
    y2: "5.64"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "18.36",
    y1: "18.36",
    x2: "19.78",
    y2: "19.78"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "1",
    y1: "12",
    x2: "3",
    y2: "12"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "23",
    y2: "12"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "4.22",
    y1: "19.78",
    x2: "5.64",
    y2: "18.36"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "18.36",
    y1: "5.64",
    x2: "19.78",
    y2: "4.22"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "hidden dark:block",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }))));
};
var DarkModeToggle_default = DarkModeToggle;

// app/components/SocialBar/SocialBar.tsx
var import_fi = require("react-icons/fi");
var SocialBar = () => /* @__PURE__ */ React.createElement("div", {
  className: "flex space-x-8 text-pink-700 dark:text-white "
}, /* @__PURE__ */ React.createElement("a", {
  className: "hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all focus:outline-none focus-visible:ring-4  rounded-lg p-0.5",
  href: "https://github.com/jamesmckenzie",
  "aria-label": "View James McKenzie's Github page"
}, /* @__PURE__ */ React.createElement(import_fi.FiGithub, {
  size: "2.5em"
})), /* @__PURE__ */ React.createElement("a", {
  className: "hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition focus:outline-none focus-visible:ring-4  rounded-lg p-0.5",
  href: "https://twitter.com/jmc_kenzie",
  "aria-label": "View James McKenzie's Twitter profile"
}, /* @__PURE__ */ React.createElement(import_fi.FiTwitter, {
  size: "2.5em"
})), /* @__PURE__ */ React.createElement("a", {
  className: "hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all focus:outline-none focus-visible:ring-4  rounded-lg p-0.5",
  href: "https://www.linkedin.com/in/james-mckenzie-10975314/",
  "aria-label": "View James McKenzie's LinkedIn profile"
}, /* @__PURE__ */ React.createElement(import_fi.FiLinkedin, {
  size: "2.5em"
})));
var SocialBar_default = SocialBar;

// app/components/Header/Header.tsx
var HeaderLink = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement(import_react4.NavLink, __spreadProps(__spreadValues({}, props), {
    className: ({ isActive }) => `font-inconsolata focus:outline-none focus-visible:ring-4 px-4 py-3 dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-inner rounded transition-all ${isActive && "underline underline-offset-2 decoration-pink-700 decoration-4"}`
  }), /* @__PURE__ */ React.createElement("span", {
    className: " uppercase text-purple-900 dark:text-white text-lg"
  }, children));
};
var Header = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between space-x-8 items-center w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-x-2"
  }, /* @__PURE__ */ React.createElement(HeaderLink, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(HeaderLink, {
    to: "/contact"
  }, "Contact")), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-8"
  }, /* @__PURE__ */ React.createElement(SocialBar_default, null), /* @__PURE__ */ React.createElement(DarkModeToggle_default, null)));
};
var Header_default = Header;

// app/components/Layout/Layout.tsx
var Layout = ({ children }) => /* @__PURE__ */ import_react5.default.createElement(Background_default, null, /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "relative px-8 lg:px-32"
}, /* @__PURE__ */ import_react5.default.createElement("section", {
  className: "flex w-full justify-between h-20 py-4"
}, /* @__PURE__ */ import_react5.default.createElement(Header_default, null)), children));
var Layout_default = Layout;

// app/sessions.ts
var import_node3 = require("@remix-run/node");
console.log("asdfjlajdsf", process.env.SESSION_SECRET);
var { getSession, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    domain: false ? "jamesmckenzie.io" : void 0,
    expires: new Date(Date.now() + 6e4),
    httpOnly: true,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: true
  }
});

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/routes/contact.tsx
var Input = ({ id, labelValue, type }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: id,
    className: "block mb-1"
  }, labelValue), /* @__PURE__ */ React.createElement("input", {
    name: id,
    type,
    className: "border-gray-200 border shadow-sm rounded w-full"
  }));
};
var action2 = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("globalMessage", "Message successfully sent!");
  return (0, import_node4.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
var Contact = () => {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("section", {
    className: "-mt-20 h-screen flex flex-col items-stretch justify-center"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "post",
    name: "contact",
    "data-netlify": "true",
    action: "/contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-md rounded py-8 px-12 bg-white space-y-4 md:mx-16 lg:mx-32 xl:mx-64 text-zinc-700 text-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4 md:space-x-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(Input, {
    type: "text",
    id: "name",
    labelValue: "Name"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(Input, {
    type: "email",
    id: "email",
    labelValue: "Email"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "message",
    className: "block mb-1"
  }, "Message"), /* @__PURE__ */ React.createElement("textarea", {
    name: "message",
    id: "message",
    className: "border-gray-200 border shadow-sm rounded w-full resize-none h-32"
  })), /* @__PURE__ */ React.createElement("button", {
    name: "Submit",
    type: "submit",
    className: "font-inconsolata shadow-lg shadow-pink-400/50 border-2 border-purple-700 rounded px-4 py-2 text-lg uppercase text-white bg-purple-700 transition hover:saturate-150 focus:saturate-150 inline-block cursor-pointer outline-offset-4 dark:bg-pink-500 dark:border-pink-500 dark:text-white dark:shadow-pink-700/50 focus:outline-none focus-visible:ring-4 "
  }, "Send!")))));
};
var contact_default = Contact;

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
var import_react7 = __toESM(require("react"));

// app/components/Hero/Hero.tsx
var import_react6 = require("@remix-run/react");
var Hero = () => /* @__PURE__ */ React.createElement("div", {
  className: "space-y-8 animate-fade"
}, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
  className: "ml-2 lg:ml-4"
}, /* @__PURE__ */ React.createElement("span", {
  className: "text-purple-900 text-lg font-inconsolata dark:text-white"
}, "Hi, my name is")), /* @__PURE__ */ React.createElement("div", {
  className: "lg:-ml-4"
}, /* @__PURE__ */ React.createElement("h1", {
  className: "text-6xl lg:text-8xl text-pink-700 dark:text-pink-500 font-poppins font-bold uppercase saturate-150 tracking-tight"
}, "James McKenzie.")), /* @__PURE__ */ React.createElement("div", {
  className: "ml-1 lg:ml-2 "
}, /* @__PURE__ */ React.createElement("h2", {
  className: "text-purple-900 text-xl lg:text-3xl font-poppins font-bold dark:text-white"
}, "Your Friendly neighbourhood software engineer."))), /* @__PURE__ */ React.createElement("div", {
  className: "ml-1 lg:ml-2 max-w-2xl"
}, /* @__PURE__ */ React.createElement("span", {
  className: "text-zinc-700 text-base dark:text-white"
}, "I'm a multi-disciplined Software Engineer, currently building the future of banking at", " ", /* @__PURE__ */ React.createElement("a", {
  className: "text-pink-700 dark:text-pink-500 font-bold hover:underline hover:saturate-150 focus:saturate-150 focus:outline-none focus-visible:ring-4  rounded-sm transition-all",
  href: "https://www.checkout.com/"
}, "Checkout.com"), ". Specialising in modern ", /* @__PURE__ */ React.createElement("strong", null, "front end architecture"), " and", " ", /* @__PURE__ */ React.createElement("strong", null, "tooling"), ", I primarily work in", " ", /* @__PURE__ */ React.createElement("strong", null, "Typescript"), ", as well as staying up to date with modern application and systems programming in languages such as", " ", /* @__PURE__ */ React.createElement("strong", null, "Rust"), " and ", /* @__PURE__ */ React.createElement("strong", null, "Golang"), ".")), /* @__PURE__ */ React.createElement("div", {
  className: "ml-1 lg:ml-2"
}, /* @__PURE__ */ React.createElement(import_react6.Link, {
  to: "/contact",
  className: "font-inconsolata shadow-lg shadow-pink-400/50 border-2 border-purple-700 rounded px-4 py-2 text-lg uppercase text-purple-700 hover:text-white focus:text-white hover:bg-purple-700 focus:bg-purple-700 transition-colors hover:saturate-150 inline-block cursor-pointer outline-offset-4 dark:border-white dark:hover:border-pink-500 dark:focus:border-pink-500 dark:text-white dark:shadow-pink-700/50 dark:hover:bg-pink-500 dark:focus:bg-pink-500 focus:outline-none focus-visible:ring-4 "
}, "Get in touch")));
var Hero_default = Hero;

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/routes/index.tsx
var import_node5 = require("@remix-run/node");
var import_react8 = require("@remix-run/react");
var loader2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const message = session.get("globalMessage") || null;
  return (0, import_node5.json)({ message }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
var Toast = ({ message }) => {
  const [show, setShow] = (0, import_react7.useState)(!!message);
  const ref = (0, import_react7.useRef)(message);
  (0, import_react7.useEffect)(() => {
    if (show) {
      let timer1 = setTimeout(() => setShow(false), 3 * 1e3);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, []);
  return show ? /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "fixed bottom-8 right-2 -translate-x-1/2 -translate-y-1/2"
  }, /* @__PURE__ */ import_react7.default.createElement("output", {
    role: "status",
    className: "text-green-800 dark:text-white bg-green-300 bg-opacity-30 border border-green-500 p-4  rounded shadow-md transition-transform "
  }, ref.current)) : null;
};
var HomePage = () => {
  const { message } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(Toast, {
    message
  }), /* @__PURE__ */ import_react7.default.createElement(Layout_default, null, /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "-mt-20 h-screen flex items-center"
  }, /* @__PURE__ */ import_react7.default.createElement(Hero_default, null))));
};
var routes_default = HomePage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "b0ffb4b8", "entry": { "module": "/build/entry.client-BL6ZOP3O.js", "imports": ["/build/_shared/chunk-FKR6CAAF.js", "/build/_shared/chunk-JSO5GUHK.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-TCLBB4PS.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/action/setTheme": { "id": "routes/action/setTheme", "parentId": "root", "path": "action/setTheme", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/action/setTheme-YUOOPRQ4.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-TYXF7I7Y.js", "imports": ["/build/_shared/chunk-TJ3FBU6I.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-L6ZOQDLE.js", "imports": ["/build/_shared/chunk-TJ3FBU6I.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B0FFB4B8.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/action/setTheme": {
    id: "routes/action/setTheme",
    parentId: "root",
    path: "action/setTheme",
    index: void 0,
    caseSensitive: void 0,
    module: setTheme_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
