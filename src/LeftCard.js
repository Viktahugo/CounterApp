import react,{useState,useEffect} from 'react'


function LeftCard() {
    const [type,setType]= useState('');
    const [setup,setSetup] = useState('');
    const [id,setId] = useState('');
    const [punchline,setPunchline] = useState('');
    useEffect( () => {  
        const fetchDadJoke = async () =>
            await fetch(
                "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
            ).then(response => response.json())
	         .then((data) => { 
                setType(data.type);
                setSetup(data.joke);
                setId(data.id);
                setPunchline(data.category);

                console.log(data);
        
        });
        fetchDadJoke();
    },[])
    const generateJoke = (e) =>
    {
        e.preventDefault();
        
    }
    return (
    
   <div className="container my-5">
        <h3 color="danger" className="d-none d-lg-block">
          <strong>Account not activated.</strong>
        </h3>

            <div className="card">
                <div top width="100%" alt="banner" />
                        <div className="card-body">
                        <div className=" card-text h3 mb-2 pt-2 font-weight-bold text-secondary">Check This</div>
                        <div className="" className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
                            DAD JOKES 
                        </div>
                            <p>Joke: {setup}</p>  
                            <p>Category: {punchline}</p> 
                            <p>Type: {type} </p>
                            <p>Joke ID: {id}</p>
                             <button onClick={generateJoke}>Generate</button>
                        </div>
            </div>
    </div>

        
    );
  }
  
  export default LeftCard; 
 
 
 
 
 
 
 
 
 
