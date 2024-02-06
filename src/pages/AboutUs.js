import React from 'react';
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <div>
          <div className='pt-[190px] xl:pl-[100px] xl:pr-[100px] '>
      <div className='text-center'><p className='text-3xl font-bold text-orange-600 item-center'>Who We Are</p>
       <img src='./assets/ab.png' alt='' className='w-[1200px] h-[300px]'/>
      </div>

      <div className='mt-5  bg-orange-400'>
        <p className='text-xl font-bold ml-2 mt-2'>Company</p>
        <p className='mt-3 ml-2'>Lifestyle is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups.</p>
        <p className='ml-2'>The customer is at the heart of our unique business model, which includes design, production, distribution and sales through our extensive retail network.</p>
      </div>

      <div className='mt-6 text-orange-900 grid xl:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
          <div>
            <p className='text-xl font-bold '>LIFESTYLE OWN</p>
            <p className='mt-3 '>LIFESTYLE OWN is our private label – that’s designed by us, and owned by you. If you’re looking for head-turning styles that are one-of-a-kind, AJIO OWN is what you should stock up on.</p>
          </div>
          <div>
          <p className='text-xl  font-bold'>Exclusive International Labels</p>
            <p  className='mt-3 '>We bring you the trendiest and most exclusive brands from around the world to your wardrobe. Forget scouring the net for what’s hot globally, we’ve got you covered</p>
          </div>
      </div>

      <div>
        <p className='mt-5 text-center bg-orange-400'>Why let a world that loves to police your wardrobe and your expression get the upper hand, anyway?
            So the next time someone says ‘Oh, that dress is too bold’ ‘Are you sure you’re the right size for this?’ ‘Maybe you should pick a colour that suits you’ or ‘Act your age and wear something else’, go ahead and do exactly what you please. When it comes to great style and personal expression, there should never be any regrets.</p>
      </div>

      <div className='mt-6 text-orange-900 grid xl:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
        <div>
        <p className='text-xl font-bold mt-8'>Capsule Collections</p>
        <p className='mt-3 '>If there’s an occasion to express your personal style, we’ve got a capsule collection to match. Shopping for a specific mood, event or style story has never been easier.</p>
        </div>

        <div>
        <p className='text-xl font-bold mt-8'>The Indie Experience</p>
        <p className='mt-3 '>Our Indie styles are literally art you can wear. They are carefully handpicked, so that only the most authentic, handcrafted pieces by artisans across the country and globe make the cut.</p>
        </div>


        <div>
        <p className='text-xl font-bold mt-8'>LIFESTYLE Style Tribe</p>
        <p className='mt-3 '>A high-fashion editorial where we feature the internet’s coolest cats. It’s where you get to read the stories of these influencers and shop their stunning shoot looks.</p>
        </div>


        <div>
        <p className='text-xl font-bold mt-8'>#LIFESTYLEtoday</p>
        <p className='mt-3 '>Our daily trend spotlight that lets you in on what’s hip and happening, and what you should be carting right now. Like they say, a trend each day keeps the blues away!</p>
        </div>


        <div>
        <p className='text-xl font-bold mt-8'>#LIFESTYLErecommends</p>
        <p className='mt-3 '>From the hailstorm of trends coming down on us every season, we only recommend the ones guaranteed to put you on the hit list. Watch out for these regular highlights.</p>
        </div>


        <div>
        <p className='text-xl font-bold mt-8'>#recommendsLIFESTYLE</p>
        <p className='mt-3 '>This is where we celebrate and showcase our most stylish customers, who’ve given us a shout-out on social while dressed in a trendy AJIO style. You could very well be on the list too.</p>
        </div>


        



      </div>

      
    </div>
    <Footer />
    </div>

    
  )
}

export default AboutUs
