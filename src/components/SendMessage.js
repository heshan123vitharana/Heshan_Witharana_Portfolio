cd import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SendMessage = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    setSent(false);

    emailjs
      .sendForm(
        "service_s63lb5f",      // Your EmailJS service ID
        "template_l48n4bi",     // Your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg neon-border">
      <h2 className="text-2xl font-bold mb-4 gradient-text">Send Message</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-2 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-cyan-500 hover:bg-cyan-400 rounded font-bold neon-glow"
        >
          Send
        </button>
        {sent && <p className="text-green-400">Message sent successfully!</p>}
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </div>
  );
};

export default SendMessage;