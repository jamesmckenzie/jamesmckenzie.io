import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import { getColorScheme } from "./cookies";
import { getSession } from "./sessions";
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossoriginisolated: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;800&family=Poppins:wght@400;700&display=swap",
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "James McKenzie | Home",
  viewport: "width=device-width,initial-scale=1",
  description:
    "A multi-disciplined Software Engineer based in London. Currently building the future of banking at Checkout.com.",
});

export const headers: HeadersFunction = () => ({
  "Accept-CH": "Sec-CH-Prefers-Color-Scheme",
});

const getFlashMessage = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));

  return session.get("globalMessage") || null;
};

export const loader: LoaderFunction = async ({ request }) => ({
  colorScheme: await getColorScheme(request),
  gaTrackingId: process.env.GA_TRACKING_ID,
  flashMessage: await getFlashMessage(request),
});

const Toast: React.FC<{ message: string }> = ({ message }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(message);

  useEffect(() => {
    if (message) {
      setShow(true);
      let timer = setTimeout(() => setShow(false), 3 * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8  z-10 transition-all duration-500 ease-in-out ${
        show ? "opacity-100 -translate-y-1/2" : "opacity-0 -translate-y-100"
      }`}
    >
      <output
        role="status"
        className="text-green-800 bg-green-100  border border-green-500 p-4 rounded shadow-md transition-transform "
      >
        {ref.current}
      </output>
    </div>
  );
};

export default function App() {
  const { colorScheme, gaTrackingId, flashMessage } = useLoaderData();

  return (
    <html lang="en" className={colorScheme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Toast message={flashMessage} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
