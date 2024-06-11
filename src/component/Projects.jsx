import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import d1 from '../dwa1.jfif';
import d2 from '../dwa3.jfif';
import d3 from '../dwa2.png';
import Githubs from './git';
import View from './View';
const Project = () => {
    const images = [
        {   
          original: d1,
          thumbnail: d1, 
        },
        {   
          original: d2,
          thumbnail: d2, 
        },
        {   
          original: d3,
          thumbnail: d3, 
        },
    ];

    return ( 
        <>
            <h1 className="dwaas">Система адміністрування меню шкільної їдальні</h1>
            <p id='u1' className='dawdas'><b>АКТУАЛЬНІСТЬ ДОСЛІДЖЕННЯ:</b><br/><br/>
                Актуальність дослідження полягає у тому, що створення системи адміністрування меню шкільної їдальні може значно полегшити збір інформації щодо вибору страв дітьми.
                Автоматизує процес збору вибору альтернативного меню, дасть змогу обирати улюблені страви.
            </p>
            <p id='u2' className='dawdas'><b>МЕТА РОБОТИ:</b><br/><br/>
                Дослідити можливості мови розмітки HTML, таблиці каскадних стилів CSS, мови програмування JavaScript та платформи з відкритим кодом Node.js для створення системи адміністрування меню шкільної їдальні.
            </p>
            <div id='u3' className='dawdas'>
                <b>ЗАВДАННЯ ДОСЛІДЖЕННЯ:</b><br/><br/> 
                <ul>
                    <li>Проаналізувати можливості мови розмітки HTML, таблиці каскадних стилів CSS для створення сайту їдальні.</li>
                    <li>Дослідити можливості реалізації технології програмування мови Java Script та платформи з відкритим кодом Node.js для створення чат-боту.</li>
                    <li>На основі проведеного дослідження розробити систему, яка допоможе автоматизувати процес збирання інформації для вибору альтернативного меню шкільної їдальні, дасть змогу систематизувати та проаналізувати інформацію про харчування учнів.</li>
                </ul>
            </div>
            <Githubs url={"Scas"} id={"uw1"}/>
            
            <View  id={"uw2"}/>
            <div className='dw'>
                <ImageGallery showPlayButton={false} items={images} />
            </div>
        </>
    );
}

export default Project;
