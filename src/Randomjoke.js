import react,{useEffect} from 'react'

	
function Randomjoke() {
    useEffect( () => {  
        fetch('https://api.chucknorris.io/jokes/random')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    },[])
    
    return (
    
   <div className="container my-5">
        <h3 color="danger" className="d-none d-lg-block">
          <strong>Random</strong>
        </h3>

            <div className="card">
                <div top width="100%" alt="banner" />
                        <div className="card-body">
                        <div className=" card-text h3 mb-2 pt-2 font-weight-bold text-secondary">Jokes</div>
                        <div className="" className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
                           This Field will populate with Jokes!
                        </div>
                                
                             <button color="success" className="font-weight-bold">Click To Generate Joke</button>
                        </div>
            </div>
    </div>

        
    );
  }
  
  export default Randomjoke; 