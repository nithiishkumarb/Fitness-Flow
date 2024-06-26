import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nick from "../../assets/nike.png"
import whiteTick from "../../assets/whiteTick.png"
const Reasons = () => {
  return (
    <div className="Reasons">
        <div className="left-r">
          <img src={image1} alt="img1"></img>
          <img src={image2} alt="img2"></img>
          <img src={image3} alt="img3"></img>
          <img src={image4} alt="img4"></img>
        </div>
        <div className="right-r">
          <span>Some reasons</span>
          <div>
            <span className="stroke-text">why</span>
            <span>choose us?</span>
          </div>
          <div className="details-r">
            <div>
              <img src={whiteTick} alt=""></img>
              <span>FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
              <img src={whiteTick} alt=""></img>
              <span>OVER 160+ EXPERTS COACHS</span>
            </div>
            <div>
              <img src={whiteTick} alt=""></img>
              <span>TRAIN AND FASTER THAN BEFORE</span>
            </div>
            <div>
              <img src={whiteTick} alt=""></img>
              <span>RELIABLE PARTNERS</span>
            </div>
          </div>
          <span style={{color:"var(--gray)",fontWeight:"normal"}}>OUR PARTNERS</span>
          <div className="partners">
            <img src={nick} alt=""></img>
            <img src={nb} alt=""></img>
            <img src={adidas} alt=""></img>
          </div>
        </div>
    </div>
  )
}

export default Reasons