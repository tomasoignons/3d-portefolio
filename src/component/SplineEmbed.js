import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState } from 'react';
import '../style/spline.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";
import { FaBook, FaPlus } from 'react-icons/fa';





const STATIONS = [55, 182, 230, 310]
const TEXT = {
    55: {
        title: "Gurk",
        description: "Gurk is my biggest project so far. I allows you to customize your browser homepage with multiple widgets, to have various informations, such than your calendar, the stock-market, or the real-time weather",
        link : "/projects/gurk"
    },
    182: {
        title: "Instagram",
        description: "I have 3 main projects related to Instagram. The first one is an account about PowerPoint, that went quite good, making me the first french PowerPoint content creator. The second one is a bot that goes into the midjourney discord, take a picture, and post it automaticaly. The third one is a bot that takes a video I already made, and post it on Instagram, Youtube and Tiktok. Both have a browser-integrated dashboard.",
        link : "/projects/mister-powerpoint"
    },
    230: {
        // title: "Salles Libres",
        // description: "When I was in high school, I made a website that allows students to see the free classrooms in real-time. At first it was only a small android application, and I turned it into a full website. Then, I made salleslibresv2, a new website that allows the students to share different documents, such as summaries, exercises, or exams.",
        title : "Machine Learning",
        description : "I have a few projects related to machine learning, such as a Snake AI, and deep learning project. This allowed me to understand PyTorch and Tensorflow, and to make a few projects with them.",
        link : "/projects/deep-learning"
    },
    310: {
        title: "And much more...",
        description: "I have a lot of other projects, such as agepascompris, a to good to go bot, and a few clones of famous apps, feel free to check them out !",
        link : "/projects"
    }
}

export default function SplineEmbed() {
    const train = useRef()
    const spline = useRef(null);

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showing, setShowing] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("Send")

    const navigate = useNavigate();


    async function sendMessage(){
        setErrorMessage("Sending message...")
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
        // Vérifie si l'adresse e-mail est valide en utilisant l'expression régulière
        const isValid = emailPattern.test(email);
        const containsYopmail = /@yopmail\.com/i.test(email);
        if(!isValid || containsYopmail) {
        setErrorEmail("Please enter a valid email address");
        return
        }
        const response = await axios.post(`https://api.gurk.app/api/website/contact/send`, { 
            name : name, 
            email : email,
            subject : "Contact from portefolio",
            message : message,
            toEmail : "emmanuel.b.omont@gmail.com"
        })

        if(response.data.success) {
            setErrorEmail("");
            setName("");
            setEmail("");
            setMessage("");
            setErrorMessage("Message sent successfully")
            await new Promise(r => setTimeout(r, 3000));
            setErrorMessage("Send")
          } else {
            setErrorMessage("An error occurred while sending the message")
            await new Promise(r => setTimeout(r, 3000));
            setErrorMessage("Send")
        }
    
  

        console.log("Sending message")
        console.log("Name : ", name)
        console.log("Email : ", email)
        console.log("Message : ", message)
        console.log("Message sent")
    }


    function degToRad(degrees) {
        return degrees * Math.PI / 180;
    }

    function onLoad(splineInstance){
        const obj = splineInstance.findObjectByName("Train")
        spline.current = splineInstance;
        train.current = obj

        handleRotationCamera()
    }

    function handleKeyDown(event) {
        if(train.current){
            switch(event.key) {
                case 'ArrowLeft':
                    // Rotate the train to the left
                    train.current.rotation.z -= degToRad(2);
                    break;
                case 'ArrowRight':
                    // Rotate the train to the right
                    train.current.rotation.z += degToRad(2);
                    break;
                default:
                    break;
            }
            handleRotationCamera()
        }
    }
    function handleScroll(event) {
        if(train.current){
            if (event.deltaY < 0) {
                // Scroll up, rotate the train to the left
                train.current.rotation.z -= degToRad(2);
            } else if (event.deltaY > 0) {
                // Scroll down, rotate the train to the right
                train.current.rotation.z += degToRad(2);
            }
            handleRotationCamera()
        }
        
    }
    function handleRotationCamera(){
        if(train.current){
            const rotationInDegrees = train.current.rotation.z * (180 / Math.PI);
            let bool = false;
            for (let station of STATIONS) {
                if (Math.abs(rotationInDegrees%360 - station) <= 10) {
                    setText(TEXT[station].title);
                    setDescription(TEXT[station].description);
                    setLink(TEXT[station].link);
                    bool = true
                    setShowing(true)
                    break;
                }
            }
            if(!bool){
                setShowing(false)
            }
            const radius = Math.sqrt(spline.current._camera.position.x ** 2 + spline.current._camera.position.z ** 2)
            const x = radius * Math.cos(train.current.rotation.z + Math.PI/5)
            const y = radius * Math.sin(train.current.rotation.z + Math.PI/5)
            if(x !== 0 || y !== 0){
                spline.current._camera.position.x = -x
                spline.current._camera.position.z = y
            }
        }
        
    }
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleScroll);


    
        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

  return (
    <div className='home-container'>
        <div className='size-content-container'>
            <div className='size-content'>
                {/* Ducoup ici c pour tout ce qui va être profil */}
                <div className='profile-image-container'>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar"/>
                </div>
                <div className='profile-informations-container'>
                    <div>Emmanuel OMONT</div>
                    <div>EPFL Student in Computer Science</div>
                </div>
                <div className='contact-container'>
                    <div className='selector-container-big'>
                        <motion.div onClick={()=>setCurrentSlide(0)} className='selector-element'>Contact me</motion.div>
                        <motion.div onClick={()=>setCurrentSlide(1)} className='selector-element'>Links</motion.div>
                        <motion.div onClick={()=>setCurrentSlide(2)} className='selector-element'>Projects</motion.div>
                        <motion.div 
                            className='selector-element-background'
                            animate={{
                                left : currentSlide === 0 ? "3%" : currentSlide === 1? "36%" : currentSlide === 2 ? "65%" : "100%",
                                width : currentSlide === 0 ? "34%" : currentSlide === 1? "28%" : currentSlide === 2 ? "30%" : "30%"
                            }}
                        ></motion.div>
                    </div>
                    <Carousel 
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        selectedItem={currentSlide}
                        renderArrowPrev={(onClickHandler, hasPrev, label) => {}}
                        renderArrowNext={(onClickHandler, hasNext, label) => {}}
                    >
                        <div>
                            <input className='name-container' type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                            <input className="email-container" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <motion.p initial={{height : "0px"}} animate={{height : errorEmail === "" ? "0px" : ""}} className="error-email">{errorEmail}</motion.p>
                            <textarea className='message-container' placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            <motion.button className='button-contact' whileHover={{scale : 1.03}} onClick={()=>sendMessage()}>{errorMessage}</motion.button>
                        </div>
                        <div className='social-container'>
                            <motion.div 
                            className='link-container'
                            onClick={()=> window.open("https://www.linkedin.com/in/emmanuel-omont-37ba272a7/", "_blank")}
                            whileHover={{scale : 1.04}}
                            style={{borderColor : "#0077B7"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <img className="image-social" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin"/>
                                    </div>
                                    <p>Linkedin</p>

                                </div>
                                <FiArrowUpRight size={20} color='#0077B7'/>
                            </motion.div>

                            <motion.div 
                            className='link-container'
                            onClick={()=> window.open("https://github.com/tomasoignons", "_blank")}
                            whileHover={{scale : 1.04}}
                            style={{borderColor : "#000000"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <img className="image-social" src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="github"/>
                                    </div>
                                    <p>Github</p>

                                </div>
                                <FiArrowUpRight size={20} color='#000000'/>
                            </motion.div>

                            <motion.div 
                            className='link-container'
                            onClick={()=> window.open("https://people.epfl.ch/emmanuel.omont", "_blank")}
                            whileHover={{scale : 1.04}}
                            style={{borderColor : "#FF0000"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <img className="image-social-epfl" src='https://www.epfl.ch/wp/6/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg' alt="EPFL logo"/>
                                    </div>
                                    <p>EPFL</p>

                                </div>
                                <FiArrowUpRight size={20} color='#FF0000'/>
                            </motion.div>
                        </div>       



                        <div className='social-container'>
                            <motion.div 
                                className='link-container'
                                onClick={()=> navigate("/projects/gurk")}
                                whileHover={{scale : 1.04}}
                                style={{borderColor : "#3783B5"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <img className="image-social" src='./logo/gurk.png' alt="Gurk Logo"/>
                                    </div>
                                    <p>Gurk</p>

                                </div>
                                <FiArrowRight size={20} color='#3783B5'/>
                            </motion.div>

                            <motion.div 
                                className='link-container'
                                onClick={()=> navigate("/projects/mister-powerpoint")}
                                whileHover={{scale : 1.04}}
                                style={{borderColor : "#D24726"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <img className="image-social" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png' alt="PowerPoint logo"/>
                                    </div>
                                    <p>Mister PowerPoint</p>
                                </div>
                                <FiArrowRight size={20} color='#D24726'/>
                            </motion.div>

                            <motion.div 
                                className='link-container'
                                onClick={()=> navigate("/projects/snake-ai")}
                                whileHover={{scale : 1.04}}
                                style={{borderColor : "#68CB6F"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <img className="image-social" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJHVz4Ytq3Uxj1AATP9I0jLizBzZHZX-1tg&s' alt="AgepasCompris logo"/>
                                    </div>
                                    <p>Snake AI</p>

                                </div>
                                <FiArrowRight size={20} color='#68CB6F'/>
                            </motion.div>

                            <motion.div 
                                className='link-container'
                                onClick={()=> navigate("/projects/deep-learning")}
                                whileHover={{scale : 1.04}}
                                style={{borderColor : "#EE4C2C"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <img className="image-social" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/640px-PyTorch_logo_icon.svg.png' alt="PyTorch logo"/>
                                    </div>
                                    <p>Deep Learning</p>
                                </div>
                                <FiArrowRight size={20} color='#EE4C2C'/>
                            </motion.div>


                            <motion.div 
                                className='link-container'
                                onClick={()=> window.open("https://agepascompris.gurk.app", "_blank")}
                                whileHover={{scale : 1.04}}
                                style={{borderColor : "#ADE8F4"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <FaBook size={20} color='#ADE8F4'/>
                                    </div>
                                    <p>Agepascompris</p>

                                </div>
                                <FiArrowUpRight size={20} color='#ADE8F4'/>
                            </motion.div>

                            <motion.div 
                                className='link-container'
                                onClick={()=> navigate("/projects")}
                                whileHover={{scale : 1.04}}
                                style={{borderColor : "#000000"}}
                            >
                                <div className='social-title-container'>
                                    <div className='img-link-container'>
                                        <FaPlus size={20} color='#000000'/>
                                    </div>
                                    <p>Other projects</p>

                                </div>
                                <FiArrowRight size={20} color='#000000'/>
                            </motion.div>
                        </div>
                    </Carousel>
                </div>
            </div>

        </div>
        <div className='spline-model'>
            <Spline scene="https://prod.spline.design/gNX8rb615tlrYXZX/scene.splinecode" onLoad={onLoad}/>
            <motion.div 
                className='overlay-text'
                initial={{opacity : 0}}
                animate={{opacity : showing ? 1 : 0}}
            >
                <div className='overlay-content'>
                <div className='overlay-title'>{text}</div>
                <div className='overlay-description'>{description}</div>
                </div>
                <button className='button-overlay' onClick={() => navigate(`${link}`)}>More</button>            </motion.div>
        </div>

        {/* <div className='control-button'>
            <div className='right-arrow-control'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" stroke-width="0" fill="currentColor" />
                </svg>
            </div>
            <div className='mid-control'></div>
            <div className='left-arrow-control'>
                <svg xmlns="http://www.w3.org/2000/svg" style={{fill : "none"}} class="icon icon-tabler icon-tabler-triangle-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" stroke-width="0" fill="currentColor" />
                </svg>
            </div>
        </div> */}
    </div>
  );
}