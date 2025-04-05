import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Show success message
    alert("Thank you for your message. We will get back to you soon!");
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080?text=Contact%20Us"
            alt="Contact Us Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
            Contact Robot Wallah
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're here to help with your robotics journey. Reach out to our team
            with any questions.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Card 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
              <p className="text-gray-400">Support & Sales:</p>
              <p className="text-xl text-orange-500 hover:text-orange-400 transition-colors">
                +91 9310789520
              </p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-400">Send us a message:</p>
              <p className="text-xl text-orange-500 hover:text-orange-400 transition-colors">
                info@robotwallah.com
              </p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <p className="text-gray-400">Visit our headquarters:</p>
              <p className="text-xl text-orange-500 hover:text-orange-400 transition-colors">
                1030/31 Sector 3, Vaishali Ghaziabad, Uttar Pradesh, 201010
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080?text=Robot%20Background')] bg-fixed bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Send Us a{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
                  Message
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions about our robotics workshops or products? Fill
                out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
                Location
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Come experience our robotics center in person. We offer demos and
              tours by appointment.
            </p>
          </div>

          <div className="w-full h-96">
            <a
              href="https://www.google.com/maps?q=28.643194,77.336861"
              target="_blank"
              rel="noopener noreferrer"
            >
               <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.5514396105887!2d77.33427771108013!3d28.643202975557454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzM1LjUiTiA3N8KwMjAnMTIuNyJF!5e0!3m2!1sen!2sin!4v1742798900289!5m2!1sen!2sin"
           width="100%"
          height="450"
          style={{ border: "0" }} // ✅ Fixed style syntax
          allowFullScreen // ✅ Fixed attribute
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // ✅ Fixed camelCase
        ></iframe>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our robotics
              workshops and programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How can I register for a robotics workshop?",
                answer:
                  "You can register through our website by visiting the Workshops page and clicking on 'Join Now' or 'Register Now' buttons. Alternatively, you can contact us directly via email or phone.",
              },
              {
                question: "What age groups are your workshops suitable for?",
                answer:
                  "Our workshops are designed for students aged 10-18, with different programs tailored to specific age groups and skill levels. We also offer specialized programs for college students and professionals.",
              },
              {
                question: "Do I need prior experience with robotics to join?",
                answer:
                  "No prior experience is required for our beginner workshops. We have programs for all skill levels, from complete beginners to advanced robotics enthusiasts.",
              },
              {
                question: "What materials are provided during the workshops?",
                answer:
                  "All necessary robotics kits, components, tools, and learning materials are provided during our workshops. Participants only need to bring their enthusiasm and creativity!",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-xl mb-4 overflow-hidden hover:border-orange-500/30 transition-all"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080?text=Robotics%20Background"
            alt="Robotics CTA background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-purple-600/30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
              Join the Revolution?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Take the first step towards mastering robotics. Contact us today to
            learn more about our programs or schedule a demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Schedule a Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-orange-500 rounded-full text-xl font-semibold hover:bg-orange-500/10 transition-colors duration-300">
              View Programs
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connect With{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
                Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow us on social media to stay updated with our latest events,
              workshops, and robotics innovations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Facebook", icon: "facebook" },
              { name: "Twitter", icon: "twitter" },
              { name: "Instagram", icon: "instagram" },
              { name: "LinkedIn", icon: "linkedin" },
              { name: "YouTube", icon: "youtube" },
            ].map((social, index) => (
              <a
                href="#"
                key={index}
                className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <img
                    src={`/api/placeholder/32/32?text=${social.icon}`}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-300 mb-4">
                  Get the latest updates about our robotics workshops, events,
                  and technology trends directly to your inbox.
                </p>
                <img
                  src="/api/placeholder/400/200?text=Newsletter"
                  alt="Newsletter"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="newsletter-email"
                      className="block text-gray-400 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="interests"
                      className="block text-gray-400 mb-2"
                    >
                      Interests
                    </label>
                    <select
                      id="interests"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    >
                      <option value="all">All Updates</option>
                      <option value="workshops">Workshops Only</option>
                      <option value="events">Events Only</option>
                      <option value="tech">Technology Updates</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg py-3 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
