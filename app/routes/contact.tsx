import { Layout } from "~/components/Layout";

const Input = ({ id, labelValue, type }: any) => {
  return (
    <>
      <label htmlFor={id} className="block">
        {labelValue}
      </label>
      <input
        type={type}
        className="border-gray-200 border shadow-sm rounded w-full"
      />
    </>
  );
};

const Contact = () => {
  return (
    <Layout>
      <section className="-mt-20 h-screen flex flex-col items-stretch justify-center">
        <form name="contact" data-netlify="true">
          <div className="shadow-md rounded py-8 px-12 bg-white space-y-4 mx-32">
            <div className="space-y-4 md:space-x-4">
              <div className="">
                <Input type="text" id="name" labelValue="Name"></Input>
              </div>
            </div>
            <div className="">
              <Input type="email" id="email" labelValue="Email" />
            </div>
            <div>
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                id="message"
                className="border-gray-200 border shadow-sm rounded w-full resize-none h-32"
              />
            </div>
            <button type="submit" name="Submit">
              Send
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
