import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const testimonials = [
  { text: "Dr. Ibiso is dedicated, industrious, innovative, disciplined, and has a pleasant personality. She is one with a golden heart who does not miss any opportunity to render help to others. She has rendered selfless services as well as volunteered in various capacities both in the church and in the community.", name: "Ngozi Okeh" },
  { text: "Dr. Ibiso is a mentor and life coach, and I have cherished every moment working with you so far. Your impact on the human race typifies you as a trailblazer and I can't stop loving and praying for you always. Thank you for all you do for mankind.", name: "Pastor (Mrs.). Esther Uduak Anthony" },
  { text: "Dr. Ibiso Hart is an extraordinary individual who has touched my life and the lives of many others in ways that words fail to describe. She is my confidante, my role model, and my best friend. I am blessed to have her as a sister and friend. She is my source of strength and inspiration and the person I admire most.", name: "Mrs Asitoa George Amadi" },
  { text: "I have known Dr. Ibiso Hart for over two decades. She is full of empathy for others, very non-judgmental, and her confidence level is highly contagious. She is very engaging and has high energy.", name: "Wilfred F.K. Wokekoro (SCMP)" },
  { text: "Dr. Ibiso, my esteemed line manager at my former place of work, has left an indelible mark on my professional journey. Her unwavering guidance and invaluable support have been nothing short of remarkable. Under her expert guidance, I've undergone a profound evolution, emerging as a highly meticulous and detail-oriented worker.", name: "Ibibo Seleye-Fubara", role: "Senior Product Manager" },
  { text: "My experience working under the watch of Dr. Ibiso Darlington Hart as a customer service officer was an unforgettable experience of learning and growing. She is a kindhearted woman with a motherly heart. She guided me in all areas of knowledge. Today, she is one of my amiable inspirations who always makes me know that I can do better no matter where I'm coming from.", name: "Rev'd Kenneth C. Eke" },
  { text: "Dr. Ibiso has been a source of encouragement for me. Being close to her gave me an understanding of life expectancy. I was always encouraged by her humility and focus, as well as her ability to relate to friends. I still have this conviction that connecting with her can only be a plus in my life as an individual and family too.", name: "Engr. Onyige Emmanuel E." },
  { text: "I had the very distinct honor of meeting and working with Dr. Ibiso Hart and she made a lasting impact on my professional life. She was more than a colleague. She is a mentor, a role model and I dare say a dear friend. She has a unique talent for making everyone feel valued and heard.", name: "Muoghalu Philip" },
  { text: "Dr Ibiso Darlington Hart is an incredibly talented and passionate individual who consistently goes above and beyond in all of her endeavors. I have had the pleasure of working with Dr Ibiso on multiple career projects, and her dedication to excellence is truly inspiring.", name: "David Ibrahim (Optimistique)", role: "CEO Optimistique Digital World" },
  { text: "Dr Ibiso Hart is an astute leader with an exceptional indepth on the vicissitudes of life. She's an enigmatic maestro when it pertains to leadership. I saw exceptional collaboration, coordination, hospitality, encouragement on display from her. Her aura would lighten your mood up and bring back those lost smiles.", name: "Peace Kelechi" },
  { text: "Dr. Ibiso and I began our friendship through a professional connection, and over the years, it has evolved into a deep and meaningful bond. She made a profound impact on my life journey as a professional, a mother, and a wife. Her unique skills and genuine dedication to helping others achieve their goals are truly remarkable.", name: "Moji Ibeh" },
];

// each slide gets its own pair of back-card colors
const palette = [
  { back: '#CDE8FE', middle: '#7EC8E3' },
  { back: '#fde68a', middle: '#f59e0b' },
  { back: '#d1fae5', middle: '#34d399' },
  { back: '#fce7f3', middle: '#f472b6' },
  { back: '#e0e7ff', middle: '#818cf8' },
  { back: '#fee2e2', middle: '#f87171' },
  { back: '#fef3c7', middle: '#fbbf24' },
  { back: '#dbeafe', middle: '#60a5fa' },
  { back: '#ede9fe', middle: '#a78bfa' },
  { back: '#d1fae5', middle: '#6ee7b7' },
  { back: '#fef9c3', middle: '#eab308' },
];

const SliderComp = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (index) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 180);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];
  const colors = palette[current % palette.length];

  return (
    <div className="w-full">
      <div className="relative pt-8">
        {/* back card — color transitions with each slide */}
        <div
          className="absolute top-0 left-6 right-6 bottom-4 rounded-3xl"
          style={{
            backgroundColor: colors.back,
            transition: 'background-color 0.5s ease',
          }}
        />
        {/* middle card */}
        <div
          className="absolute top-4 left-3 right-3 bottom-2 rounded-3xl"
          style={{
            backgroundColor: colors.middle,
            transition: 'background-color 0.5s ease',
          }}
        />

        {/* main dark card */}
        <div className="relative bg-[#0f1c2e] rounded-3xl p-8 lg:p-10">
          {/* top-left icon */}
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8">
            <HiSparkles className="text-[#7EC8E3] text-sm" />
          </div>

          {/* content fades on slide change */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.18s ease',
            }}
          >
            <p style={{ textAlign: 'left' }} className="text-white text-base lg:text-lg font-medium leading-relaxed mb-8">
              &ldquo;{t.text}&rdquo;
            </p>
            <p style={{ textAlign: 'left' }} className="text-white/50 text-sm">
              {t.name}{t.role ? `, ${t.role}` : ''}
            </p>
          </div>
        </div>
      </div>

      {/* arrow buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          aria-label="Previous"
        >
          <FaArrowLeft className="text-gray-700 text-sm" />
        </button>
        <button
          onClick={next}
          className="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          aria-label="Next"
        >
          <FaArrowRight className="text-gray-700 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default SliderComp;
