import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "My Gadget has the best tech products I've ever bought. The quality and customer service are outstanding!",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Gadget Reviewer",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Fast shipping and excellent product selection. I always find the latest gadgets here.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Professional Photographer",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "Their customer support helped me choose the perfect camera accessories. Highly recommended!",
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map(({ id, name, role, image, quote }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#78B04F]"
            />
            <p className="text-gray-600 italic mb-6">“{quote}”</p>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
