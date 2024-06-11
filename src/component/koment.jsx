import { useState } from "react";


const Koment = ({id,img,like,down,data}) => {
    const [s1,setS1] = useState(like)
    const [s2,setS2] = useState(down)
    
    return ( 
        <>

            <div className="Koment_d" id={id}>

            <img src={img} className="Koment_img"/>

            <b className="Koment_data">{data}</b>
            

            </div>


        </>
     );
}
 
export default Koment;