import React from "react";
import { FaHandshake, FaRocket, FaHeart } from "react-icons/fa";

function About() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-12">
          About Us
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Welcome to our online store! We are dedicated to providing you with
          the best shopping experience possible, offering a wide range of
          high-quality products tailored to your needs and preferences.
        </p>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Our Story
          </h3>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Our journey began with a passion for delivering premium products
            directly to our customers' doorsteps. Over the years, we've grown
            into a trusted brand known for quality, variety, and exceptional
            customer service.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <FaRocket className="text-5xl text-orange-700 mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-center mb-2">
                Our Mission
              </h4>
              <p className="text-gray-700 text-center">
                To bring you the best shopping experience with high-quality
                products that suit every lifestyle.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaHandshake className="text-5xl text-orange-700 mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-center mb-2">
                Our Promise
              </h4>
              <p className="text-gray-600 text-center">
                A commitment to quality, reliability, and building lasting
                relationships with our valued customers.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaHeart className="text-5xl text-orange-700 mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-center mb-2">Our Values</h4>
              <p className="text-gray-600 text-center">
                We believe in transparency, customer satisfaction, and creating
                a positive impact through every product we offer.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
