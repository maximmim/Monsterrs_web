

const Project = ({title,img,text,children,id}) => {

    return ( 
            <>
                <h1 className="Title_proj">{title}</h1>
                <img  className="Image_proj" src={img} alt="img"/>
                <p className="Text_proj">{text}</p>
                {children}
            </>
     );
}
 
export default Project;