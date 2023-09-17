import {Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {Link} from 'react-router-dom';


export const ProjectCard = ({title,description,imgUrl,linkUrl}) =>{
    

    return(
        <Col sm={6} md={4} >
            
            <div className="proj-imgbx">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} onClick={linkUrl}/>
            </a>
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>{description}</span>
               
            </div>
            </div>
            <span> <button className="arrow"  onClick={() => console.log('connect')}><a href={linkUrl}><ArrowRightCircle size={25}/></a></button></span>

        </Col>
    )

}