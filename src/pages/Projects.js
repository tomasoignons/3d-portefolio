import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "../style/projects.css"
import { useNavigate } from 'react-router-dom'

const PROJECTS = [
    {
        title : "Gurk",
        logo : "./logo/gurk.png",
        description : "Gurk is a chrome extension that customize your own page with all the informations you need",
        goto : "gurk",
        website : "https://www.gurk.app",
        technologies : ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
        color : "#3783B5"
    },
    {
        title : "Mister PowerPoint",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png",
        description : "In 2021, I created an Instagram account about PowerPoint. It went quite viral, reaching up more than 12 000 followers in a year and half",
        goto : "mister-powerpoint",
        website : "https://www.instagram.com/mister.powerpoint/",
        technologies : ["Instagram", "PowerPoint"],
        color : "#A93191"
    },
    {
        title : "Saas-builder",
        logo : "",
        description : "Because I want to launch my own saas, I made a template I could re-use every time",
        goto : "saas-builder",
        website : "",
        technologies : ["Svelte", "Node.js", "Express", "PostgreSQL"],
        color : "#F73C00"
    },
    {
        title : "Deep Learning",
        logo : "",
        description : "A friend was stuggling on a project for her deep learning class, so I helped her, and did a part of the project",
        goto : "deep-learning",
        website : "",
        technologies : ["Python", "PyTorch"],
        color : "#15519D"
    },
    {
        title : "Salles Libres",
        logo : "./logo/salleslibres.png",
        description : "Salles Libres is a website and app so that the students of my high school can see the free classroom to study",
        goto : "salles-libres",
        website : "https://salleslibres.netlify.app",
        technologies : ["Kotlin"],
        color : "#000092"
    },
    {
        title : "Salles libres v2",
        logo : "./logo/salleslibres.png",
        description : "In end June, I created a website for the students of my school to exchanges notes, exams, exercises...",
        goto : "salles-libres-v2",
        website : "https://salleslibresv2.netlify.app",
        technologies : ["React", "Node.js", "Express", "MongoDB"],
        color : "#000092"
    },
    {
        title : "Snake AI",
        logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJHVz4Ytq3Uxj1AATP9I0jLizBzZHZX-1tg&s",
        description : "To learn PyTorch a bit, I made a small snake AI, that became better than myself",
        goto : "snake-ai",
        website : "",
        technologies : ["Python", "PyTorch"],
        color : "#68CB6F"
    },    
    {
        title : "Groceries Application",
        logo : "",
        description : "To manage my groceries as a student, and make an interface for my to good to go bot, I made a groceries application",
        goto : "groceries-application",
        website : "",
        technologies : ["React-native", "tailwindcss"],
        color : "#FF3333"
    },
    {
        title : "To good to go Bot",
        logo : "https://cdn.sanity.io/images/nqimd3nr/production/8a0222b11abb540300779eab09157bdad06c042c-1458x1458.png?fit=max&auto=format",
        description : "To save some money, I use to good to go to make my groceries. I made a bot to be the first to get deals",
        goto : "tgtg-bot",
        website : "",
        technologies : ["React-native", "Node.js", "Express", "MongoDB", "Python"],
        color : "#006160"
    },
    {
        title : "Agepascompris",
        logo : "",
        description : "Agepascompris is a website where I share the particular class I give to my students",
        goto : "agepascompris",
        website : "https://www.agepascompris.com",
        technologies : ["Svelte"],
        color : "#ADE8F4"
    },
    {
        title : "Midjourney Instagram",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png",
        description : "In a month, I made an instagram bot to automatically post a picture taken on the midjourney discord, each day",
        goto : "midjourney-instagram",
        website : "https://www.instagram.com/iamakearts/",
        technologies : ["Node.js", "Express", "MongoDB", "Instagram"],
        color : "#A93191"
    },
    {
        title : "Bauhaus",
        logo : "",
        description : "For a german class, I made a website presenting a bauhaus object : a table",
        goto : "bauhaus-german",
        website : "https://bauhaus-allemand.netlify.app/",
        technologies : ["React", "Spline"],
        color : "#0E1129"
    },
    {
        title : "EPFL people scrapper",
        logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovQS0ajJEzRMTxLBVhd2mpqnJWm6h04Y9RA&s",
        description : "I made a scrapper to easily retrieve the informations about someone at EPFL",
        goto : "epfl-scrapper",
        website : "",
        technologies : ["Python", "Selenium"],
        color : "#FF0000"
    },
    {
        title : "Pix Instagram",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png",
        description : "During a summer, I made a instagram bot to automatically post a reel each day on Tiktok, Youtube and Instagram",
        goto : "pix-instagram",
        website : "",
        technologies : ["React", "Node.js", "Express", "MongoDB", "Instagram"],
        color : "#A93191"
    },
    {
        title : "Impress a girl",
        logo : "",
        description : "To ask a girl to go to prom with me, I made a website to ask her",
        goto : "prom",
        website : "https://constance-portail.netlify.app/",
        technologies : ["React"],
        color : "#EE3883"
    },
    {
        title : "Digital Hippo",
        logo : "./logo/digitalhippo.ico",
        description : "To learn NextJS and Stripe, I followed along a tutorial to get this marketplace",
        goto : "digital-hippo",
        website : "",
        technologies : ["NextJS", "Stripe"],
        color : "#60A5FA"
    },
    {
        title : "Deliveroo Clone",
        logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKnNIo4y5hqHyB6SHQTiJ2WUSOi_Y0z_dwwNvQ1_GxTbUT8PvX4EI9JpFBWlF-vo6d0I&usqp=CAU",
        description : "To learn React-native, I made a deliveroo clone, allowing you to order food",
        goto : "deliveroo-clone",
        website : "",
        technologies : ["React-native", "tailwindcss"],
        color : "#35B8B2"
    },
    {
        title : "Uber Clone",
        logo : "./logo/uber.png",
        description : "To learn react-native, I made a Uber Clone, with custom map and geolocation.",
        goto : "uber-clone",
        website : "",
        technologies : ["React-native", "tailwindcss"],
        color : "#080808"
    },
]

const TECHNOLOGIES_IMG = {
    "React" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt : "React",
        color : "#61DAFB",
        goto : "https://reactjs.org/"
    },
    "Node.js" : {
        link : "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        alt : "Node.js",
        color : "#529F41",
        goto : "https://nodejs.org/"
    },
    "Express" : {
        link : "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
        alt : "Express",
        color : "#000000",
        goto : "https://expressjs.com/"
    },
    "MongoDB" : {
        link : "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
        alt : "MongoDB",
        color : "#47A248",
        goto : "https://www.mongodb.com/"
    },
    "Svelte" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        alt : "Svelte",
        color : "#FF3E00",
        goto : "https://svelte.dev/"
    },
    "React-native" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt : "React-native",
        color : "#61DAFB",
        goto : "https://reactnative.dev/"
    },
    "Instagram" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
        alt : "Instagram",
        color : "#E4405F",
        goto : "https://www.instagram.com/"
    },
    "Python" : {
        link : "https://banner2.cleanpng.com/20180325/kpq/kisspng-python-logo-programmer-fierce-python-cliparts-5ab7bde1954e21.4104715915219911376116.jpg",
        alt : "Python",
        color : "#3776AB",
        goto : "https://www.python.org/"
    },
    "Selenium" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
        alt : "Selenium",
        color : "#43B02A",
        goto : "https://www.selenium.dev/"
    },
    "PowerPoint" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png",
        alt : "PowerPoint",
        color : "#D24726",
        goto : "https://www.microsoft.com/fr-fr/microsoft-365/powerpoint"
    },
    "tailwindcss" : {
        link : "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
        alt : "tailwindcss",
        color : "#38B2AC",
        goto : "https://tailwindcss.com/"
    },
    "NextJS" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        alt : "NextJS",
        color : "#000000",
        goto : "https://nextjs.org/"
    },
    "Stripe" : {
        link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
        alt : "Stripe",
        color : "#6860FF",
        goto : "https://stripe.com/"
    },
    "Spline" : {
        link : "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/828810/spline_icon_512-036e8146-63f7-4ab6-b26a-cc80dab6ae5d.png",
        alt : "Spline",
        color : "#CB55F6",
        goto : "https://spline.design/"
    },
    "PyTorch" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/640px-PyTorch_logo_icon.svg.png",
        alt : "PyTorch",
        color : "#EE4C2C",
        goto : "https://pytorch.org/"
    },
    "PostgreSQL" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        alt : "PostgreSQL",
        color : "#336791",
        goto : "https://www.postgresql.org/"
    },
    "Kotlin" : {
        link : "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
        alt : "Kotlin",
        color : "#F28029",
        goto : "https://kotlinlang.org/"
    },
}


function Projects() {

    const [projects, setProjects] = useState(PROJECTS)

    const [hoverProjects, setHoverProjects] = useState(-1)

    const navigate = useNavigate();

    function hexToRGBA(hex, opacity) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
    
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }


  return (
    <div className='projects-page'>
        <h1>Projects</h1>
        <p>Here are some projects I have worked on:</p>
        <div className='project-widgets-container'>
            {projects.map((project, index) => (
            <motion.div 
                key={index} 
                className='project-widget-container'
                style={{
                    borderColor: project.color,
                    boxShadow : "0px 0px 0px 0px " + project.color
                }}
                animate={{ 
                    boxShadow : `${hoverProjects===index ? 2 : 0}px ${hoverProjects===index ? 2 : 0}px ${hoverProjects===index ? 10 : 0}px ` + hexToRGBA(project.color, 0.5)
                }}
                onHoverStart={() => setHoverProjects(index)}
                onHoverEnd={() => setHoverProjects(-1)}
                onClick={() => navigate(project.goto)}
            >
                <div className='header-project-widget'>
                    <h2 className='project-widget-title' style={{color : project.color}}>{project.title}</h2>
                    {project.logo !== "" && (
                        <img className='project-widget-logo' src={project.logo} alt={project.title} />
                    )}
                </div>
                <p className='project-widget-description'>{project.description}</p>
                <div className='footer-project-widget'>
                    {project.website !== "" ? (
                        <a className='link-to-website-widget' href={project.website} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" style={{backgroundColor : project.color}}>Live demo</a>
                    ) : (
                        <div/>
                    )}
                    <div className='technolgies-container'>
                        {project.technologies.map((technology, index) => (
                            <div className='technology-image' style={{borderColor: TECHNOLOGIES_IMG[technology].color}}>
                                <img 
                                    className='technology-image-img'
                                    src={TECHNOLOGIES_IMG[technology].link} 
                                    alt={TECHNOLOGIES_IMG[technology].alt} 
                                    key={index}
                                    onClick={(e) => {
                                        window.open(TECHNOLOGIES_IMG[technology].goto); 
                                        e.stopPropagation()
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects