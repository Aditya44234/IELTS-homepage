import React from 'react';
import { Mic, FileText, Brain, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-12 w-12 text-white" />,
      title: "AI Speaking Practice",
      description: "Practice speaking with our advanced AI that provides instant feedback on pronunciation, fluency, and grammar.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <FileText className="h-12 w-12 text-white" />,
      title: "Mock Tests",
      description: "Take unlimited practice tests that mirror the real IELTS exam format with detailed performance analytics.",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Brain className="h-12 w-12 text-white" />,
      title: "AI Band Score Prediction",
      description: "Get accurate band score predictions and personalized recommendations to improve your performance.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Expert Tutoring",
      description: "One-on-one sessions with certified IELTS instructors who provide personalized guidance and strategies.",
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with expert instruction 
            to give you the best preparation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                <div className={`w-20 h-20 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group">
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;