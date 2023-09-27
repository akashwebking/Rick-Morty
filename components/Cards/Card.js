import React from 'react';
import styles from './card.module.scss';
import { Link } from 'react-router-dom';

const Card = ({results,page}) => {
    let display;
    if(results){
        display=results.map((x)=>{
            let{id,name,image,location,status}=x;
            return(
                <Link
                style={{textDecoration:"none"}}
                 to={`${page}${id}`} key={id} className='col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark'>
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                         <img src={image} alt="" className={`${styles.img} img-fluid`} />
                         <div style={{padding:"10px"}} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                         </div>
                    </div>
                    {(()=>{
                        
                        if(status=="Alive"){
                            return(
                                <span className={`${styles.badge} position-absolute badge text-bg-success`}>{status}</span>
                            )
                            
                        }
                        else if(status=="Dead"){
                            return(
                                <span className={`${styles.badge} position-absolute badge text-bg-danger`}>{status}</span>
                            )
                        }
                        else{
                           return(
                            <span className={`${styles.badge} position-absolute badge text-bg-secondary`}>{status}</span>
                           )
                        }
                    })()}
                    
                </Link>
            )
        })
    }
    else{
        display="NO CHARACTER FOUNDS";
    }
  return (
   
        <> {display}</>
   
  )
}

export default Card