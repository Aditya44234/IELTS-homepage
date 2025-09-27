import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[var(--background)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Star className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold bg-[var(--primary-text)] bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join thousands of students who achieved their dream IELTS scores
            with our proven methods
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative h-96 mb-8">
            <div className="absolute inset-0">
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex;
                const isPrev =
                  index ===
                  (currentIndex - 1 + testimonials.length) %
                    testimonials.length;
                const isNext =
                  index === (currentIndex + 1) % testimonials.length;

                let transformClass = "translate-x-full opacity-0 scale-75";
                let zIndex = "z-0";

                if (isActive) {
                  transformClass = "translate-x-0 opacity-100 scale-100";
                  zIndex = "z-30";
                } else if (isPrev) {
                  transformClass = "-translate-x-full opacity-30 scale-75";
                  zIndex = "z-10";
                } else if (isNext) {
                  transformClass = "translate-x-full opacity-30 scale-75";
                  zIndex = "z-10";
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${transformClass} ${zIndex}`}
                  >
                    <div className="h-full max-w-4xl mx-auto">
                      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 h-full border border-gray-100 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full -ml-12 -mb-12"></div>

                        {/* Quote Icon */}
                        <Quote className="absolute top-8 right-8 h-16 w-16 text-blue-200/50" />

                        <div className="flex items-start space-x-8 h-full">
                          {/* Image Section */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                                {testimonial.score}
                              </div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="flex-1 flex flex-col justify-center">
                            <div className="mb-6">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {testimonial.name}
                              </h3>
                              <p className="text-blue-600 font-medium text-lg mb-4">
                                {testimonial.country}
                              </p>
                              <div className="flex items-center space-x-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-6 w-6 text-yellow-400 fill-current"
                                  />
                                ))}
                                <span className="ml-3 text-gray-600 font-medium">
                                  5.0
                                </span>
                              </div>
                            </div>

                            <blockquote className="text-xl text-gray-700 leading-relaxed italic font-light">
                              "{testimonial.text}"
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-40 group"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 group-hover:text-blue-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-40 group"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-blue-600"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div
              className={`w-2 h-2 rounded-full ${
                isPlaying ? "bg-green-500" : "bg-gray-400"
              }`}
            ></div>
            <span>{isPlaying ? "Auto-playing" : "Paused"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
