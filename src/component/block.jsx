import 'bootstrap/dist/css/bootstrap.min.css';

const Block = ({o,children}) => {

    
    return ( 
    <>
        <div className='block' id={o}>{children}</div>
    </> );
}
 
export default Block;