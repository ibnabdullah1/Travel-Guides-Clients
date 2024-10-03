import LinkBanner from "@/src/Components/Common/LinkBanner/LinkBanner";
import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
  return (
    <>
      <LinkBanner ActiveLocation="Contact-Us" subLocation={undefined} />
      <section className="text-gray-600 font-questrial relative px-5 py-14">
        <h1 className="heading text-center mb-6">Contact Us</h1>
        <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Google Maps Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bali%20Travel%20Guide%20Office&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Address
                </h2>
                <p className="mt-1">
                  Bali Travel Guide Office, 45 Beach Road, Kuta, Bali, Indonesia
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Email
                </h2>
                <a className="text-primary leading-relaxed">
                  info@traveldestinations.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  Phone
                </h2>
                <p className="leading-relaxed">+62-123-456-7890</p>
              </div>
            </div>
          </div>
          {/* Feedback Form Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Send Us a Message
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Have questions or need travel advice? Feel free to drop us a
              message. We are here to help you plan your next adventure!
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="appearance-none block w-full px-3 text-[12px] py-3 border rounded placeholder-secondary focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none block w-full px-3 text-[12px] py-3 border rounded placeholder-secondary focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                name="message"
                className="appearance-none block w-full px-3 text-[12px] py-2 border rounded-md placeholder-secondary focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <button className="flex justify-center gap-1 items-center px-3 py-2 font-medium bg-[#7fbc0390] transform duration-500 rounded hover:bg-[#7fbc03] text-white">
              <IoIosSend className="text-xl" />
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3">
              We will get back to you within 24 hours!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
