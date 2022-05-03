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
      <section className="-mt-20 h-screen flex items-center justify-center ">
        <form name="contact" data-netlify="true">
          <div className="shadow-md rounded p-16 bg-white space-y-4">
            <div className="space-y-4 md:space-x-4">
              <div className="inline-block w-full md:w-auto">
                <Input
                  type="text"
                  id="firstName"
                  labelValue="First name"
                ></Input>
              </div>
              <div className="inline-block w-full md:w-auto">
                <Input type="text" id="lastName" labelValue="Last name"></Input>
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
