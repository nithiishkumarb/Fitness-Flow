import { useState } from "react"
import "./testimonials.css"
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion"
const Testimonials = () => {
    const transition={type:"spring", duration:3}
    const [selected,setSelected]=useState(0)
    const tLength=testimonialsData.length
    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>Say about us</span>
                <motion.span
                key={selected}
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={transition}
                >{testimonialsData[selected].review}</motion.span>
                <span>
                    <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                transition={{...transition, duration:2}}
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                ></motion.div>
                <motion.div
                transition={{...transition, duration:2}}
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}></motion.div>
                <motion.img 
                key={selected}
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={{...transition,duration:2}}
                src={testimonialsData[selected].image} alt="person-img"/>
                <div className="arrows">
                    <img 
                    onClick={()=>{
                        selected===0 
                        ? setSelected(tLength-1) 
                        : setSelected((prev)=>prev-1) 
                    }}
                    src={leftArrow} alt="leftarrow"/>
                    <img 
                    onClick={()=>{
                        selected===(tLength-1)
                        ? setSelected(0) 
                        : setSelected(prev=>prev+1)
                    }}
                    
                    src={rightArrow} alt="rightarrow"/>

                </div>            
            </div>
        </div>
    )
}

export default Testimonials