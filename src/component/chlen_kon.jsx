import { useState } from "react";


const CKoment = ({id,img,data,d}) => {

    return ( 
        <>

            <div className="cKoment_d" id={id}>

            <img src={img} className="cKoment_img"/>

            
            <b className="cKoment_data">{data}</b>
            <p className="cCkodwa">{d}</p>

            </div>


        </>
     );
}
 
export default CKoment;