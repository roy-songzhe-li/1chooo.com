"use client";

import React, { useEffect } from "react";
import MapBox from "@/components/contact/map-box";
import { FaRegPaperPlane } from "react-icons/fa";
import PageHeader from "@/components/page-header";
import config from "@/config";

const { title } = config;

/**
 * TODO: #341 still need to update with another method to avoid client side not available metadata
 * export const metadata: Metadata = {
 *   title: `Contact | ${title}`,
 * };
 */

function Contact() {
  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, [title]);

  return (
    <article>
      <PageHeader header="Roy's Contact" />
      <section className="mb-[10px]">
        <MapBox googleMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8285843522257!2d138.60077207678848!3d-34.92128997292104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced1a5d0a0d9%3A0x2c7d0e4bef4a5d8f!2sThe%20University%20of%20Adelaide!5e0!3m2!1sen!2sau!4v1710047123456!5m2!1sen!2sau" />
        <h3 className="text-white-2 text-2xl font-bold mb-[20px]">
          Contact Form
        </h3>
        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>
          <button
            className="form-btn"
            disabled
            data-form-btn
            onClick={() => alert("not implemented yet!")}
          >
            <FaRegPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
