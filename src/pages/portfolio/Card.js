import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FiGithub } from 'react-icons/fi';
import src from "../../assets/images/portfolio-img7.jpg"

export const Card =()=>{
    return(
<div className="card">
          <img src={src} className="card-img-top" alt="src" />
          <div className="card-body">
            <div className="title d-flex justify-content-between ">
              <h5 className="card-title">Card title</h5>
              <p className="icons"><a href="#"><FiGithub /></a> &nbsp;<a href="#" className="me-2"><HiMiniArrowTopRightOnSquare /></a></p>

            </div>

            <p className="card-text textt">
              Some quick example text to build on the card title 
            </p>
          </div>
        </div>
    )
}