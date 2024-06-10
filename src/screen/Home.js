import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../component/Navig';
import Block from '../component/block';
import k_1_img from "../dw1.png"
import k_2_img from "../dw2.png"
import k_3_img from "../dw3.png"
import k_4_img from "../dw5.jfif"
import k_5_img from "../dw4.png"


import c_1_img from "../c1.png"
import c_2_img from "../c2.png"
import c_3_img from "../c3.png"



import Flls from "../unnamed.png"
import Fll from '../component/fll';
import Sads from '../component/faw';
import Koment from '../component/koment';
import CKoment from '../component/chlen_kon';

function Home() {


    return (
        <>

            <Navigation/>

            <Block o={"b1"}>
                <b id='Hello'>Monsters👻</b>
            <Fll/>
            
            <Sads/>
            
        <img src={Flls} className="Fllss_img"/>

            </Block>
            <Block o={"b2"}>
             
            <h1 className='Nawd'>Наші розваги</h1>

            <Koment
                id={"k_1"}
                img={k_1_img}
                like={"142"}
                down={"4"}
                data={"20.12.2024"}
            />

            <Koment
                id={"k_2"}
                img={k_2_img}
                like={"312"}
                down={"21"}
                data={"20.12.2024"}
            />

            <Koment
                id={"k_3"}
                img={k_3_img}
                like={"1100"}
                down={"15"}
                data={"20.12.2024"}
            />

            
            <Koment
                id={"k_4"}
                img={k_4_img}
                like={"530"}
                down={"2"}
                data={"20.12.2024"}
            />
   
            <Koment
                id={"k_5"}
                img={k_5_img}
                like={"2415"}
                down={"21"}
                data={"20.12.2024"}
            />

            </Block>

            <Block o={"b3"}>

            <CKoment
                id={"сdaw_1"}
                img={c_1_img}
            />

            <CKoment
                id={"сdaw_2"}
                img={c_2_img}
            />

            <CKoment
                id={"сdaw_3"}
                img={c_3_img}
            />


            
            </Block>

          
        </>
    );
}

export default Home;
