import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from 'react';



const Navigation = ()=> {
const menu = useRef(null);
  let start;
let proj ;
let About;
let Cont;
useEffect(()=>{
 start = document.getElementById("b1")
 proj = document.getElementById("b2")
 About = document.getElementById("b3")
 Cont = document.getElementById("b4")
})
let s;
function open() {
  if (s) {
    
  menu.current.style.transform = "translate(-100%)"
  s=false
  }
  else {
    menu.current.style.transform = "translate(0%)"
    s=true
  }
}

function o(el) {
  
  el.scrollIntoView({ behavior: 'smooth', block: 'center', behavior: 'smooth'});
  menu.current.style.transform = "translate(-100%)"
  s=false
}

    return (
        <>

      <div ref={menu} className='menu_phone'>
        <div className='op' id='op1' onClick={()=>o(start)}>О нас</div>
        <div className='op' id='op2' onClick={()=>o(proj)}>Моменти</div>
        <div className='op' id='op3' onClick={()=>o(About)}>Ми</div>
        <div className='op' id='op4' onClick={()=>o(Cont)}>Проєкт</div>
      </div>

        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Monsters</a>
    <button className="navbar-toggler" onClick={open} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link active" aria-current="page" onClick={()=>o(start)} >О нас</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>o(proj)} >Наші моменти</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>o(About)} >Ми</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>o(Cont)} >Проєкт</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navigation