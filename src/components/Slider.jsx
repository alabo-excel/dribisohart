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
        <div className='lg:text-lg text-sm'>
          Dr Ibiso Darlington Hart is an incredibly talented and passionate individual who consistently goes above and beyond in all of her endeavors. I have had the pleasure of working with Dr Ibiso on multiple career projects, and her dedication to excellence is truly inspiring.
          <p className='font-bold mt-4 text-center'>David Ibrahim(Optimistique)</p>
          <p className='text-center'>CEO Optimistique Digital World</p>
        </div>
        <div className='lg:text-lg text-sm'>
          Dr Ibiso Hart is an astute leader with an exceptional indepth on the vicissitudes of life. I met her in  Salvation Ministries Church where the onus of Sanctuary leadership rested on her shoulders. Undoubtedly, she's an enigmatic maestro when it pertains to leadership. I saw exceptional collaboration, coordination, hospitality, encouragement on display from her, her aura when you come in contact with her would lighten your mood up and bring back those lost smiles. She had a unique way on advising correctly on all subject matters be it marriage, goal achievement,  self development, health management, relationship management and spiritual development just to mention a few.
          {/* The past few years have been insightful and impactful as she has given me access to feed from her wealth of knowledge. Reminiscing with smiles when I visited her with my fiance for introduction and advice for a healthy home. She didn't just encourage me, or recite the usual etiquette on a successful marriage, she gave me practical examples and real life scenarios on how third party interference has destroyed homes, how to be a virtuous wife and a blessing to the man(all round support to my husband & to the well being of our children). These words from my amiable heroine Dr Ibiso,  has been my bedrock and benchmark these past few years in marriage. */}
          {/* Seeing the startup of her website, I would encourage all to visit, be under her tutelage, take advantage of the opportunities that she shares which will boost the learner's career growth. In addition, Dr Ibiso has worked with crossfunctional teams during her days in the banking sector and currently the aviation industry. This wealth of experience has birthed multi faceted solution which is essential for every business or career person to a part off. */}
          <p className='font-bold mt-4 text-center'>From Peace Kelechi.</p>
          {/* <p className='text-center'>CEO Optimistique Digital World</p> */}
        </div>
        <div className='lg:text-lg text-sm'>
          Dr. Ibiso and I began our friendship through a professional connection, and over the years, it has evolved into a deep and meaningful bond. I state this without missing words: she is a role model and therefore qualifies to be called and have me as a career coach or life coach based on my experience with her. She made a profound impact on my life journey as a professional, a mother, and a wife.
          I wholeheartedly recommend connecting with her and exploring her website. Her unique skills and genuine dedication to helping others achieve their goals are truly remarkable. I am certain that her website will be a treasure trove of knowledge and guidance that will undoubtedly benefit anyone seeking to excel in their careers and personal lives.
          <p className='font-bold mt-4 text-center'>Moji Ibeh</p>
          {/* <p className='text-center'>CEO Optimistique Digital World</p> */}
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;