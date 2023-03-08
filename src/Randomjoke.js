import react,{useEffect} from 'react'

const options = {
	method: 'GET',
	headers: {
		Authorization: 'chrnMsqPx8Ww',
		'X-RapidAPI-Key': 'd588ad86a1mshe08e4942cd8e224p1cb810jsn28180f0c065f',
		'X-RapidAPI-Host': 'random-stuff-api.p.rapidapi.com'
	}
};
	
function Randomjoke() {
    useEffect( () => {  
        fetch('https://random-stuff-api.p.rapidapi.com/reddit/FetchRandomPost?searchType=hot', options)
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