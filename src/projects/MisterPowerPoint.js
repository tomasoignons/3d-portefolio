import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import { MdRocketLaunch, MdDonutSmallh, MdAnimation, MdOutlineLightbulb, MdOutlineReportProblem  } from "react-icons/md";
import { GrMoney, GrMultiple } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { IoIosPaper, IoIosWarning } from "react-icons/io";
import { IoBookSharp, IoChevronDownOutline, IoHappyOutline, IoMailUnreadOutline } from "react-icons/io5";
import { FaCalendarAlt, FaChrome, FaCrown, FaFlagCheckered, FaRegSadTear, FaRobot, FaRoute, FaRunning, FaSadTear, FaServer } from "react-icons/fa";


import 'react-vertical-timeline-component/style.min.css'; // import the styles
import "../style/projects/project.css"
import { PiCloverBold } from 'react-icons/pi';
import { TbBrandFiverr } from 'react-icons/tb';
import { LuPartyPopper } from 'react-icons/lu';
import { SiJavascript } from 'react-icons/si';
import { CiMail } from 'react-icons/ci';

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

const VIDEOS = [
  {
    name : "response_m6.mp4",
    duration : 23
  },
  {
    name : "travel_agence.mp4",
    duration : 15
  },
  {
    name : "wow_poland.mp4",
    duration : 31
  },
  {
    name : "wow_tokyo.mp4",
    duration : 19
  },
  {
    name : "",
    duration : 0.5
  }
]

const MAIN_COLOR = "#C03F1F"

function MisterPowerPoint() {

  const [currentVideo, setCurrentVideo] = useState(0)
  const [nextVideo, setNextVideo] = useState(1)
  const [animate, setAnimate] = useState(false)
  const [sound, setSound] = useState(false)

  useEffect(() => {
    let timeoutId;
  
    const tick = async () => {
      await new Promise((resolve) => (timeoutId = setTimeout(resolve, VIDEOS[currentVideo].duration * 1000 - 1000)));
      setAnimate(true);
      await new Promise((resolve) => (timeoutId = setTimeout(resolve, 1000)));
      setAnimate(false);
      setCurrentVideo(nextVideo);
      setNextVideo((nextVideo + 1) % 4);
  
      timeoutId = setTimeout(tick, 0); // schedule the next tick
    };
  
    tick(); // start the interval
  
    return () => clearTimeout(timeoutId); // clear the timeout when the component is unmounted
  }, [nextVideo]);


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
    <div className="project-page">
      <div className="project-container">

        {/* HEADER */}
        <div className='project-header'>

          {/* TITLE HEADER */}
          <div className='project-header-title' style={{width : "70%"}}>
            <h1 className='title-project' style={{fontSize : "6em", color: MAIN_COLOR}}>Mister PowerPoint</h1>
            <h3 className='subtitle-project'>Be the most followed french PowerPoint content creator</h3>
            <motion.button className='button-project' style={{backgroundColor : MAIN_COLOR}} onClick={()=>window.open("https://www.instagram.com/mister.powerpoint/")}>Check the account!</motion.button>
          </div>
          <div className='bouche-trou' style={{width : "10%"}}/>

          {/* IMAGE CARROUSSEL HEADER */}
          <div className='project-header-images-container' style={{width : "20%", aspectRatio : "9/16"}}>
            <motion.div 
              className='image-project-container'
              initial={{ left : 0}}
              animate={{ left : animate ? '100%' : 0}}
              transition={{ duration: animate? 0.9 : 0, ease: 'easeInOut'}}
              style={{zIndex : 2}}
            >
              <video className='image-project' src={`/img/projects/mpp/videos/${VIDEOS[currentVideo].name}`} alt='Mister PowerPoint videos' autoPlay muted={!sound}/>            </motion.div>
              <div className='sound-button' onClick={() => setSound(!sound)}
                style={{position: "absolute", left : "10px", bottom : "10px", fontSize : "1em", cursor : "pointer", color : "white", zIndex : "5"}}
              >{sound ? "🔊" : "🔇"}</div>
            <div className='image-project-container' style={{zIndex : 1}}>
              <video 
              className='image-project'
              src={`/img/projects/mpp/videos/${VIDEOS[nextVideo].name}` } 
              alt='Gurk Homepage'
              muted 
              />
            </div>
            <div className='block-image' style={{opacity : 0}}><video className='image-gurk' src={`/img/projects/mpp/videos/${VIDEOS[0].name}`} alt='Gurk Homepage' loop muted/></div>
          </div>
        </div>

        {/* ARROW ON THE HEADER */}
        <div className='arrow-bottom-container-project'>
          <motion.div initial={{opacity : 0.2}} whileHover={{opacity : 1, scale : 1.1}} style={{cursor : "pointer"}} onClick={()=> window.scrollBy({top : window.innerHeight, behavior: 'smooth'})}>
            <IoChevronDownOutline size={60}/>
          </motion.div>
        </div>

      {/* HISTORY CONTAINER */}
      <div className='clear-project-container'>
        <div className='project-container2'>
          <h2>The beginning</h2>

          <div className='project-standard-content'>
            <div className='project-points-container' style={{width : "25%"}}>
              <motion.div 
                className='project-point-box'
                style={{width : "48%"}}
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[0].color1.r}, ${COLORS_BOX[0].color1.g}, ${COLORS_BOX[0].color1.b}) 0%, rgb(${COLORS_BOX[0].color2.r}, ${COLORS_BOX[0].color2.g}, ${COLORS_BOX[0].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(0)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color1.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.b : 255}) 0%, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color2.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.b : 255})`,
                    color: `rgb(${ storyBox === 0 ? (COLORS_BOX[0].color1.r + COLORS_BOX[0].color2.r)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.g + COLORS_BOX[0].color2.g)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.b + COLORS_BOX[0].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color1.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color1.b : 255}) 0%, rgb(${ storyBox !== 0 ? COLORS_BOX[0].color2.r : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.g : 255}, ${storyBox !== 0 ? COLORS_BOX[0].color2.b : 255})`,
                    color: `rgb(${ storyBox === 0 ? (COLORS_BOX[0].color1.r + COLORS_BOX[0].color2.r)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.g + COLORS_BOX[0].color2.g)/2 : 255}, ${storyBox === 0 ? (COLORS_BOX[0].color1.b + COLORS_BOX[0].color2.b)/2 : 255})`,
                  }}
                >
                  <MdOutlineLightbulb size={30}/>
                  <div>Inspiration</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='project-point-box'
                style={{width : "48%"}}
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[1].color1.r}, ${COLORS_BOX[1].color1.g}, ${COLORS_BOX[1].color1.b}) 0%, rgb(${COLORS_BOX[1].color2.r}, ${COLORS_BOX[1].color2.g}, ${COLORS_BOX[1].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(1)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color1.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.b : 255}) 0%, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color2.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.b : 255})`,
                    color: `rgb(${ storyBox === 1 ? (COLORS_BOX[1].color1.r + COLORS_BOX[1].color2.r)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.g + COLORS_BOX[1].color2.g)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.b + COLORS_BOX[1].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color1.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color1.b : 255}) 0%, rgb(${ storyBox !== 1 ? COLORS_BOX[1].color2.r : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.g : 255}, ${storyBox !== 1 ? COLORS_BOX[1].color2.b : 255})`,
                    color: `rgb(${ storyBox === 1 ? (COLORS_BOX[1].color1.r + COLORS_BOX[1].color2.r)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.g + COLORS_BOX[1].color2.g)/2 : 255}, ${storyBox === 1 ? (COLORS_BOX[1].color1.b + COLORS_BOX[1].color2.b)/2 : 255})`,
                  }}
                >
                  <AiOutlineStock size={30}/>
                  <div>First reels & followers</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='project-point-box'
                style={{width : "48%"}}
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[2].color1.r}, ${COLORS_BOX[2].color1.g}, ${COLORS_BOX[2].color1.b}) 0%, rgb(${COLORS_BOX[2].color2.r}, ${COLORS_BOX[2].color2.g}, ${COLORS_BOX[2].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(2)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color1.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.b : 255}) 0%, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color2.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.b : 255})`,
                    color: `rgb(${ storyBox === 2 ? (COLORS_BOX[2].color1.r + COLORS_BOX[2].color2.r)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.g + COLORS_BOX[2].color2.g)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.b + COLORS_BOX[2].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color1.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color1.b : 255}) 0%, rgb(${ storyBox !== 2 ? COLORS_BOX[2].color2.r : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.g : 255}, ${storyBox !== 2 ? COLORS_BOX[2].color2.b : 255})`,
                    color: `rgb(${ storyBox === 2 ? (COLORS_BOX[2].color1.r + COLORS_BOX[2].color2.r)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.g + COLORS_BOX[2].color2.g)/2 : 255}, ${storyBox === 2 ? (COLORS_BOX[2].color1.b + COLORS_BOX[2].color2.b)/2 : 255})`,
                  }}
                >
                  <PiCloverBold size={30}/>
                  <div>The big luck (or not)</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='project-point-box'
                style={{width : "48%"}}
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_BOX[3].color1.r}, ${COLORS_BOX[3].color1.g}, ${COLORS_BOX[3].color1.b}) 0%, rgb(${COLORS_BOX[3].color2.r}, ${COLORS_BOX[3].color2.g}, ${COLORS_BOX[3].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOnStoryBox(3)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color1.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.b : 255}) 0%, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color2.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.b : 255})`,
                    color: `rgb(${ storyBox === 3 ? (COLORS_BOX[3].color1.r + COLORS_BOX[3].color2.r)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.g + COLORS_BOX[3].color2.g)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.b + COLORS_BOX[3].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color1.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color1.b : 255}) 0%, rgb(${ storyBox !== 3 ? COLORS_BOX[3].color2.r : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.g : 255}, ${storyBox !== 3 ? COLORS_BOX[3].color2.b : 255})`,
                    color: `rgb(${ storyBox === 3 ? (COLORS_BOX[3].color1.r + COLORS_BOX[3].color2.r)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.g + COLORS_BOX[3].color2.g)/2 : 255}, ${storyBox === 3 ? (COLORS_BOX[3].color1.b + COLORS_BOX[3].color2.b)/3 : 255})`,
                  }}
                >
                  <FaRobot size={30}/>
                  <div>Bored and automation</div>
                </motion.div>
              </motion.div>
              
            </div>

            <div className='project-content-slider' style={{width : "72%"}}>
              <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              selectedItem={storyBox}
              renderArrowPrev={(onClickHandler, hasPrev, label) => {}}
              renderArrowNext={(onClickHandler, hasNext, label) => {}}
              >
                <div className='caroussel-project-container'>
                  <div className='caroussel-project-container-text' style={{width : "100%"}}>
                    When I was in 9th grade, we had to do a presentation about women in germany.
                    That was the first time I really used PowerPoint, and I wanted to make something big. I 
                    still have the presentation, and I can tell you that it is the worst one I ever made. 
                    <br/>Then in 10th grade, I had to do 2 presentations of 20 minutes each, and I decided to focus on the PowerPoint
                    because I think when you present, if you have a good support, you don't need text. You just follow the
                    presentation. I learned a lot, but the presentations was nothing compared to what I did in 11th grade, when
                    I worked 40 hours on a presentation about the french revolution. I was so proud of it, and it triggered the idea
                    I could share my knowledge. 
                    <br/>At this time, they were no french PowerPoint content creator. But after viewing a lot 
                    of <a href='https://www.youtube.com/@oneskill_ppt' target='_blank'>OneSkill PowerPoint</a> videos (he is the best), I decided to launch my account on January the 1st 2022 (but I was
                    not ready, so you have to wait until I get Covid and get back home, so on January 22th 2022 to get the first post)
                  </div>
                  <div className='caroussel-project-container-image' style={{width : "0%"}}>
                    <img src={`/img/projects/gurk/momentum.png`} alt='Momentum Homepage'/>
                  </div>
                </div>


                <div className='caroussel-gurk-container'>
                <div className='caroussel-project-container-text' style={{width : "80%"}}>
                    Honestly, I was expecting a lot of followers at the beginning, because I thought that would be easy,
                    but in fact, (spoiler alert), social media content creation is hard. When I look at my first reels,
                    I am very ashamed, because they are really bad. That make me think of the journey I did.
                    If I remember well, the first post got 0 views, the second 4, and the third one 8.<br/>
                    I did not have any strategy, I just posted what I wanted, and I followed a few Excel creators, and big accounts like Microsoft
                  </div>
                  <div className='caroussel-project-container-image' style={{width : "19%"}}>
                    <video src={`/img/projects/mpp/videos/reel_selection.mp4`} alt='Momentum Homepage' autoPlay loop muted />                  
                  </div>
                </div>  

                <div className='caroussel-gurk-container'>
                <div className='caroussel-project-container-text' style={{width : "100%"}}>
                    On my 4th post, I got my first follower, I was really proud.
                    But who was it ? It wasn't just a random person, it was a big account : <a href='https://www.instagram.com/lexceleur/' target='_blank'>L'Exceleur</a>. The
                    biggest french Excel content creator. At this time, he had around 70k followers, and he followed me (I followed him, and I think he got the
                    notification, and followed back). The, whithout asking anything, and in a kind gesture, he just posted a story.
                    It said "hey, if you are interested in PowerPoint, go check this account, it is a beginning, but it seems promising".
                    I couldn't believe it, it was litteraly the luck of my life. In a week-end, I got more than 5000 followers.
                    It has been 2 years now, and I still don't believe it. I am so grateful to him, because it gave me hope and motivation to go one.
                    Even after, when it stopped growing, I said to myself "you had a unique opportunity, you can't stop now".
                    <br/>
                    <br/>
                    The only problem with that, is that it brought me a lot of followers, but not a lot of likes, because they were not interested in PowerPoint, but in Excel.
                    That "killed" the account in the end, because the posts were not shown to non-followers, because followers didn't interact with the account.
                  </div>
                </div>                  
                
              <div className='caroussel-gurk-container'>
              <div className='caroussel-project-container-text' style={{width : "70%"}}>
                  After a month, it was really painfull to make and post a reels every day in the evening.
                  It was the holidays, and I wanted to create a lot of posts, in order to not have to worry about it
                  during a few weeks.
                  <br/>
                  I made the biggest mistake at this moment : The account was growing really fast (around 1000 followers a week), and
                  I decided to automate the posts, with the facebook social media manager. But it only accepted posts and not reels, so, dumby me, I 
                  decided to switch on posts and abandon reels.
                  <br/>
                  The account was never the same, and when I saw it, it was too late, the posts weren't show to anyone anymore, and when 
                  I tried going for the reels again, it was too late, the account was dead.
                  </div>

                  <div className='caroussel-project-container-image' style={{width : "30%"}}>
                    <img src={`/img/projects/mpp/posts/funfact_ppt.png`} alt='Gurk Homepage'/>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className='project-container-dark'>
        <div className='project-container2'>


          <h2>Skills I learned</h2>
          
          <div className='project-technologies-container'>
            <p className='project-technologies-text' style={{margin : 0, width : "60%"}}>
              I learned a lot of skills doing this. First of all, I learned how to use Instagram, and how to create content.
              When you create content, you obviously need to learn the video editing, and the design. I could have used PowerPoint for
              both (yeah you can do video editing in PowerPoint if you are really skilled), but I choosed to use Adobe Premiere Pro, because
              it is a lot more powerful. I also learned CapCut, but Premiere Pro is way better for the long term.
              <br/><br/>
              Of course, along the journey, I learned a lot of PowerPoint tricks, and I can say that when I began, I was really bad, but now, I 
              think I could rank in the top 100 french PowerPoint creators, as I learned other tools like Inkscape or figma to improve my design skills.
              <br/><br/>
              Moreover, I learned how to work. For exemple, I once had to do a lot of video editing in 10 days, so I learned how to work 13 hours in consecutive,
              and my brain learned a lot about how to concentrate. When I have a big task to do in a short time, I always think about moments where I worked a lot for
              the account, and I know that I can do it.
            </p>

            <div className='project-widgets-technologies-container' style={{width : "40%"}}>
              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#D24726", color : "#D24726"}}
                onClick={() => window.open('https://www.microsoft.com/fr-fr/microsoft-365/powerpoint')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png" alt='PowerPoint' className='widget-technology-project-image'/>
                <div>PowerPoint</div>
              </motion.div>

              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#00005B", color : "#00005B"}}
                onClick={() => window.open('https://www.adobe.com/fr/products/premiere.html')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png" alt='Premiere Pro' className='widget-technology-project-image'/>
                <div style={{fontSize :"0.9em"}}>Premiere Pro</div>
              </motion.div>              
              
              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#000000", color : "#000000"}}
                onClick={() => window.open('https://inkscape.org/')}
              >
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1200px-Inkscape_Logo.svg.png' alt='Inkscape' className='widget-technology-project-image'/>
                <div>Inkscape</div>
              </motion.div>

              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#A358FF", color : "#A358FF"}}
                onClick={() => window.open('https://www.figma.com/')}
              >
                <img style={{height : "40px", width : "30px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png'  alt='Figma logo' className='widget-technology-project-image'/>
                <div>Figma</div>
              </motion.div>

              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#000000", color : "#000000"}}
                onClick={() => window.open('https://www.capcut.app/fr/')}
              >
                <img style={{borderRadius : "10px"}} src='https://seeklogo.com/images/C/capcut-logo-A52AD0DA7D-seeklogo.com.png' alt='Capcut' className='widget-technology-project-image'/>
                <div>Capcut</div>
              </motion.div>

              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#E4405F", color : "#E4405F"}}
                onClick={() => window.open('')}
              >
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' alt='Instagram' className='widget-technology-project-image'/>
                <div>Instagram</div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

      <div className='clear-project-container'>
        <div className='project-container2'>
          <h2>Monetisation of the account</h2>


          <div className='project-standard-content'>
          <div className='project-content-slider' style={{width : "72%"}}>
              <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              selectedItem={devStep}
              renderArrowPrev={(onClickHandler, hasPrev, label) => {}}
              renderArrowNext={(onClickHandler, hasNext, label) => {}}
              >
                <div className='caroussel-project-container'>
                <div className='caroussel-project-container-text' style={{width : "97%"}}>
                  I wanted to monetize the account, because I was spending a lot of time on it.
                  When I compared to "similar" accounts, in the Excel branch, they were making a lot of money by selling formations.
                  So I decided to do the same. I created a formation in june-july 2022, and after all was done, I realised what I was doing was shit.
                  So I didn't wanted to make a product where I think it is shit.
                  The problem was, I didn't prepared it well, and it was too "basic".
                  </div>
                </div>


                <div className='caroussel-project-container'>
                  <div className='caroussel-gurk-container-text' style={{width : "80%"}}>
                    After the failure of the first formation, without even launching it, I decided to redo one from scratch, with better foundations.
                    I spent a month writing a 100 pages word document with what I wanted to say, Then I recorder everything, and it was February when I had to do 
                    the editing. I had to do it in 10 days, and I had planned 30 days to do it. I simply worked 13 hours / day, and I somehow managed to do it.
                    The second formation was really cool, 8 hours of content, that teaches you all the skills you need to do good PowerPoints.
                    I launched it proudly, and got 0 sales. That's the moment I decided to just give up, because it wasn't worth it to invest such time in an account with so few engagement.
                    It simply felt like the people that followed me weren't really interessed in what I did, so after more than a year not 
                    having more followers, this was the moment I decided to stop, and focus to other things.
                  </div>
                  {/* <div className='caroussel-project-container-image' style={{width : "20%"}}>
                    <video src={`/img/projects/gurk/gurk_presentation.mp4`} alt='Gurk video presentation' autoPlay loop muted />                  
                  </div> */}
                </div>  

                <div className='caroussel-project-container'>
                  <div className='caroussel-project-container-text' style={{width : "80%"}}>
                    I put myself on Fiverr, redirecting the people on my Instagram Account on Fiverr.
                    Normaly, on Fiverr, you do like <a href='https://blog.androz2091.fr/fiverr-1y/' target='_blank'>this</a>, but because I had already some followers,
                    it was easier to get the first clients. The PowerPoint niche is not very big, so I didn't get a lot of clients, but my biggest customer came from my Instagram Account,
                    so at least the account was useful for something. In the end, I made 250$, so that is ok I think, even if, because I am perfectionist, I spent a lot of time on some presentations, which result on me 
                    getting paid less than 5$/hour. <br/>
                  </div>
                  <div className='caroussel-project-container-techno' style={{width : "20%", paddingTop: "3px"}}>

                    <motion.div 
                      className='project-widget-small-technology'
                      whileHover={{scale : 1.02}}
                      style={{borderColor : "#1DBF73", color : "#1DBF73"}}
                      onClick={() => window.open('https://www.fiverr.com/')}
                    >
                      <img style={{width : "70%", borderRadius : "10px"}} src='https://logos-world.net/wp-content/uploads/2020/12/Fiverr-Logo.png' alt='Fiverr logo' className='widget-small-technology-project-image'/>
                      <div style={{fontSize : "1em"}}>Fiverr</div>
                    </motion.div>
                    </div>
                </div>                  
                
              <div className='caroussel-project-container'>
                  <div className='caroussel-project-container-text' style={{width : "80%"}}>
                    After the total failure of the 2nd paid formation, I decided to stop. It was a cool journey, but it took
                    me too much time, and I think I can do something better, that will bring me more competences, money, and skills than that.
                    I met a lot of cool people along the way, for exemple friends on a discord server about PowerPoint, but I think this is the end.
                    I posted a few more reels after that, but I never got the motivation to really restart the whole thing.<br/>
                    The main problem with this kind of projects is that, once you are in, you have to post, and you can't stop, because if you stop, the account dies.
                    So it is really difficult to make it a business where it just runs by itself, and you can focus on other things.
                  </div>
                </div>
              </Carousel>
            </div>
            <div className='project-points-container' style={{width : "25%"}}>
              <motion.div 
                className='project-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[0].color1.r}, ${COLORS_DEV[0].color1.g}, ${COLORS_DEV[0].color1.b}) 0%, rgb(${COLORS_DEV[0].color2.r}, ${COLORS_DEV[0].color2.g}, ${COLORS_DEV[0].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(0)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 0 ? COLORS_DEV[0].color1.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.b : 255}) 0%, rgb(${ devStep !== 0 ? COLORS_DEV[0].color2.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.b : 255})`,
                    color: `rgb(${ devStep === 0 ? (COLORS_DEV[0].color1.r + COLORS_DEV[0].color2.r)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.g + COLORS_DEV[0].color2.g)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.b + COLORS_DEV[0].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 0 ? COLORS_DEV[0].color1.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color1.b : 255}) 0%, rgb(${ devStep !== 0 ? COLORS_DEV[0].color2.r : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.g : 255}, ${devStep !== 0 ? COLORS_DEV[0].color2.b : 255})`,
                    color: `rgb(${ devStep === 0 ? (COLORS_DEV[0].color1.r + COLORS_DEV[0].color2.r)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.g + COLORS_DEV[0].color2.g)/2 : 255}, ${devStep === 0 ? (COLORS_DEV[0].color1.b + COLORS_DEV[0].color2.b)/2 : 255})`,
                  }}
                >
                  <IoBookSharp size={30}/>
                  <div>Paid formation 1</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='project-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[1].color1.r}, ${COLORS_DEV[1].color1.g}, ${COLORS_DEV[1].color1.b}) 0%, rgb(${COLORS_DEV[1].color2.r}, ${COLORS_DEV[1].color2.g}, ${COLORS_DEV[1].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(1)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 1 ? COLORS_DEV[1].color1.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.b : 255}) 0%, rgb(${ devStep !== 1 ? COLORS_DEV[1].color2.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.b : 255})`,
                    color: `rgb(${ devStep === 1 ? (COLORS_DEV[1].color1.r + COLORS_DEV[1].color2.r)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.g + COLORS_DEV[1].color2.g)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.b + COLORS_DEV[1].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 1 ? COLORS_DEV[1].color1.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color1.b : 255}) 0%, rgb(${ devStep !== 1 ? COLORS_DEV[1].color2.r : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.g : 255}, ${devStep !== 1 ? COLORS_DEV[1].color2.b : 255})`,
                    color: `rgb(${ devStep === 1 ? (COLORS_DEV[1].color1.r + COLORS_DEV[1].color2.r)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.g + COLORS_DEV[1].color2.g)/2 : 255}, ${devStep === 1 ? (COLORS_DEV[1].color1.b + COLORS_DEV[1].color2.b)/2 : 255})`,
                  }}
                >
                  <IoBookSharp size={30}/>
                  <div>Paid formation 2</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='project-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[2].color1.r}, ${COLORS_DEV[2].color1.g}, ${COLORS_DEV[2].color1.b}) 0%, rgb(${COLORS_DEV[2].color2.r}, ${COLORS_DEV[2].color2.g}, ${COLORS_DEV[2].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(2)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 2 ? COLORS_DEV[2].color1.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.b : 255}) 0%, rgb(${ devStep !== 2 ? COLORS_DEV[2].color2.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.b : 255})`,
                    color: `rgb(${ devStep === 2 ? (COLORS_DEV[2].color1.r + COLORS_DEV[2].color2.r)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.g + COLORS_DEV[2].color2.g)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.b + COLORS_DEV[2].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 2 ? COLORS_DEV[2].color1.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color1.b : 255}) 0%, rgb(${ devStep !== 2 ? COLORS_DEV[2].color2.r : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.g : 255}, ${devStep !== 2 ? COLORS_DEV[2].color2.b : 255})`,
                    color: `rgb(${ devStep === 2 ? (COLORS_DEV[2].color1.r + COLORS_DEV[2].color2.r)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.g + COLORS_DEV[2].color2.g)/2 : 255}, ${devStep === 2 ? (COLORS_DEV[2].color1.b + COLORS_DEV[2].color2.b)/2 : 255})`,
                  }}
                >
                  <TbBrandFiverr size={30}/>
                  <div>Fiverr</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className='project-point-box'
                initial={{
                  background : `linear-gradient(135deg, rgb(${COLORS_DEV[3].color1.r}, ${COLORS_DEV[3].color1.g}, ${COLORS_DEV[3].color1.b}) 0%, rgb(${COLORS_DEV[3].color2.r}, ${COLORS_DEV[3].color2.g}, ${COLORS_DEV[3].color2.b})`,
                }}
                whileHover={{scale : 1.02}}
                onClick={() => clickOndevStep(3)}
              >
                <motion.div
                  className='inside-project-point-box'
                  initial={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 3 ? COLORS_DEV[3].color1.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.b : 255}) 0%, rgb(${ devStep !== 3 ? COLORS_DEV[3].color2.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.b : 255})`,
                    color: `rgb(${ devStep === 3 ? (COLORS_DEV[3].color1.r + COLORS_DEV[3].color2.r)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.g + COLORS_DEV[3].color2.g)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.b + COLORS_DEV[3].color2.b)/2 : 255})`,
                  }}
                  animate={{
                    background: `linear-gradient(135deg, rgb(${ devStep !== 3 ? COLORS_DEV[3].color1.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color1.b : 255}) 0%, rgb(${ devStep !== 3 ? COLORS_DEV[3].color2.r : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.g : 255}, ${devStep !== 3 ? COLORS_DEV[3].color2.b : 255})`,
                    color: `rgb(${ devStep === 3 ? (COLORS_DEV[3].color1.r + COLORS_DEV[3].color2.r)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.g + COLORS_DEV[3].color2.g)/2 : 255}, ${devStep === 3 ? (COLORS_DEV[3].color1.b + COLORS_DEV[3].color2.b)/3 : 255})`,
                  }}
                >
                  <FaRegSadTear size={30}/>
                  <div>Give up</div>
                </motion.div>
              </motion.div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className='project-container-dark'>
        <div className='project-container2'>
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
            date="1st January 2022, 2h24"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<LuPartyPopper />}
          >
            <h3 className="title-vertical-timeline">New Year resolution</h3>
            <h4 className="description-vertical-timeline">
              Decision to create the account
            </h4>
            <p>
              On a party with some friends, I decided to create the account. I
              didn't told them, the account was a secret during 7 months, then 1 person knew 
              and I told my friends after 1 year and half. I created the account during the day.
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
            date="January 22nd 2022"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<IoHappyOutline />}
          >
            <h3 className="title-vertical-timeline">First post</h3>
            <h4 className="description-vertical-timeline">How to get attention?</h4>
            <p>
              I posted the first post, then L'Exceleur followed me, and posted a story, so I got a lot of followers
              around the 25th January. It motivated me to continue.
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
            date="February 2022"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<AiOutlineStock />}
          >
            <h3 className="title-vertical-timeline">Growing</h3>
            <h4 className="description-vertical-timeline">
              +10k followers
            </h4>
            <p>
              In less than a month, I reached 11.5k followers, then it stopped growing.
              At this time, I will do a reel per day (they were really bad, but I didn't knew it)
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
            date="February 2022 - June 2022"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<SiJavascript />}
          >
            <h3 className="title-vertical-timeline">Semi-Automated Posts</h3>
            <h4 className="description-vertical-timeline">How to kill an account?</h4>
            <p>
              I decided to automate the posts, and it was the biggest mistake I ever made.
              I stopped reels, and the account just died in silence. The posts worked at the beginning, 
              but after a few weeks, they only had 4k impression, when I had 11k followers, which is not good at all.
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
            date="April 2022 - May 2022"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<IoMailUnreadOutline />}
          >
            <h3 className="title-vertical-timeline">Free templates</h3>
            <h4 className="description-vertical-timeline">How to have 500 persons on a mailing list</h4>
            <p>
              Every week, I would post a free template, and ask for the email in exchange. I got around 500 emails, that I used to sell the 2nd formation. 
              It wasn't a really good idea, as it wasn't a good email list, but I had no time to do a mail every weeks about a topic.
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
            date="June 2022 - July 2022"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<IoIosPaper />}
          >
            <h3 className="title-vertical-timeline">First Formation</h3>
            <h4 className="description-vertical-timeline">How to waste 200 hours</h4>
            <p>
              I created the first formation, and after all was done, I realised what I was doing was not good at all, and that I couldn't sell that without feeling guilty. So I abandoned it, once it was complete.
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
            date="October 2022 - March 2023"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<FaCrown />}
          >
            <h3 className="title-vertical-timeline">Best reels I ever made</h3>
            <h4 className="description-vertical-timeline">
              The prime of content creation
            </h4>
            <p>
              It is during this time, that I am very proud of what I did in content. 
              I reworked all of them, and I think they are really good. I also learned a lot of skills to
              make better content, by following trends.
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
            date="June 2022 - July 2022"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<IoIosPaper />}
          >
            <h3 className="title-vertical-timeline">Second Formation</h3>
            <h4 className="description-vertical-timeline">Learn how to work</h4>
            <p>
              Not repeating the same mistakes as in the first formation, i first wrote a 100 pages word document, then I recorded everything, and then I edited everything.
              At the end, I had 8 hours of really good content (the sound was dirty, but I couldn't do better). Maybe it will be available on my youtube channel one day.
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
            date="2nd April 2023"
            iconStyle={{
              background: "#eeeeee",
              color: "#fff",
            }}
            icon={<MdOutlineReportProblem />}
          >
            <h3 className="title-vertical-timeline">Definitive Failure</h3>
            <h4 className="description-vertical-timeline">
              When you see you cannot do it
            </h4>
            <p>
              The 2nd April 2023, I launched the formation, and got 0 sales. I gave up at this moment,
              because I realised that the account was not worth it, and that I could do something better. It didn't have enought engagement to do something,
              and I couldn't automate the posts (creation and publication), so I destressed during a month by playing Minecraft, then I started Salles Libres V2.
              <br/>
              We thought about it with my brother, but we cannot figure out how to make it a business with automated posts.
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
      
      <div className='clear-project-container' style={{paddingBottom : "40px"}}>
        <div className='project-container2'>
          <h2 style={{width : "1000px"}}>Acknoledgments</h2>
          <div style={{textDecoration : "underline", cursor : "pointer"}} onClick={(e)=>window.open("https://www.instagram.com/lexceleur/")}>L'Exceleur</div>
          <div>Tanks a lot to this wonderful person, that gave me hope when I began. I would have gave up 1000 times if he didn't do that.</div>
          <div style={{height : "5px"}}/>
          <div style={{textDecoration : "underline", cursor : "pointer"}} onClick={(e)=>window.open("https://www.instagram.com/mamzelle__excel/")}>Mamzelle Excel</div>
          <div>L'Exceleur is very sympatic, but he wasn't on the same scale as me. When I needed advices, I would go ask to mamzelle Excel, because she was 1 month in advance of me, in term of followers and projects. The main difference is, that she suceeded by transforming her account into a big business, and I did not.</div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default MisterPowerPoint;