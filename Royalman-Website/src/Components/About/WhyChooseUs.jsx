// WhyChooseUs.jsx
const WhyChooseUs = () => {
    return (
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-brandTwo to-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tailored Websites</h3>
              <p>We create custom solutions for your business, so your site is unlike any other.</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer-Centric</h3>
              <p>We put your needs first and ensure satisfaction throughout the project.</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p>We help turn your visitors into loyal customers with websites that perform.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  