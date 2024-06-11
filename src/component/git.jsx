const Githubs = ({id, url}) => {
    return ( 

        <>
            <button onClick={()=>{window.open('https://github.com/maximmim/'+url, '_blank');}} className="Git" id={id}>Github</button>
        </>

     );
}
 
export default Githubs;