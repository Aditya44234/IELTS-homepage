import { useState } from "react";
import { features } from "../data/features";
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

export default function StunningFeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

 

  return (
    <section className="relative py-10 bg-[var(--background)] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80  rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-200 border border-blue-500/20 mb-6">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">
              Transform Your Future
            </span>
          </div>

          <h2 className="text-5xl md:text-4xl font-bold bg-[var(--primary-text)] to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Unlock Your
            <span className="block text-yellow-400  bg-clip-text text-transparent">
              True Potential
            </span>
          </h2>

          <p className="text-xl text-gray-100 max-w-5xl mx-auto leading-relaxed">
            Experience the future of learning with our revolutionary AI-powered
            platform that combines cutting-edge technology with world-class
            instruction to create truly personalized educational journeys.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: feature.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden">
                {/* Animated Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                >
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>

                    {/* Floating Elements */}
                    <div
                      className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-0`}
                    ></div>
                    <div
                      className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-100 scale-0`}
                    ></div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button
                      className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r ${feature.color} text-white shadow-lg hover:shadow-xl`}
                    >
                      <span>Explore More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
              </div>

              {/* Floating Background Element */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 ">
            <div className="flex items-center space-x-2 text-[var(--primary-text)]">
              <Users className="w-5 h-5" />
              <span className="font-medium">10k+ Active Learners</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-[var(--primary-text)] ">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">95% Success Rate</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-[var(--primary-text)]">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Enterprise Grade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
