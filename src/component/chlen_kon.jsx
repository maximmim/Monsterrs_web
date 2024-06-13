import { useState } from "react";


const CKoment = ({id,img,data,d}) => {

    return ( 
        <>

            <div className="cKoment_d" id={id}>

            <img src={img} className="cKoment_img"/>

            
            <b className="cKoment_data">{data}</b>
            <b className="cCkodwa">{d}</b>

            </div>


        </>
     );
}
 
export default CKoment;