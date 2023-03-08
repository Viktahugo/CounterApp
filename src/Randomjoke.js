import react,{useEffect, useState} from 'react'

	
function Randomjoke() {
    const [joke,setJoke] = useState('');
    const [icon,setIcon] = useState('');
    const [id,setId] = useState('');
    const [updated_at,setUpdated_at]= useState('');
    const [created_at,setCreated_at] = useState('');
    useEffect( () => {  
        const fetchJoke = async () =>
            await fetch(
                'https://api.chucknorris.io/jokes/random'
            ).then(response => response.json())
	         .then((data) => { 
                setJoke(data.value);
                setIcon(data.icon_url);
                setId(data.id);
                setUpdated_at(data.updated_at);
                setCreated_at(data.created_at);


                console.log(data);
        
        });
        fetchJoke();
    },[])
    
    return (
    
   <div className="container my-5">
        <h3 color="danger" className="d-none d-lg-block">
          <strong>Random</strong>
        </h3>

            <div className="card">
                <div top width="100%" alt="banner" />
                        <div className="card-body">
                        <div className=" card-text h3 mb-2 pt-2 font-weight-bold text-secondary">Jokes Called By API</div>
                        <div className="" className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
                        <p>Id:{id}</p>
                        <p> <img src={icon} alt="Image not found" /> </p>
                        <p> the Joke: {joke} </p>
                        <p>Updated at: {updated_at}</p>
                        <p> Craeted at: {created_at }</p>

                        </div>
                                
                             <button color="success" className="font-weight-bold">Click To Generate Joke</button>
                        </div>
            </div>
    </div>

        
    );
  }
  
  export default Randomjoke; 