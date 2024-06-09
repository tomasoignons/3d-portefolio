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
import "../style/projects/project.css"

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

const MAIN_COLOR = "#15519D"

function DeepLearning() {

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
    <div className="project-page">
      <div className="project-container">

        {/* HEADER */}
        <div className='project-header'>

          {/* TITLE HEADER */}
          <div className='project-header-title' style={{width : "100%"}}>
            <h1 className='title-project' style={{fontSize : "6em", color: MAIN_COLOR}}>Deep Learning</h1>
            <h3 className='subtitle-project'>Doing a master project in my first year at EPFL</h3>
            {/* <motion.button className='button-project' style={{backgroundColor : MAIN_COLOR}} onClick={()=>window.open("https://gurk.app")}>Check it live!</motion.button> */}
          </div>
          <div className='bouche-trou' style={{width : "0%"}}/>

          {/* IMAGE CARROUSSEL HEADER */}
          {/* <div className='project-header-images-container' style={{width : "50%"}}>
            <motion.div 
              className='image-project-container'
              initial={{ left : 0}}
              animate={{ left : animate ? '100%' : 0}}
              transition={{ duration: animate? 0.9 : 0, ease: 'easeInOut'}}
              style={{zIndex : 2}}
            >
              <img className='image-project' src={`/img/projects/gurk/gurk_${currentImage}.png`} alt='Gurk Homepage'/>
            </motion.div>
            <div className='image-project-container' style={{zIndex : 1}}>
              <img 
              className='image-project'
                src={`/img/projects/gurk/gurk_${nextImage}.png`} 
                alt='Gurk Homepage'
              />
            </div>
            <div className='block-image' style={{opacity : 0}}><img className='image-gurk' src={`/img/projects/gurk/gurk_0.png`} alt='Gurk Homepage'/></div>
          </div> */}
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
          <h2>Origin and backstory</h2>

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
                  <FaChrome size={30}/>
                  <div>Group issues</div>
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
                  <MdAnimation size={30}/>
                  <div>Docker Issues</div>
                </motion.div>
              </motion.div>

              {/* <motion.div 
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
                  <FaCalendarAlt size={30}/>
                  <div>Time issues</div>
                </motion.div>
              </motion.div> */}

              {/* <motion.div 
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
                  <IoIosWarning size={30}/>
                  <div>Help</div>
                </motion.div>
              </motion.div> */}
              
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
                    In end April, a very good friend, who is doing her master at EPFL, told me about
                    a project she had to do, because she was in a group of 3, and one of her group 
                    member decided to quit the course, so they were only 2, and the other one simply
                    doesn't know how to code. So she had to do the project on her own, and she was stressed
                    about it, because she had to validate the course.
                  </div>
                  {/* <div className='caroussel-project-container-image' style={{width : "60%"}}>
                    <img src={`/img/projects/gurk/momentum.png`} alt='Momentum Homepage'/>
                  </div> */}
                </div>


                <div className='caroussel-gurk-container'>
                <div className='caroussel-project-container-text' style={{width : "100%"}}>
                    On mid-may, she asked me if I could help her, because she was trying to run a docker container since
                    two weeks, and it simply didn't work. The deadline was in one week, and she had nothing.
                    I decided at this point to help her as much as I could, because I knew she had to succeed the class, 
                    otherwise she would have been in huge truble for the rest of her master.
                  </div>
                  {/* <div className='caroussel-project-container-image' style={{width : "60%"}}>
                    <video src={`/img/projects/gurk/video_goal.MOV`} alt='Momentum Homepage' autoPlay loop muted />                  
                  </div> */}
                </div>  

                {/* <div className='caroussel-gurk-container'>
                <div className='caroussel-project-container-text' style={{width : "80%"}}>
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
              <div className='caroussel-project-container-text' style={{width : "40%"}}>
                  The only problem was that it was really difficult to share, and I needed
                  to manually modify the code to make it work with someone else. But
                  because it was made by me for me, it wasn't a big issue. But after 
                  I show the project to some of my friends, they wanted to have it too, 
                  so I decided to make a publishable version, by recoding everything from scratch
                  </div>

                  <div className='caroussel-project-container-image' style={{width : "60%"}}>
                    <img src={`/img/projects/gurk/gurk_old.png`} alt='Gurk Homepage'/>
                  </div>
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className='project-container-dark'>
        <div className='project-container2'>

        <h2>Development of the project</h2>

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
                The goal of the project was to create a deep learning model that could make the world
                safer. For example, create a model that could predict if a message is hateful or not (the 
                group that did that really impressed me, because the project was really complete), or, in the case 
                of my friend, create a model that could predict if a meme is hateful or not. For that, you had to choose
                a pretrained model, and finetune it with data. My friend decided to go with the project 
                of <a href='https://github.com/HimariO/HatefulMemesChallenge/blob/main/data_utils/README.md' target='_blank'>this</a> guy.
                </div>
              </div>


              <div className='caroussel-project-container'>
                <div className='caroussel-gurk-container-text' style={{width : "80%"}}>
                  The project required to simply create a docker container, and run it. But the problem was that the guy did an awfull job.
                  In fact, the docker container only worked on specific hardware and OS, because it used a specific version Nvidia Cuda to run the model.
                  The computer of Pauline was on ArchLinux, with cuda 12.4, and the docker container required Ubuntu (which normaly is not a problem since it is a Docker image),
                  and cuda 11.6. After 2 days of trubleshoutting, we gave up on that, and chosed to run another model.<br/>
                  We had to create a python virtual environement, install the precise drivers, and after 48 hours and 2 total reset of the os, 
                  we successfully run pytorch, tensorflow, and the model together inside the virtual environement. (I think we installed cuda 12.2, condorm 992, tensorflow 15.0, and pytorch 3.1, with python 3.9)
                </div>
                <div className='caroussel-project-container-techno' style={{width : "20%", paddingTop: "3px"}}>
              
                  <motion.div 
                    className='project-widget-small-technology'
                    whileHover={{scale : 1.02}}
                    style={{borderColor : "#2496ED", color : "#2496ED"}}
                    onClick={() => window.open('https://www.docker.com/')}
                  >
                    <img style={{width : "50%", borderRadius : "10px"}} src='https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png' alt='Docker logo' className='widget-small-technology-project-image'/>
                    <div style={{fontSize : "0.7em"}}>Docker</div>
                  </motion.div>
                </div>
              </div>  

              <div className='caroussel-project-container'>
                <div className='caroussel-project-container-text' style={{width : "80%"}}>
                Once we had the virtual environement, Pauline began coding herself, because it is her project, not mine. But 
                after a few hours, she asked me to help her, because she was stuck. I began understanding the code, from the data Pipeline to the model.
                The goal was to create a big model, that takes the image, the text and the position of the text of the meme. The he had to predict
                whether or not the meme was hateful. For that, we used supervised learning, with a VisualBERT model, and finetuned it. At the end, the model
                wasn't very good, but it was ok.

                </div>
                {/* <div className='caroussel-project-container-techno' style={{width : "20%", paddingTop: "3px"}}>

                  <motion.div 
                    className='project-widget-small-technology'
                    whileHover={{scale : 1.02}}
                    style={{borderColor : "#6783FE", color : "#6783FE"}}
                    onClick={() => window.open('https://www.pulseheberg.com/')}
                  >
                    <img style={{width : "50%", borderRadius : "10px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbzQZdRKfiyr_JnJZNjT__wBJZldgmSugGg&s' alt='Pulseheberg logo' className='widget-small-technology-project-image'/>
                    <div style={{fontSize : "0.7em"}}>Pulseheberg</div>
                  </motion.div>

                  <motion.div 
                    className='project-widget-small-technology'
                    whileHover={{scale : 1.02}}
                    style={{borderColor : "#EF5C26", color : "#EF5C26"}}
                    onClick={() => window.open('https://caprover.com/')}
                  >
                    <img style={{width : "50%"}} src='https://caprover.com/img/logo.png' alt='Caprover logo' className='widget-small-technology-project-image'/>
                    <div style={{fontSize : "0.7em"}}>Caprover</div>
                  </motion.div>

                  <motion.div 
                    className='project-widget-small-technology'
                    whileHover={{scale : 1.02}}
                    style={{borderColor : "#2496ED", color : "#2496ED"}}
                    onClick={() => window.open('https://www.docker.com/')}
                  >
                    <img style={{width : "50%", borderRadius : "10px"}} src='https://avatars.githubusercontent.com/u/5429470?s=280&v=4' alt='Docker logo' className='widget-small-technology-project-image'/>
                    <div style={{fontSize : "0.7em"}}>Docker</div>
                  </motion.div>
                  </div> */}
              </div>                  
              
            <div className='caroussel-project-container'>
                <div className='caroussel-project-container-text' style={{width : "80%"}}>
                For the second model the inital goal was to restrict the data, and create small "specialized" models. However, we did not have the time to do so.
                So we decided to use another model, with some "blurry" data, to make it more resilient to the real word. In fact, it proved we had right, and the model was better.
                <br/>
                <br/>
                If you want to check the github repository where we put all of this (and the final README, that explain much more what we did), you can find the github repo 
                at <a href='https://github.com/404'>this</a> link.
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
                <FaRoute size={30}/>
                <div>Project presentation</div>
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
                <GrMultiple size={30}/>
                <div>Docker and hardware</div>
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
                <FaServer size={30}/>
                <div>General model</div>
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
                <FaRunning size={30}/>
                <div>Specific model</div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
        </div>

      </div>

      <div className='clear-project-container'>
        <div className='project-container2'>

          <h2>What did I learned?</h2>
          
          <div className='project-technologies-container'>
            <p className='project-technologies-text' style={{margin : 0, width : "67%"}}>
              In this project, I learned how to install properly pytorch, tensorflow, and all the dependencies you need.
              I also learned a lot about docker, even if we abandon it at the end. I also learned how to implement a model, 
              and how to finetune it, especialy with pytorch and tensorflow. I learned a lot about how to select the hyperparameters so that
              it doesn't crash. I finally learned a lot about the pretrained VisualBERT model.
           </p>

            <div className='project-widgets-technologies-container' style={{width : "33%"}}>
              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#3776AB", color : "#3776AB"}}
                onClick={() => window.open('https://www.python.org/')}
              >
                <img src="https://banner2.cleanpng.com/20180325/kpq/kisspng-python-logo-programmer-fierce-python-cliparts-5ab7bde1954e21.4104715915219911376116.jpg" alt='Python' className='widget-technology-project-image'/>
                <div>Python</div>
              </motion.div>

              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#EE4C2C", color : "#EE4C2C"}}
                onClick={() => window.open('https://pytorch.org/')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/640px-PyTorch_logo_icon.svg.png" alt='Pytorch logo' className='widget-technology-project-image'/>
                <div>Pytorch</div>
              </motion.div>              
              
              <motion.div 
                className='project-widget-technology'
                whileHover={{scale : 1.02}}
                style={{borderColor : "#ED8F1F", color : "#ED8F1F"}}
                onClick={() => window.open('https://www.tensorflow.org/')}
              >
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/langfr-220px-Tensorflow_logo.svg.png' alt='Tensorflow' className='widget-technology-project-image'/>
                <div>Tensorflow</div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      <div className='project-container-dark' style={{paddingBottom : "40px"}}>
        <div className='project-container2'>
          <h2 style={{width : "1000px"}}>Acknowledgments</h2>
          <div style={{textDecoration : "underline", cursor : "pointer"}} onClick={(e)=>window.open("https://www.linkedin.com/in/pauline-verchinine/")}>Pauline Verchinine</div>
          <div>Thanks a lot to Pauline to let me help her, and to put my name in the "Acknowledgments" section of the report</div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default DeepLearning;