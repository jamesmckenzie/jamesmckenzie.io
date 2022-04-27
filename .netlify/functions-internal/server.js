var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-2LOMTTA4.css";

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
  description: "A multi-disciplined Software Engineer based in London. currently building the future of banking at Checkout.com."
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_react3 = __toESM(require("react"));

// app/components/Hero/Hero.tsx
var Hero = () => /* @__PURE__ */ React.createElement("section", {
  className: "h-screen flex items-center"
}, /* @__PURE__ */ React.createElement("div", {
  className: "space-y-8"
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
  className: "text-pink-700 dark:text-pink-500 font-bold hover:underline hover:saturate-150 focus:saturate-150 transition-all",
  href: "https://www.checkout.com/"
}, "Checkout.com"), ". Specialising in modern ", /* @__PURE__ */ React.createElement("strong", null, "front end architecture"), " and", " ", /* @__PURE__ */ React.createElement("strong", null, "tooling"), ", I primarily work in", " ", /* @__PURE__ */ React.createElement("strong", null, "Typescript"), ", as well as staying up to date with modern application and systems programming in languages such as", " ", /* @__PURE__ */ React.createElement("strong", null, "Rust"), " and ", /* @__PURE__ */ React.createElement("strong", null, "Golang"), ".")), /* @__PURE__ */ React.createElement("div", {
  className: "ml-1 lg:ml-2"
}, /* @__PURE__ */ React.createElement("a", {
  href: "mailto:hello@jamesmckenzie.io",
  className: "font-inconsolata shadow-lg shadow-pink-400/50 border-2 border-purple-700 rounded px-4 py-2 text-lg uppercase text-purple-700 hover:text-white focus:text-white hover:bg-purple-700 focus:bg-purple-700 transition-colors hover:saturate-150 inline-block cursor-pointer outline-offset-4 dark:border-white dark:hover:border-pink-500 dark:focus:border-pink-500 dark:text-white dark:shadow-pink-700/50 dark:hover:bg-pink-500 dark:focus:bg-pink-500"
}, "Get in touch"))));
var Hero_default = Hero;

// app/components/SocialBar/SocialBar.tsx
var import_fi = require("react-icons/fi");
var SocialBar = () => /* @__PURE__ */ React.createElement("div", {
  className: "text-pink-700 dark:text-white flex space-x-8 items-center ml-2 lg:ml-4 absolute mt-20"
}, /* @__PURE__ */ React.createElement("a", {
  className: "hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all",
  href: "https://github.com/jamesmckenzie",
  "aria-label": "View James McKenzie's Github page"
}, /* @__PURE__ */ React.createElement(import_fi.FiGithub, {
  size: "2.5em"
})), /* @__PURE__ */ React.createElement("a", {
  className: "hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition",
  href: "https://twitter.com/jmc_kenzie",
  "aria-label": "View James McKenzie's Twitter profile"
}, /* @__PURE__ */ React.createElement(import_fi.FiTwitter, {
  size: "2.5em"
})), /* @__PURE__ */ React.createElement("a", {
  className: "hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all",
  href: "https://www.linkedin.com/in/james-mckenzie-10975314/",
  "aria-label": "View James McKenzie's LinkedIn profile"
}, /* @__PURE__ */ React.createElement(import_fi.FiLinkedin, {
  size: "2.5em"
})));
var SocialBar_default = SocialBar;

// route:/Users/jamesmckenzie/repos/jamesmckenzie.io/app/routes/index.tsx
var HomePage = ({ data }) => {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "h-screen bg-gradient-to-r from-purple-100 via-purple-200 to-blue-200 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "animate-fade max-w-7xl m-auto px-8 lg:px-32"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ import_react3.default.createElement(SocialBar_default, null)), /* @__PURE__ */ import_react3.default.createElement(Hero_default, null)));
};
var routes_default = HomePage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "3e0666f2", "entry": { "module": "/build/entry.client-2LTKF3X7.js", "imports": ["/build/_shared/chunk-EPO7GG74.js", "/build/_shared/chunk-FBE6NMDB.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WWVXSBJQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-NOOWTAA3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3E0666F2.js" };

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
