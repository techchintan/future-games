import Link from "next/link";

function ContactUs() {
  return (
    <div className="max-width-container padding-container">
      <article className="box relative bg-white">
        <h1 className="text-text-blue my-2 text-3xl font-semibold">Contact Us</h1>

        <div className="flex flex-col gap-4">
          <p className="text-sm">Have a question about QwiQ Games?</p>

          <p className="text-sm">We’d love to hear from you! 🙁😐🙂</p>

          <p className="text-sm">
            Send us a message and we’ll get back to you as soon as possible:{" "}
            <Link className="text-text-blue hover:underline" href="mailto:play.qwiqgames@gmail.com">
              play.qwiqgames@gmail.com
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}

export default ContactUs;
