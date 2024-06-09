import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import { MdRocketLaunch, MdDonutSmallh, MdAnimation  } from "react-icons/md";
import { GrMoney, GrMultiple } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { IoIosPaper, IoIosWarning } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCalendarAlt, FaChrome, FaFlagCheckered, FaRoute, FaRunning, FaServer } from "react-icons/fa";


import 'react-vertical-timeline-component/style.min.css'; // import the styles
import "../style/projects/gurk.css"

function hexToRGBA(hex) {
  let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  return {"r" : r, "g" : g, "b" : b};
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}


const COLORS_BOX = [
  {
    color1: hexToRGBA("#f12711"),
    color2: hexToRGBA("#f5af19"),
  },
  {
    color1: hexToRGBA("#654ea3"),
    color2: hexToRGBA("#eaafc8"),
  },
  {
    color1: hexToRGBA("#11998e"),
    color2: hexToRGBA("#38ef7d"),
  },
  {
    color1: hexToRGBA("#373B44"),
    color2: hexToRGBA("#4286f4"),
  }
]

const COLORS_DEV = [
  {
    color1: hexToRGBA("#3f2b96"),
    color2: hexToRGBA("#3f2b96"),
  },  
  {
    color1: hexToRGBA("#333333"),
    color2: hexToRGBA("#dd1818"),
  },  
  {
    color1: hexToRGBA("#3C3B3F"),
    color2: hexToRGBA("#605C3C"),
  },  
  {
    color1: hexToRGBA("#7F00FF"),
    color2: hexToRGBA("#E100FF"),
  },
]

function Gurk() {

  const [currentImage, setCurrentImage] = useState(0)
  const [nextImage, setNextImage] = useState(1)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    let timeoutId;
  
    const tick = async () => {
      await new Promise((resolve) => (timeoutId = setTimeout(resolve, 4000)));
      setAnimate(true);
      await new Promise((resolve) => (timeoutId = setTimeout(resolve, 1000)));
      setAnimate(false);
      setCurrentImage(nextImage);
      setNextImage((nextImage + 1) % 6);
  
      timeoutId = setTimeout(tick, 0); // schedule the next tick
    };
  
    tick(); // start the interval
  
    return () => clearTimeout(timeoutId); // clear the timeout when the component is unmounted
  }, [nextImage]);


  const [storyBox, setStoryBox] = useState(0)
  const [animateStoryBox, setAnimateStoryBox] = useState(false)
  const [devStep, setDevStep] = useState(0)

  const clickOnStoryBox = async (box) => {
    setAnimateStoryBox(true)
    setStoryBox(box)
    await new Promise((resolve) => setTimeout(resolve, 500));
    setAnimateStoryBox(false)
  }

  const clickOndevStep = async (step) => {
    setDevStep(step)
  }




  return (
    <div className="gurk-page">
      <div className="gurk-container">
        <div className='gurk-header'>
          <div className='gurk-header-title'>
            <h1 className='title-gurk'>Gurk</h1>
            <h3 className='subtitle-gurk'>Or how to invest 500 hours to get the perfect chrome homepage</h3>
            <motion.button className='button-gurk' onClick={()=>window.open("https://gurk.app")}>Check it live!</motion.button>
          </div>
          <div className='boucher-trou'/>
          <div className='gurk-header-images-container'>
            <motion.div 
              className='image-gurk-container'
              initial={{ left : 0}}
              animate={{ left : animate ? '100%' : 0}}
              transition={{ duration: animate? 0.9 : 0, ease: 'easeInOut'}}
              style={{zIndex : 2}}
            >
              <img className='image-gurk' src={`/img/projects/gurk/gurk_${currentImage}.png`} alt='Gurk Homepage'/>
            </motion.div>
            <div className='image-gurk-container' style={{zIndex : 1}}>
              <img 
              className='image-gurk'
                src={`/img/projects/gurk/gurk_${nextImage}.png`} 
                alt='Gurk Homepage'
              />
            </div>
            <div className='image-transparent'><img className='image-gurk' src={`/img/projects/gurk/gurk_0.png`} alt='Gurk Homepage'/></div>
          </div>
        </div>
        <div className='arrow-bottom-container'>
          <motion.div initial={{opacity : 0.2}} whileHover={{opacity : 1, scale : 1.1}} style={{cursor : "pointer"}} onClick={()=> window.scrollBy({top : window.innerHeight, behavior: 'smooth'})}>
            <IoChevronDownOutline size={60}/>
          </motion.div>
        </div>

      <div className='story-gurk-container'>
        <div className='story-gurk-container2'>
          <h2>Origin and backstory</h2>

          <div className='story-gurk-content'>
            <div className='story-points-container'>
              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[0].color1.r}, ${COLORS_BOX[0].color1.g}, ${COLORS_BOX[0].color1.b}) 0%, rgb(${COLORS_BOX[0].color2.r}, ${COLORS_BOX[0].color2.g}, ${COLORS_BOX[0].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(0)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color1.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.b : 255}) 0%, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color2.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.b : 255})`,
                    color: `rgb(${ storyBox === 0 ? (COLORS_BOX[0].color1.r + COLORS_BOX[0].color2.r)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.g + COLORS_BOX[0].color2.g)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.b + COLORS_BOX[0].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color1.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.b : 255}) 0%, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color2.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.b : 255})`,
                    color: `rgb(${ storyBox === 0 ? (COLORS_BOX[0].color1.r + COLORS_BOX[0].color2.r)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.g + COLORS_BOX[0].color2.g)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.b + COLORS_BOX[0].color2.b)/2 : 255})`,
                  }}
                >
                  <FaChrome size={30}/>
                  <div>Chrome issue</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[1].color1.r}, ${COLORS_BOX[1].color1.g}, ${COLORS_BOX[1].color1.b}) 0%, rgb(${COLORS_BOX[1].color2.r}, ${COLORS_BOX[1].color2.g}, ${COLORS_BOX[1].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(1)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color1.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.b : 255}) 0%, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color2.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.b : 255})`,
                    color: `rgb(${ storyBox === 1 ? (COLORS_BOX[1].color1.r + COLORS_BOX[1].color2.r)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.g + COLORS_BOX[1].color2.g)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.b + COLORS_BOX[1].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color1.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.b : 255}) 0%, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color2.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.b : 255})`,
                    color: `rgb(${ storyBox === 1 ? (COLORS_BOX[1].color1.r + COLORS_BOX[1].color2.r)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.g + COLORS_BOX[1].color2.g)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.b + COLORS_BOX[1].color2.b)/2 : 255})`,
                  }}
                >
                  <MdAnimation size={30}/>
                  <div>The animation goal</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[2].color1.r}, ${COLORS_BOX[2].color1.g}, ${COLORS_BOX[2].color1.b}) 0%, rgb(${COLORS_BOX[2].color2.r}, ${COLORS_BOX[2].color2.g}, ${COLORS_BOX[2].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(2)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color1.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.b : 255}) 0%, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color2.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.b : 255})`,
                    color: `rgb(${ storyBox === 2 ? (COLORS_BOX[2].color1.r + COLORS_BOX[2].color2.r)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.g + COLORS_BOX[2].color2.g)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.b + COLORS_BOX[2].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color1.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.b : 255}) 0%, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color2.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.b : 255})`,
                    color: `rgb(${ storyBox === 2 ? (COLORS_BOX[2].color1.r + COLORS_BOX[2].color2.r)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.g + COLORS_BOX[2].color2.g)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.b + COLORS_BOX[2].color2.b)/2 : 255})`,
                  }}
                >
                  <FaCalendarAlt size={30}/>
                  <div>Calendar integration</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[3].color1.r}, ${COLORS_BOX[3].color1.g}, ${COLORS_BOX[3].color1.b}) 0%, rgb(${COLORS_BOX[3].color2.r}, ${COLORS_BOX[3].color2.g}, ${COLORS_BOX[3].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(3)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color1.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.b : 255}) 0%, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color2.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.b : 255})`,
                    color: `rgb(${ storyBox === 3 ? (COLORS_BOX[3].color1.r + COLORS_BOX[3].color2.r)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.g + COLORS_BOX[3].color2.g)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.b + COLORS_BOX[3].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color1.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.b : 255}) 0%, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color2.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.b : 255})`,
                    color: `rgb(${ storyBox === 3 ? (COLORS_BOX[3].color1.r + COLORS_BOX[3].color2.r)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.g + COLORS_BOX[3].color2.g)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.b + COLORS_BOX[3].color2.b)/3 : 255})`,
                  }}
                >
                  <IoIosWarning size={30}/>
                  <div>Problems</div>
                </motion.div>
              </motion.div>
              
            </div>

            <div className='story-gurk-text'>
              <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              selectedItem={storyBox}
              renderArrowPrev={(onClickHandler, hasPrev, label) => {}}
              renderArrowNext={(onClickHandler, hasNext, label) => {}}
              >
                <div className='caroussel-gurk-container'>
                  <div className='caroussel-gurk-container-text'>
                    Before going to EPFL, I wanted to have the perfect homepage. I used
                    Momentum a lot, but one thing that was missing was the Google Calendar
                    integration. I wanted to have all of my events on the chrome page, to
                    not forget them.
                  </div>
                  <div className='caroussel-gurk-container-image'>
                    <img src={`/img/projects/gurk/momentum.png`} alt='Momentum Homepage'/>
                  </div>
                </div>


                <div className='caroussel-gurk-container'>
                  <div className='caroussel-gurk-container-text'>
                    I saw <a href='https://www.instagram.com/reel/CrnsUTPuotF/' target='_blank'>this</a> post on Instagram a few
                    months ago, and I wanted to have a cool animated homepage too (spoiler
                    alert : his animation is way better than mine), so I spent a few hours
                    trying to create the animation with framer-motion.
                  </div>
                  <div className='caroussel-gurk-container-image'>
                    <video src={`/img/projects/gurk/video_goal.MOV`} alt='Momentum Homepage' autoPlay loop muted />                  
                  </div>
                </div>  

                <div className='caroussel-gurk-container'>
                  <div className='caroussel-gurk-container-text' style={{width : "80%"}}>
                  I spent more
            than 16 hours to connect my Calendar Account to my React application,
            using obscure google API, like service accounts, so in the end, my
            application had access to 1 precise calendar, but without needing any
            API key or server to work. <br /><br/>
            The problem is, once you have a calendar widget on the right of your
            screen, you need another widget on the left. Because I always found that
            the Chrome bookmarks pages was really bad, I made a custom widget to
            have a quicker and easier access to my bookmarks (as I have more than
            410 bookmarks, sorted in folders in folders, the chrome bookmarks row is
            not ideal to retrieve them fast). Then I displayed the weather, because
            it was funny. I also integrated an animated clock, a custom greeting
            message, and a quote generator. <br />
                  </div>
                </div>                  
                
              <div className='caroussel-gurk-container'>
                  <div className='caroussel-gurk-container-text'>
                  The only problem was that it was really difficult to share, and I needed
                  to manually modify the code to make it work with someone else. But
                  because it was made by me for me, it wasn't a big issue. But after 
                  I show the project to some of my friends, they wanted to have it too, 
                  so I decided to make a publishable version, by recoding everything from scratch
                  </div>

                  <div className='caroussel-gurk-container-image'>
                    <img src={`/img/projects/gurk/gurk_old.png`} alt='Gurk Homepage'/>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className='story-gurk-container-dark'>
        <div className='story-gurk-container2'>


          <h2>The choices of techno</h2>
          
          <div className='content-technologies-container'>
            <p className='content-technologies-text' style={{margin : 0}}>
              When I tried to create a server and a database to host accounts and
              token for APIs, I initially choosed MongoDB. However, this is cool for
              beginner, but a friend of mine recommended me to use PostgreSQL, because
              it is waster, lighter, and cooler. So I restarted the DB from 0, and I
              totally agree, PostgreSQL is way better than MongoDB in a lot of aspects
              <br />
              <br/>
              For the backend and API, I used NodeJS and Express, because I was
              already familiar with it, and for the extension in herself, I build a
              single page application using ReactJS, the only constraint was that I
              could not use any of the routing system, because it was a chrome
              extension, and a chrome extension don't have any domain name or URL.
              <br />
              <br/>
              In the end, I used Stripe for the payment, because it is the most used accross the planet, and I also used Google APIs to connect the Google Account to the application, and to get the calendar events.
            </p>

            <div className='widget-technologies-container'>
              <motion.div 
                className='widget-technology-project'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#61DAFB", color : "#61DAFB"}}
                onClick={() => window.open('https://reactjs.org/')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt='ReactJS' className='widget-technology-project-image'/>
                <div>ReactJS</div>
              </motion.div>

              <motion.div 
                className='widget-technology-project'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#529F41", color : "#529F41"}}
                onClick={() => window.open('https://nodejs.org/en/')}
              >
                <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt='NodeJS' className='widget-technology-project-image'/>
                <div>NodeJS</div>
              </motion.div>              
              
              <motion.div 
                className='widget-technology-project'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#000000", color : "#000000"}}
                onClick={() => window.open('https://expressjs.com/')}
              >
                <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' alt='ExpressJS' className='widget-technology-project-image'/>
                <div>Express JS</div>
              </motion.div>

              <motion.div 
                className='widget-technology-project'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#336791", color : "#336791"}}
                onClick={() => window.open('https://www.postgresql.org/')}
              >
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'  alt='PostGreSQL' className='widget-technology-project-image'/>
                <div>PostGreSQL</div>
              </motion.div>

              <motion.div 
                className='widget-technology-project'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#6860FF", color : "#6860FF"}}
                onClick={() => window.open('https://stripe.com/')}
              >
                <img style={{borderRadius : "10px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s' alt='Stripe' className='widget-technology-project-image'/>
                <div>Stripe</div>
              </motion.div>

              <motion.div 
                className='widget-technology-project'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#EA4335", color : "#EA4335"}}
                onClick={() => window.open('https://developers.google.com')}
              >
                <img src='https://avatars.githubusercontent.com/u/16785467?s=200&v=4' alt='Google APIS' className='widget-technology-project-image'/>
                <div>Google APIS</div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

      <div className='story-gurk-container'>
        <div className='story-gurk-container2'>
          <h2>Development of the project</h2>


          <div className='story-gurk-content'>
            <div className='story-gurk-text'>
              <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              selectedItem={devStep}
              renderArrowPrev={(onClickHandler, hasPrev, label) => {}}
              renderArrowNext={(onClickHandler, hasNext, label) => {}}
              >
                <div className='caroussel-gurk-container'>
                <div className='caroussel-gurk-container-text' style={{width : "97%"}}>
                  When
                  working with third party API, you absolutely need a routing system, for
                  callback URL. For exemple, when you want to connect your Google Account,
                  so that the application could access your Calendar. You go throught a
                  redirection, with a callback URL, and you cannot do anything about it.
                  The same goes with Stripe and the payments. It cannot work without
                  callback URLs. This was really the biggest problem I had doing it,
                  because I managed to do all in one page (login, signup, settings, even a
                  Stripe checkout form), but in the end, I was obligated to do a separated
                  website. The fact that I needed a website to interact with the APIs was a
                  deception, because I really wanted to show that you could do all the
                  things you need inside a chrome extension. But in the end, it was a good
                  experience, because I learnt a lot, in the deployment, the configuration
                  of payment, and I reused a lot of the components I initially created
                  inside the extension, because I choosed to do the website in React too,
                  to be faster, and to share components with the extension.
                  </div>
                </div>


                <div className='caroussel-gurk-container'>
                  <div className='caroussel-gurk-container-text' style={{width : "80%"}}>
                    I love to spent some time on details, so every time I had the choice between 
                    2 things, I let the user decide in the parameters (for exemple : should the 
                    checkbox of the To Do List be in circle or square ?). It required a lot of hard 
                    work, because it has to be responsive to the changes of the user in real time, 
                    without needing to reload the page. In the end, with all the possible combinations, 
                    you could have more than 38 Billions different pages, which mean that every user 
                    has his unique page
                  </div>
                  <div className='caroussel-gurk-container-video-169'>
                    <video src={`/img/projects/gurk/gurk_presentation.mp4`} alt='Gurk video presentation' autoPlay loop muted />                  
                  </div>
                </div>  

                <div className='caroussel-gurk-container'>
                  <div className='caroussel-gurk-container-text' style={{width : "80%"}}>
                  To handle the API, I needed a server. I initally wanted to host it
                  locally, in my little place that is called "home", before I realised
                  that the computer I wanted to use was simply dead, so I asked a friend
                  which host to choose, and he told me pulseheberg, because it was really
                  good. In the day, he helped me with the configuration, and I had a
                  server up and running without any issue (that is false, we renitialised it 3 times
                  because we didn't configured it correctly, but that doesn't matter). 
                  I must thank him a lot, because if I had to configure the server on my own, 
                  it would have taken years to figure out what to do

                  </div>
                  <div className='caroussel-gurk-container-techno' style={{width : "20%", paddingTop: "3px"}}>

                    <motion.div 
                      className='widget-small-technology-project'
                      whileHover={{scale : 1.02}}
                      style={{borderColor : "#6783FE", color : "#6783FE"}}
                      onClick={() => window.open('https://www.pulseheberg.com/')}
                    >
                      <img style={{width : "50%", borderRadius : "10px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbzQZdRKfiyr_JnJZNjT__wBJZldgmSugGg&s' alt='Pulseheberg logo' className='widget-small-technology-project-image'/>
                      <div style={{fontSize : "0.7em"}}>Pulseheberg</div>
                    </motion.div>

                    <motion.div 
                      className='widget-small-technology-project'
                      whileHover={{scale : 1.02}}
                      style={{borderColor : "#EF5C26", color : "#EF5C26"}}
                      onClick={() => window.open('https://caprover.com/')}
                    >
                      <img style={{width : "50%"}} src='https://caprover.com/img/logo.png' alt='Caprover logo' className='widget-small-technology-project-image'/>
                      <div style={{fontSize : "0.7em"}}>Caprover</div>
                    </motion.div>

                    <motion.div 
                      className='widget-small-technology-project'
                      whileHover={{scale : 1.02}}
                      style={{borderColor : "#2496ED", color : "#2496ED"}}
                      onClick={() => window.open('https://www.docker.com/')}
                    >
                      <img style={{width : "50%", borderRadius : "10px"}} src='https://avatars.githubusercontent.com/u/5429470?s=280&v=4' alt='Docker logo' className='widget-small-technology-project-image'/>
                      <div style={{fontSize : "0.7em"}}>Docker</div>
                    </motion.div>
                    </div>
                </div>                  
                
              <div className='caroussel-gurk-container'>
                  <div className='caroussel-gurk-container-text' style={{width : "80%"}}>
                  I wanted to deploy at latest the 1st March, but I ended up having a lot
                  of small problems to solve. It showed me that even when you think your
                  project is "finished", there are always some issues when going into
                  production, some small bugs to fix, because you didn't wanted to fix
                  them before. So, in the end, you have all the problems you didn't wanted
                  to solve before, and it is very very difficult to continue and do it
                  until it is finally finished.
                  </div>
                </div>
              </Carousel>
            </div>
            <div className='story-points-container'>
              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[0].color1.r}, ${COLORS_DEV[0].color1.g}, ${COLORS_DEV[0].color1.b}) 0%, rgb(${COLORS_DEV[0].color2.r}, ${COLORS_DEV[0].color2.g}, ${COLORS_DEV[0].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(0)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 0 ? COLORS_DEV[0].color1.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.b : 255}) 0%, rgb(${ devStep !== 0 ? COLORS_DEV[0].color2.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.b : 255})`,
                    color: `rgb(${ devStep === 0 ? (COLORS_DEV[0].color1.r + COLORS_DEV[0].color2.r)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.g + COLORS_DEV[0].color2.g)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.b + COLORS_DEV[0].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 0 ? COLORS_DEV[0].color1.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.b : 255}) 0%, rgb(${ devStep !== 0 ? COLORS_DEV[0].color2.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.b : 255})`,
                    color: `rgb(${ devStep === 0 ? (COLORS_DEV[0].color1.r + COLORS_DEV[0].color2.r)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.g + COLORS_DEV[0].color2.g)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.b + COLORS_DEV[0].color2.b)/2 : 255})`,
                  }}
                >
                  <FaRoute size={30}/>
                  <div>Routing Paradox</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[1].color1.r}, ${COLORS_DEV[1].color1.g}, ${COLORS_DEV[1].color1.b}) 0%, rgb(${COLORS_DEV[1].color2.r}, ${COLORS_DEV[1].color2.g}, ${COLORS_DEV[1].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(1)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 1 ? COLORS_DEV[1].color1.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.b : 255}) 0%, rgb(${ devStep !== 1 ? COLORS_DEV[1].color2.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.b : 255})`,
                    color: `rgb(${ devStep === 1 ? (COLORS_DEV[1].color1.r + COLORS_DEV[1].color2.r)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.g + COLORS_DEV[1].color2.g)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.b + COLORS_DEV[1].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 1 ? COLORS_DEV[1].color1.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.b : 255}) 0%, rgb(${ devStep !== 1 ? COLORS_DEV[1].color2.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.b : 255})`,
                    color: `rgb(${ devStep === 1 ? (COLORS_DEV[1].color1.r + COLORS_DEV[1].color2.r)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.g + COLORS_DEV[1].color2.g)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.b + COLORS_DEV[1].color2.b)/2 : 255})`,
                  }}
                >
                  <GrMultiple size={30}/>
                  <div>38 Billion combinations</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[2].color1.r}, ${COLORS_DEV[2].color1.g}, ${COLORS_DEV[2].color1.b}) 0%, rgb(${COLORS_DEV[2].color2.r}, ${COLORS_DEV[2].color2.g}, ${COLORS_DEV[2].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(2)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 2 ? COLORS_DEV[2].color1.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.b : 255}) 0%, rgb(${ devStep !== 2 ? COLORS_DEV[2].color2.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.b : 255})`,
                    color: `rgb(${ devStep === 2 ? (COLORS_DEV[2].color1.r + COLORS_DEV[2].color2.r)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.g + COLORS_DEV[2].color2.g)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.b + COLORS_DEV[2].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 2 ? COLORS_DEV[2].color1.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.b : 255}) 0%, rgb(${ devStep !== 2 ? COLORS_DEV[2].color2.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.b : 255})`,
                    color: `rgb(${ devStep === 2 ? (COLORS_DEV[2].color1.r + COLORS_DEV[2].color2.r)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.g + COLORS_DEV[2].color2.g)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.b + COLORS_DEV[2].color2.b)/2 : 255})`,
                  }}
                >
                  <FaServer size={30}/>
                  <div>My first server</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='story-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[3].color1.r}, ${COLORS_DEV[3].color1.g}, ${COLORS_DEV[3].color1.b}) 0%, rgb(${COLORS_DEV[3].color2.r}, ${COLORS_DEV[3].color2.g}, ${COLORS_DEV[3].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(3)}
              >
                <motion.div
                  className='box-inside-gurk'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 3 ? COLORS_DEV[3].color1.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.b : 255}) 0%, rgb(${ devStep !== 3 ? COLORS_DEV[3].color2.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.b : 255})`,
                    color: `rgb(${ devStep === 3 ? (COLORS_DEV[3].color1.r + COLORS_DEV[3].color2.r)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.g + COLORS_DEV[3].color2.g)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.b + COLORS_DEV[3].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 3 ? COLORS_DEV[3].color1.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.b : 255}) 0%, rgb(${ devStep !== 3 ? COLORS_DEV[3].color2.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.b : 255})`,
                    color: `rgb(${ devStep === 3 ? (COLORS_DEV[3].color1.r + COLORS_DEV[3].color2.r)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.g + COLORS_DEV[3].color2.g)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.b + COLORS_DEV[3].color2.b)/3 : 255})`,
                  }}
                >
                  <FaRunning size={30}/>
                  <div>Final rush and deployment</div>
                </motion.div>
              </motion.div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className='story-gurk-container-dark'>
        <div className='story-gurk-container2'>
        <h2>Timeline of the project</h2>
        <VerticalTimeline>

          <VerticalTimelineElement
            className=""
            contentStyle={{
              boxShadow: "5px 5px 2px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{
              borderRight: "10px solid  white",
            }}
            date="26 August 2024 - 28 August 2024"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<GrMoney />}
          >
            <h3 className="title-vertical-timeline">Flex at EPFL</h3>
            <h4 className="description-vertical-timeline">
              How to impress people?
            </h4>
            <p>
              After the holidays, I realised that I had no "big" project to show
              my skills in web design, such as React. I only had some small broken
              projects, that were cool, but not very impressive. So, to flex when
              I met new people, I decided to create a chrome extension that
              customize the homepage. In 3 days, I managed to get a good
              extension, that worked 100% locally, including a calendar widget, a
              favourite navigation widget, a weather widget, and much more. All of
              them were animated. The only disavantage was that it wasn't easy to
              share it, because you needed to change the parameters inside the
              code.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            contentStyle={{
              boxShadow: "5px 5px 2px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{
              borderRight: "10px solid  white",
            }}
            date="October 2024 - December 2024"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<GrMoney />}
          >
            <h3 className="title-vertical-timeline">As a side project</h3>
            <h4 className="description-vertical-timeline">Friday and Saturday</h4>
            <p>
              As a side project, i worked on the extension a little bit on the
              Friday and the Saturday, after I finished the week. The goal was to
              redo the code, so that it was publishable on the chrome store, and
              accessible by everyone Every week, I was only able to put between 20
              and 30 hours into the project, which was insufficient to make it
              grow, as I saw in February, where I redid 90% of the work, because
              it wasn't good enought.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            contentStyle={{
              boxShadow: "5px 5px 2px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{
              borderRight: "10px solid  white",
            }}
            date="February 2024"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<AiOutlineStock />}
          >
            <h3 className="title-vertical-timeline">200% On project</h3>
            <h4 className="description-vertical-timeline">
              3 weeks alone in a room
            </h4>
            <p>
              After my exams, I went to Paris, where I got dumped. I spent most of
              the time in my room, working on the project. It was really
              rewarding, seeing the project growing, and I was really happy to see
              the result. I learnt a lot, especialy on the backend side, with the
              Stripe payment implementation, and the google Oauth API.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            contentStyle={{
              boxShadow: "5px 5px 2px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{
              borderRight: "10px solid  white",
            }}
            date="January 2024"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<IoIosPaper />}
          >
            <h3 className="title-vertical-timeline">Exams</h3>
            <h4 className="description-vertical-timeline">4 weeks off</h4>
            <p>
              The EPFL exams are reputed to be hard, so I spent the month
              preparing and passing them. I didn't work on the project during this
              time, but I was thinking about it a lot, and I was really happy to
              come back to it after the exams. The last day of exams, with some
              friends, we managed to get the name of the extension : Gurk
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            contentStyle={{
              boxShadow: "5px 5px 2px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{
              borderRight: "10px solid  white",
            }}
            date="2 March 2024"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<GrMoney />}
          >
            <h3 className="title-vertical-timeline">Buy of the server</h3>
            <h4 className="description-vertical-timeline">
              9€/month, What could go wrong?
            </h4>
            <p>
              I decided to buy a server to host this project (and many other that
              will follow), and many other. Netlify is cool to host simple
              website, but if you want an efficient Database and API, you need to
              put some money into it, the free options don't work well.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            contentStyle={{
              boxShadow: "5px 5px 2px rgba(0, 0, 0, 0.2)",
            }}
            contentArrowStyle={{
              borderRight: "10px solid  white",
            }}
            date="22 March 2024"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<MdRocketLaunch />}
          >
            <h3 className="title-vertical-timeline">Launch to production</h3>
            <h4 className="description-vertical-timeline">
              Stessful but grateful
            </h4>
            <p>
              On March 22nd, I finally launched the project to production. It was
              really difficult, especialy on the end, because there are many small
              things you didn't thought before that shows up, and it feels like it
              is infinite
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<FaFlagCheckered />}
          >

          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
      
      <div className='story-gurk-container' style={{paddingBottom : "40px"}}>
        <div className='story-gurk-container2'>
          <h2 style={{width : "1000px"}}>Acknoledgments</h2>
          <div style={{textDecoration : "underline", cursor : "pointer"}} onClick={(e)=>window.open("https://www.linkedin.com/in/simonlefort/")}>Simon Lefort</div>
          <div>Thanks a lot to Simon to help me configure the server, <br/>so that I could use it easily to run other projects after that.</div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Gurk;