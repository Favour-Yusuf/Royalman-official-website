// AboutContent.jsx
const AboutContent = () => {
    return (
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About ROYALMAN DIGITAL CONCEPT</h2>
          <p className="text-lg leading-7 text-gray-700 text-center max-w-3xl mx-auto mb-8">
            At ROYALMAN DIGITAL CONCEPT, we specialize in creating custom websites that speak your brand’s language and attract your ideal clients. We focus on personalized design that helps businesses shine online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tailored to You</h3>
              <p className="text-gray-600">Each website is custom-made to reflect your brand’s unique identity.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our team has handled complex projects with great results for our clients.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Focused on Conversion</h3>
              <p className="text-gray-600">We build websites that not only look great but also drive sales and leads.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutContent;
  