import { FaEye, FaBullseye } from "react-icons/fa";

export function VisionMissionSection() {
  return (
    <section className="grid md:grid-cols-2 gap-8 py-16">
      <div className="p-6 text-center bg-gray-100 rounded-2xl shadow-lg">
        <FaEye className="text-4xl text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-blue-600">My Vision</h2>
        <p className="mt-4 text-lg">To empower individuals worldwide to unlock their potential, live authentically, and cultivate significant lives.</p>
      </div>
      <div className="p-6 text-center bg-gray-100 rounded-2xl shadow-lg">
        <FaBullseye className="text-4xl text-purple-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-purple-600">My Mission</h2>
        <p className="mt-4 text-lg">To create a supportive, non-judgmental Coaching framework for self-discovery and holistic well-being through an interdisciplinary, evidence-based approach.</p>
      </div>
    </section>
  );
}