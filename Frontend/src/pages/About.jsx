import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-gray-700">
      {/* Banner */}
      <section className="bg-[#78B04F] text-white py-20 text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Learn more about our mission, values, and the team behind My Gadget.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-5 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          At <span className="text-[#78B04F] font-bold">My Gadget</span>, our mission is to provide the latest
          technology and gadgets with exceptional service and affordable pricing. We
          believe everyone should have access to quality tech that enhances their lifestyle.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100 px-5 md:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Fast Delivery",
              desc: "We deliver across the country with guaranteed speed and safety.",
            },
            {
              title: "Premium Products",
              desc: "We only sell original, high-quality gadgets from trusted brands.",
            },
            {
              title: "Customer Support",
              desc: "Get help anytime with our responsive support team.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-[#78B04F] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-5 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[1, 2, 3].map((id) => (
            <div key={id} className="p-5 border rounded-lg">
              <img
                src={`https://randomuser.me/api/portraits/men/${id + 20}.jpg`}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold">John Doe</h3>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#78B04F] py-20 px-5 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
        <p className="mb-6 text-lg">
          Browse our products and find the perfect gadget for you.
        </p>
        <a
          href="/products"
          className="bg-white text-[#78B04F] px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default About;
