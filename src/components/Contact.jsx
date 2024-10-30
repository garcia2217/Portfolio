import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl font-light">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href="mailto:emmanuel.535220103@stu.untar.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
