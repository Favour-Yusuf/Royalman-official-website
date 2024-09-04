import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Importing icons

const testimonials = [
  {
    name: "John Samuel - Owner of J.E.S Aluminium Services",
    quote: `"Working with Royalman Digital Concept was a game-changer for us. Our old website was outdated and difficult to navigate, but they created a stunning, user-friendly design that truly reflects our brand. Within the first month, we saw a 50% increase in conversions. The whole process was seamless, and the team was incredibly responsive to our needs. I can’t recommend them enough."`,
  },
  {
    name: "Ace Nkechi Agbah - Founder and CEO of Kechmelon Deliciousness",
    quote: `"I was hesitant to invest in a website redesign, but after my 10-minute consultation with Royalman Digital Concept, I knew I was in good hands. They took care of everything from start to finish, and the results have been phenomenal. Our bounce rates dropped significantly, and we’re now ranking higher on Google. Plus, they made the process stress-free and straightforward. Truly a fantastic experience."`,
  },
  {
    name: "Charles David - CEO of Charlgry Devia",
    quote: `"Royalman Digital Concept transformed our website into a powerful marketing tool. The new design is sleek, mobile-friendly, and optimized for SEO. We’ve seen a noticeable increase in online orders and customer engagement since the launch. Their attention to detail and commitment to getting everything just right was impressive. If you want a website that delivers real results, these are the people to talk to."`,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        Don’t Just Take Our Word for It…
      </h2>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 relative">
            <FaQuoteLeft className="absolute top-0 left-0 text-gray-300 text-3xl" />
            <FaQuoteRight className="absolute bottom-4 right-4 text-gray-300 text-3xl" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 italic leading-relaxed">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
