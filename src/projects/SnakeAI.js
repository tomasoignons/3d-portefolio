import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from 'react-router-dom';


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

const MAIN_COLOR = "#68CB6F"

function MisterPowerPoint() {

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
  const navigate = useNavigate();

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
            <h1 className='title-project' style={{fontSize : "6em", color: MAIN_COLOR}}>Snake AI</h1>
            <h3 className='subtitle-project'>Or how I switched from Windows to ArchLinux</h3>
            {/* <motion.button className='button-project' style={{backgroundColor : MAIN_COLOR}} onClick={()=>window.open("https://gurk.app")}>Check it live!</motion.button> */}
          </div>
          <div className='bouche-trou' style={{width : "10%"}}/>

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
                  <div>Intro to ML at EPFL</div>
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
                  <div>Learn Pytorch</div>
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
                  <FaCalendarAlt size={30}/>
                  <div>Chess AI</div>
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
                  <IoIosWarning size={30}/>
                  <div>Be Simpler</div>
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
                  <div className='caroussel-project-container-text' style={{width : "80%"}}>
                    As a first year student in Computer Science at EPFL, I successfully passed my first exams
                    in January. Let's say the results were very good, but the problem is that the 2nd semester is
                    much easier. We only have 5 subjects : programming, analysis, discrete mathematics, intro to computer architecture, and 
                    a course of "human science" (I took a course on history of ML). This 5 classes don't require a lot of work, so 
                    in 4th week, I decided to see if I could follow along the class of Introduction to Machine Learning, which is a 2nd year optional class.
                    I was able to follow the classes, however I did not do the project, because I was not registered to the class. I somehow managed to 
                    solve all the Python jupyter notebook with success. It really triggered something, and I wanted to learn more about ML, and especialy pytorch, because
                    I knew it is a popular tool to do ML.
                  </div>
                  {/* <div className='caroussel-project-container-image' style={{width : "60%"}}>
                    <img src={`/img/projects/gurk/momentum.png`} alt='Momentum Homepage'/>
                  </div> */}
                </div>


                <div className='caroussel-gurk-container'>
                <div className='caroussel-project-container-text' style={{width : "80%"}}>
                    I started to learn Pytorch alongside the class, because in the Intro to ML class, we focus
                    more about what goes under the hood of PyTorch, especialy what function are used (In the class, 
                    it is almost not mentioned that Pytorch exist, because the goal is to understand the math behind, not to
                    implement a complete functional neural network with PyTorch.). <br/>
                    So I started following <a href='https://www.youtube.com/watch?v=Z_ikDlimN6A'>this</a> tutorial (funfact : this 
                    is not the longest tutorial series I followed, because I followed some 30 hours crypto course, but this is the biggest tutorial video I watched), 
                    So I learnt about PyTorch. It was really the basics and it helped me a lot, especialy for 
                    the <a onClick={()=> navigate("/projects/deep-learning")} style={{cursor : "pointer"}}>deep learning project</a> I did after.
                  </div>
                  {/* <div className='caroussel-project-container-image' style={{width : "60%"}}>
                    <video src={`/img/projects/gurk/video_goal.MOV`} alt='Momentum Homepage' autoPlay loop muted />                  
                  </div> */}
                </div>  

                <div className='caroussel-gurk-container'>
                <div className='caroussel-project-container-text' style={{width : "80%"}}>
                  Initially, I was dumb enought to think that I could implement a chess AI from scratch, but after a few 
                  hours of works, I researched some paper about it, and discorvered that it was a really hard task to do a 
                  neural network that could play chess, it is even some doctorate thesis. So I gave up for the moment, (I will
                  maybe do a simpler bot, that analyse the next moves and decide which one is the best based on some predefined algorithms)
                  But I needed a simpler project to do, so that I could practice the skills I learned in the 25 hours tutorial.
                  </div>
                </div>                  
                
              <div className='caroussel-gurk-container'>
              <div className='caroussel-project-container-text' style={{width : "80%"}}>
                    Do a Snake AI was the perfect project to do, because it is simple, and it is a good way to practice 
                    neural network, by adding a few layers, without any problems. It is also very visual, as you can see the progress thanks to a chart
                    that shows the score of the snake, and the length of the snake. It was also a good way to practice the training of a neural network, with loss function and gradient descent.
                  </div>
{/* 
                  <div className='caroussel-project-container-image' style={{width : "60%"}}>
                    <img src={`/img/projects/gurk/gurk_old.png`} alt='Gurk Homepage'/>
                  </div> */}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className='project-container-dark'>
        <div className='project-container2'>


          <h2>What did I learn?</h2>
          
          <div className='project-technologies-container'>
            <p className='project-technologies-text' style={{margin : 0, width : "60%"}}>
              With this project, I learned 3 things : Python and Pytorch of course, but also Linux. In fact, I 
              switched on Linux to do ML (see below), so I had to learn how to use this powerful OS. I went on ArchLinux,
              because I wanted to switch on a "hard code" Linux, and not a "winows like" Linux. So I learned how to use a terminal,
              how to install packages, how to use a package manager, how to use a text editor, how to use a shell, how to use a virtual environment, how to use a docker container, 
              all this things that are much easier to do now that I am on Linux
            </p>

            <div className='project-widgets-technologies-container' style={{width : "40%"}}>
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
                style={{borderColor : "#000000", color : "#000000"}}
                onClick={() => window.open('https://www.linux.org/')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt='Linux logo' className='widget-technology-project-image'/>
                <div>Linux</div>
              </motion.div> 
            </div>

          </div>
        </div>

      </div>

      <div className='clear-project-container'>
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
                  When I started learning PyTorch, by following the tutorial of 25 hours, I struggled a little bit
                  with one precise moment (In fact, I spent 24 hours and a change of OS for 30 seconds of video). 
                  The thing was, it was the line "print(cuda.is_available())". It was supposed to return True, because I have a GPU, but it returned False.
                  In fact, the problem came from the fact I don't have a Nvidia GPU, but an AMD GPU, so I had to install ROCm, which is the equivalent of CUDA for AMD.
                  However, on the page of ROCm, I can read this simple but destructive sentence : "ROCm is only available on Linux". So I had to switch to Linux.
                  I called a friend that used ArchLinux, and we Installed ArchLinux on my computer (because ArchLinux is more fun than a basic Ubuntu or Fedora).
                  </div>
                </div>



                <div className='caroussel-project-container'>
                  <div className='caroussel-project-container-text' style={{width : "80%"}}>
                  Then, I retried to run PyTorch and ROCm together, but I had the surprise to see that my GPU 
                  was not supported by ROCm.The only solution was to rebuild PyTorch and 
                  ROCm from source, which I couldn't do because I don't have enought RAM. 
                  Miraculously, I found a prebuilt version of PyTorch with ROCm support
                  on a Docker container built by a random guy on Github, that had the 
                  same problem as me (It was the last option, so I was very lucky to 
                  find it). I used this container, and I was able to run PyTorch with 
                  ROCm on my AMD GPU (finally). But to use this container, I had to
                  modify it a lot, so at the end, I learned a lot about how to use Docker,
                  to create sub-docker images, and use a docker container inside another, but with
                  custom permission, to write persistent files, and run the container in vs-code.

                  </div>
                  <div className='caroussel-project-container-techno' style={{width : "20%", paddingTop: "3px"}}>

                    <motion.div 
                      className='project-widget-small-technology'
                      whileHover={{scale : 1.02}}
                      style={{borderColor : "#2496ED", color : "#2496ED"}}
                      onClick={() => window.open('https://www.docker.com/')}
                    >
                      <img style={{width : "50%", borderRadius : "10px"}} src='https://avatars.githubusercontent.com/u/5429470?s=280&v=4' alt='Docker logo' className='widget-small-technology-project-image'/>
                      <div style={{fontSize : "0.7em"}}>Docker</div>
                    </motion.div>
                    </div>
                </div>                  
                <div className='caroussel-project-container'>
                  <div className='caroussel-gurk-container-text' style={{width : "80%"}}>
                    In comparison, the project was really simple to do. In fact, I only used PyTorch, and I implemented a simple neural Network, which was 
                    enought so that, after a few minutes of training, the snake does between 50 and 60 points, which is not bad at all, considering I had a 10x10 grid, so the maximum is 100 points.
                  </div>
                  {/* <div className='caroussel-project-container-image' style={{width : "20%"}}>
                    <video src={`/img/projects/gurk/gurk_presentation.mp4`} alt='Gurk video presentation' autoPlay loop muted />                  
                  </div> */}
                </div>  
                
              <div className='caroussel-project-container'>
                  <div className='caroussel-project-container-text' style={{width : "80%"}}>
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
                  <div>Hardware and OS</div>
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
                  <div>Docker to run Pytorch</div>
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
                <div>Do the model</div>
              </motion.div>
            </motion.div>
              
            </div>
          </div>
        </div>
      </div>
{/*       
      
      <div className='project-container-dark' style={{paddingBottom : "40px"}}>
        <div className='project-container2'>
          <h2 style={{width : "1000px"}}>Acknoledgments</h2>
          <div style={{textDecoration : "underline", cursor : "pointer"}} onClick={(e)=>window.open("https://www.linkedin.com/in/simonlefort/")}>Simon Lefort</div>
          <div>Thanks a lot to Simon to help me configure the server, <br/>so that I could use it easily to run other projects after that.</div>
        </div>
      </div> */}

      </div>
    </div>
  );
}

export default MisterPowerPoint;