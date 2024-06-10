import { useState } from "react";


const Koment = ({id,img,like,down,data}) => {
    const [s1,setS1] = useState(like)
    const [s2,setS2] = useState(down)
    
    return ( 
        <>

            <div className="Koment_d" id={id}>

            <img src={img} className="Koment_img"/>

            <b onClick={()=>{let d = parseInt(s1)+1;setS1(d)}} className="Koment_like">👍:{s1}</b>
            <b onClick={()=>{let d = parseInt(s2)+1;setS2(d)}} className="Koment_down">👎:{s2}</b>

            <b className="Koment_data">{data}</b>
            

            </div>


        </>
     );
}
 
export default Koment;