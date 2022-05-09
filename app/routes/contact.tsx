import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { commitSession, getSession } from "~/sessions";

const Input = ({ id, labelValue, type }: any) => {
  return (
    <>
      <label htmlFor={id} className="block mb-1">
        {labelValue}
      </label>
      <input
        name={id}
        type={type}
        className="border-gray-200 border shadow-sm rounded w-full"
      />
    </>
  );
};

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));

  session.flash("globalMessage", "Message successfully sent!");

  return redirect("/contact", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

const Contact = () => {
  return (
    <Layout>
      <section className="-mt-20 h-screen flex flex-col items-stretch justify-center">
        <form
          method="post"
          name="contact"
          action="/contact"
          data-netlify="true"
        >
          <div className="shadow-md rounded py-8 px-12 bg-white space-y-4 md:mx-16 lg:mx-32 xl:mx-64 text-zinc-700 text-sm">
            <div className="space-y-4 md:space-x-4">
              <div className="">
                <Input type="text" id="name" labelValue="Name" />
              </div>
            </div>
            <div className="">
              <Input type="email" id="email" labelValue="Email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border-gray-200 border shadow-sm rounded w-full resize-none h-32"
              />
            </div>
            <button
              name="Submit"
              type="submit"
              className="font-inconsolata shadow-lg shadow-pink-400/50 border-2 border-purple-700 rounded px-4 py-2 text-lg uppercase text-white bg-purple-700 transition hover:saturate-150 focus:saturate-150 inline-block cursor-pointer outline-offset-4 dark:bg-pink-500 dark:border-pink-500 dark:text-white dark:shadow-pink-700/50 focus:outline-none focus-visible:ring-4 "
            >
              Send!
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
