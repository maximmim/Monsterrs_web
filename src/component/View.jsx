const View = ({id}) => {
    return ( 

        <>
            <button onClick={()=>{window.open('https://eat-3s-f9dc9684dd2a.herokuapp.com/', '_blank');}} className="View" id={id}>View</button>
        </>

     );
}
 
export default View;