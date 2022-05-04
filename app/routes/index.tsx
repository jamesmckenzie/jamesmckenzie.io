import React, { useEffect, useRef, useState } from "react";
import { Hero } from "../components/Hero";
import { Layout } from "~/components/Layout";
import { json, LoaderFunction } from "@remix-run/node";
import { getSession, commitSession } from "~/sessions";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const message = session.get("globalMessage") || null;

  return json(
    { message },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

const Toast: React.FC<{ message: string }> = ({ message }) => {
  const [show, setShow] = useState(!!message);
  const ref = useRef(message);

  useEffect(() => {
    if (show) {
      let timer1 = setTimeout(() => setShow(false), 3 * 1000);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, []);

  return show ? (
    <div className="fixed bottom-8 right-2 -translate-x-1/2 -translate-y-1/2">
      <output
        role="status"
        className="text-green-800 dark:text-white bg-green-300 bg-opacity-30 border border-green-500 p-4  rounded shadow-md transition-transform "
      >
        {ref.current}
      </output>
    </div>
  ) : null;
};

const HomePage: React.FunctionComponent = () => {
  const { message } = useLoaderData();

  return (
    <>
      <Toast message={message} />
      <Layout>
        <section className="-mt-20 h-screen flex items-center">
          <Hero />
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
