import { Target, Brain, Rocket, Award } from "lucide-react";
export const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Learning",
    description:
      "Advanced machine learning algorithms adapt to your unique learning style, creating personalized pathways that maximize retention and understanding.",
    color: "from-purple-500 to-indigo-600",
    accentColor: "purple",
    delay: "0ms",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision Tracking",
    description:
      "Real-time analytics and progress tracking help you stay on course with detailed insights into your learning journey and performance metrics.",
    color: "from-blue-500 to-cyan-600",
    accentColor: "blue",
    delay: "100ms",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Accelerated Growth",
    description:
      "Breakthrough learning techniques backed by cognitive science research to help you master new skills 3x faster than traditional methods.",
    color: "from-emerald-500 to-teal-600",
    accentColor: "emerald",
    delay: "200ms",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Certification",
    description:
      "Industry-recognized certifications from leading experts validate your achievements and boost your professional credibility in the marketplace.",
    color: "from-orange-500 to-red-600",
    accentColor: "orange",
    delay: "300ms",
  },
];
