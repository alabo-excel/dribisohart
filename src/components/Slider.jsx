import React from 'react';
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };

  return (
    <div>

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <Slider {...settings}>
        <div className='lg:text-lg text-sm'>
          Dr. Ibiso is dedicated, industrious, innovative, disciplined, and has a pleasant personality. She is one with a golden heart who does not miss any opportunity to render help to others. She has rendered selfless services as well as volunteered in various capacities both in the church and in the community.
          <p className='font-bold mt-4 text-center'>Ngozi Okeh</p>
          {/* <p className='text-center'>Founder Joe Joe</p> */}
        </div>
        <div className='lg:text-lg text-sm'>
          Dr. Ibiso is a mentor and life coach, and I have cherished every moment working with you so far.
          Your impact on the human race typifies you as a trailblazer and I Can't stop loving and praying for you always. Thank you for all you do for mankind.
          <p className='font-bold mt-4 text-center'>Pastor (Mrs.). Esther Uduak Anthony</p>
          {/* <p className='text-center'>Founder Joe Joe</p> */}
        </div>
        <div className='lg:text-lg text-sm'>
          Dr. Ibiso Hart is an extraordinary individual who has touched my life and the lives of many others in ways that words fail to describe. She is my confidante, my role model, and my best friend. I am blessed to have her as a sister and friend. She is my source of strength and inspiration and the person I admire most.
          <p className='font-bold mt-4 text-center'>Mrs Asitoa George Amadi</p>
          {/* <p className='text-center'>Founder Joe Joe</p> */}
        </div>
        <div className='lg:text-lg text-sm'>
          I have known Dr. Ibiso Hart for over two decades. She is full of empathy for others, very non-judgmental, and her confidence level is highly contagious. She is very engaging and has high energy.
          <p className='font-bold mt-4 text-center'>Wilfred F.K. Wokekoro ( SCMP)</p>
          {/* <p className='text-center'>Founder Joe Joe</p> */}
        </div>
        <div className='lg:text-lg text-sm'>
          Dr. Ibiso, my esteemed line manager at my former place of work, has left an indelible mark on my professional journey. Her unwavering guidance and invaluable support have been nothing short of remarkable.
          Under her expert guidance, I've undergone a profound evolution, emerging as a highly meticulous and detail-oriented worker. Dr. Ibiso's insightful feedback and strategic insights have not only enhanced my performance but have also instilled in me a deep commitment to precision and thoroughness.
          <p className='font-bold mt-4 text-center'>Ibibo Seleye-Fubara</p>
          <p className='text-center'>Senior Product Manager. </p>
        </div>
        <div className='lg:text-lg text-sm'>
          My experience working under the watch of Dr. Ibiso Darlington Hart as a customer service officer was an unforgettable experience of learning and growing. She is a kindhearted woman with a motherly heart.

          As an intern at First Bank, Port Harcourt, Trans Amadi branch, she guided me in all areas of knowledge. Today, she is one of my amiable inspirations who always makes me know that I can do better no matter where I'm coming from.
          <p className='font-bold mt-4 text-center'>Rev'd Kenneth C. Eke,</p>
          {/* <p className='text-center'>Founder Joe Joe</p> */}
        </div>
        <div className='lg:text-lg text-sm'>
          Dr. Ibiso has been a source of encouragement for me. I could recall us going to study together. Being close to her gave me an understanding of life expectancy. I was always encouraged by her humility and focus, as well as her ability to relate to friends. She was indeed very conserved and determined. Recently, I have found in her a lady who is determined to build a career for herself that will influence society positively. I still have this conviction that connecting with her can only be a plus in my life as an individual and family too.
          <p className='font-bold mt-4 text-center'>Engr. Onyige Emmanuel E. </p>
          {/* <p className='text-center'>Founder Joe Joe</p> */}
        </div>
        <div className='lg:text-lg text-sm'>
          I had the very distinct honor of meeting and working with Dr. Ibiso Hart in the First Bank Nigeria Rumuokoro branch and she made a lasting impact on my professional life would be an understatement. She was more than a colleague. She is a mentor, a role model and I dare say a dear friend.
          It wasn't just Dr. Ibiso's work ethic that impressed me. Her ability to connect with people on a profound level, she has a unique talent for making everyone feel valued and heard. She has an innate ability to bring out the best in others.
          <p className='font-bold mt-4 text-center'>Muoghalu Philip.</p>
          {/* <p className='text-center'>Founder Joe Joe</p> */}
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;