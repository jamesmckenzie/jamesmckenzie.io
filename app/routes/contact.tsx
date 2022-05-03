import Background from "~/components/Backround";
import { Layout } from "~/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="-mt-20 h-screen flex items-center justify-center">
        <div className="shadow-md rounded p-16 bg-white space-y-4">
          <div className="space-x-4">
            <input className="border-2 border-gray-300 rounded px-4 py-2" />
            <input className="border-2 border-gray-300 rounded px-4 py-2" />
          </div>
          <input className="border-2 border-gray-300 rounded px-4 py-2 w-full" />
          <div>
            <textarea className="border-2 border-gray-300 rounded w-full"></textarea>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
