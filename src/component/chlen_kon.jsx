import { useState } from "react";


const CKoment = ({id,img,data}) => {

    return ( 
        <>

            <div className="cKoment_d" id={id}>

            <img src={img} className="cKoment_img"/>


            <p className="cKoment_data">{data}</p>
            

            </div>


        </>
     );
}
 
export default CKoment;