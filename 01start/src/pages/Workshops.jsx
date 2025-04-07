import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import basicPdf from '../assets/basic.pdf';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ title, description, imageSrc }) => {
  

  
  return (
    <div className="relative group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">{title}</h3>
        {description && (
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const BenefitCard = ({ title, imageSrc }) => {
 
  return (
    <div className="relative group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <p className="flex-1 text-lg text-white group-hover:text-orange-400 transition-colors duration-300 text-center sm:text-left">
          {title}
        </p>
      </div>
    </div>
  );
};

function Workshops() {
  const openPDF = () => {
    window.open(basicPdf, "_blank");
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080?text=Workshop%20Hero" 
            alt="Workshop hero" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="container mx-auto px-4 text-center relative z-10 py-20">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
            Workshop
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto mb-12">
            Embark on a transformative journey into the world of technology
          </p>
          <button 
          onClick={openPDF}
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1">
            Join Now
          </button>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Your Path to <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Excellence</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <FeatureCard title="Hands-on Learning" imageSrc="https://i.pinimg.com/736x/38/70/20/3870200bc28490733d4cbd74bf0421ce.jpg" />
            <FeatureCard title="Real-world Application" imageSrc="https://i.pinimg.com/736x/17/c0/cc/17c0cc041fc0164ff29ee64823d861c6.jpg" />
            <FeatureCard title="Innovation Challenges" imageSrc="https://i.pinimg.com/736x/63/8a/c9/638ac97c42b4d3457c7a46a43d61ed75.jpg"/>
            <FeatureCard title="Elite Certifications" imageSrc="https://i.pinimg.com/474x/b9/96/c1/b996c1f64985331818ad696a8a631b15.jpg" />
            <FeatureCard title="IIT India Finals" imageSrc="https://i.pinimg.com/474x/58/e4/cd/58e4cdd6570c27dcb377d9c190dddb40.jpg" />
          </div>
        </div>
      </section>

      {/* Explore Section with Parallax */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080?text=Tech%20Background')] bg-fixed bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Unleash and Explore
          </h2>
          <p className="text-xl text-orange-500 text-center max-w-3xl mx-auto mb-16">
            The World of Technology through Our Engaging Workshop
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Electronics" 
              description="Master circuit design and electronic components" 
              imageSrc="https://i.pinimg.com/474x/62/83/c2/6283c249c9ccac3466cff299e188289c.jpg"
            />
            <FeatureCard 
              title="Problem Solving" 
              description="Develop critical thinking abilities" 
              imageSrc="https://i.pinimg.com/474x/c8/e6/e9/c8e6e97dba3541c0d0fa97b23a166019.jpg"
            />
            <FeatureCard 
              title="Logic Development" 
              description="Build strong algorithmic foundations" 
              imageSrc="https://i.pinimg.com/736x/3e/10/e3/3e10e3c3b31a83c2e5b944f2e7139ef1.jpg"
            />
            <FeatureCard 
              title="Programming" 
              description="Create real-world applications" 
              imageSrc="https://i.pinimg.com/474x/75/87/df/7587df77ef521cf98057d0028ee983f1.jpg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section with Card Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Benefits
          </h2>
          <p className="text-xl text-orange-500 text-center max-w-3xl mx-auto mb-16">
            Transform your future with our comprehensive program
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              title="Master Technical Know-How for Future Innovation" 
              imageSrc="https://i.pinimg.com/474x/f8/29/fc/f829fcf1b453ba0905af3131281043c4.jpg"
            />
            <BenefitCard 
              title="Elevate Your Analytical and Logical Thinking Skills" 
              imageSrc="https://i.pinimg.com/474x/40/2d/d1/402dd15b276549d4d19ce46181476fd9.jpg"
            />
            <BenefitCard 
              title="Learn Meaningfully Through Playful Interactions" 
              imageSrc="https://i.pinimg.com/474x/68/ee/59/68ee59eac5c82fe09691bd5d92abfb6a.jpg"
            />
            <BenefitCard 
              title="Unlock Creativity and Gain Real-World Skills" 
              imageSrc="https://i.pinimg.com/474x/ef/db/1c/efdb1caa1b3b70293181c05652366f71.jpg"
            />
            <BenefitCard 
              title="Boost Your Career with Our Certification Programs" 
              imageSrc="https://i.pinimg.com/474x/4d/a4/44/4da4441108a5238b1d18206cac2ebbe8.jpg"
            />
            <BenefitCard 
              title="Sharpen Your Problem-Solving Skills" 
              imageSrc="https://i.pinimg.com/736x/9d/52/23/9d52237f05af19dc0bc235e5f5a805f5.jpg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section (New) */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Participants Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-black/50 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={`/api/placeholder/200/200?text=Person${index}`} 
                      alt={`Testimonial ${index}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Student Name</h4>
                    <p className="text-orange-500">Workshop Graduate</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "This workshop completely transformed my understanding of technology. 
                  The hands-on approach made complex concepts accessible and enjoyable to learn."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image Background */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080?text=CTA%20Background" 
            alt="CTA background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-purple-600/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Begin Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our workshop and become part of the next generation of tech innovators.
            Limited seats available for our upcoming session.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Register Now
            </button>
            <button 
            onClick={openPDF}
            className="px-8 py-4 bg-transparent border-2 border-orange-500 rounded-full text-xl font-semibold hover:bg-orange-500/10 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Workshops;