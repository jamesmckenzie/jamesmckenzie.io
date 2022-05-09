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

const HomePage: React.FunctionComponent = () => {
  const { message } = useLoaderData();

  return (
    <>
      <Layout>
        <section className="-mt-20 h-screen flex items-center">
          <Hero />
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
