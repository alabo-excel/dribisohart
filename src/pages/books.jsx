import FooterNav from '@/components/FooterNav';
import HeaderNav from '@/components/HeaderNav';
import React from 'react';

const books = () => {
  return (
    <div>
      <HeaderNav />
      <section className='lg:mx-20 mx-4 my-32'>
        <div className='lg:flex'>
          <img className='lg:w-1/2 lg:h-[100vh] object-cover' src="/images/book-cover.jpeg" alt="" />
          <div className='lg:w-1/2 p-4'>
            <h1 className='font-bold text-xl mb-3'>Unveiling the Lifematics Lifestyle Framework and book Series - A Transformative Framework for Holistic Living            </h1>
            <p className='text-sm'>
              LIFEMATICS LIFESTYLE authored by renowned business development expert and life coach, Dr. Ibiso Darlington Hart, presents the Lifematics Lifestyle book series, a revolutionary framework for holistic living.
              <br /> <br />

              Drawing upon scientific research, timeless wisdom, and her transformative journey, Dr Hart has crafted a comprehensive approach to well-being that addresses the interconnectedness of mind, body, and spirit.
              <br />

              Lifematics Lifestyle framework goes beyond traditional self-help, offering practical guidance on cultivating meaningful relationships, unleashing your creativity, discovering your true purpose, and navigating life's challenges with resilience.
              <br /> <br />

              The five core values of Lifematics Lifestyle are holistic approach, empowerment, authenticity, interdisciplinary wisdom, and transformation, these serve as foundational pillars for sustainable change and greater fulfilment.
              <br />

              More than just a lifestyle and book series, Lifematics Lifestyle is a framework dedicated to empowering a global community to embrace conscious living and unlock their full potential through workshops, coaching programs, and online resources.
              <br /> <br />
              Join Dr Hart on this transformative journey. Unleash your potential and transform your life with Lifematics Lifestyle.
            </p>
            <div className='lg:flex justify-between lg:text-left text-center'>
              <a href="https://www.amazon.com/dp/B0DGDKZYM2/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nNrdGwutXNYJptEDh3Ab4Q.3HjdSw5XuKNiEaV5UPwGsGWkfcIHH5mKPieYR_6eeXI&dib_tag=se&keywords=lifematics+lifestyle&qid=1725787584&sr=8-1" target='_blank'>
                <button className='p-3 rounded-md bg-[#011627] text-white px-8 mt-4'>Buy Now on Amazom</button>
              </a>

              <a href="https://dribisohart.gumroad.com/l/lifematics-lifestyle" target='_blank'>
                <button className='p-3 rounded-md bg-[#011627] text-white px-8 mt-4'>Buy Now on Grumroad</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <FooterNav />
    </div>
  );
};

export default books;