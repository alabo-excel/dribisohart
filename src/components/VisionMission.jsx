import { HiSparkles } from "react-icons/hi";
import { FaBolt } from "react-icons/fa";

export function VisionMissionSection() {
  return (
    <section className="grid md:grid-cols-2 gap-6 py-16">

      {/* Vision card — soft gradient background */}
      <div
        className="relative rounded-3xl overflow-hidden min-h-[300px] p-8 flex flex-col justify-between"
        style={{
          background: 'linear-gradient(135deg, #d8c4ee 0%, #eedad2 35%, #bccce8 70%, #cac0e8 100%)',
        }}
      >
        {/* ripple overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 68% 52%, rgba(180,80,70,0.32) 0%, rgba(110,70,160,0.18) 42%, transparent 68%)',
          }}
        />

        <div className="relative z-10">
          <h2 style={{ textAlign: 'left' }} className="text-4xl font-black text-white mb-4">
            Vision
          </h2>
          <p style={{ textAlign: 'left' }} className="text-white/80 text-sm lg:text-base leading-relaxed max-w-xs">
            To empower individuals worldwide to unlock their potential, live authentically, and cultivate significant lives.
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between mt-10">
          <p style={{ textAlign: 'left' }} className="text-white/55 text-xs">
            Dr. Ibiso Hart — Coaching Philosophy
          </p>
          {/* <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/70">
            <HiSparkles size={14} />
          </div> */}
        </div>
      </div>

      {/* Mission card — dark background */}
      <div className="relative rounded-3xl overflow-hidden min-h-[300px] p-8 flex flex-col justify-between bg-[#111827]">
        <div>
          <h2 style={{ textAlign: 'left' }} className="text-4xl font-black text-white mb-4">
            Mission
          </h2>
          <p style={{ textAlign: 'left' }} className="text-white/65 text-sm lg:text-base leading-relaxed max-w-xs">
            To create a supportive, non-judgmental Coaching framework for self-discovery and holistic well-being through an interdisciplinary, evidence-based approach.
          </p>
        </div>

        <div className="flex items-end justify-between mt-10">
          <p style={{ textAlign: 'left' }} className="text-white/35 text-xs">
            Certified. Purposeful. Transformative.
          </p>
          {/* <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/45">
            <FaBolt size={13} />
          </div> */}
        </div>
      </div>

    </section>
  );
}
