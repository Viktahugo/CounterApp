import react from 'react'

function Sidebar(props) {
    
    return (
      <div className="container my-5"> 
        Name: <h3> Whats You Flavour!</h3> 
      

        <p> NAME: {props.name} </p>
        <p>Description: {props.description}</p>
        <p>Price: {props.price}</p>      
      </div>   
        
    );
  }
  
  export default Sidebar;   