import react,{useState} from 'react'
import Sidebar from './Sidebar.js'
import LeftCard from './LeftCard.js'
import Randomjoke from './Randomjoke.js'
import Header from './Header.js'



function App() {
  const [Counter,setCounter] = useState(0);
  return (
    
    
    
    <div class="container">
          <Header />

  <div class="row">
    <div class="col-md-4">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1> Counter App </h1>
          <div className="my-5">
             <h2 className="my-5">Count:{Counter}</h2>

             <button 
                  className="btn btn-success mx-3"
                  onClick={()=> setCounter(Counter+1) }
              
              > 
                  Increment
              </button>
             <button 
                className="btn btn-danger mx-3"
                onClick={()=> setCounter(Counter-1)}
                disabled = {Counter===0}
              > 
                   Decrement 
              </button>
             <button 
                className="btn btn-secondary mx-3" 
                onClick={()=>setCounter(0)}
                disabled = {Counter===0}
              > 
                reset 
              </button>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <Randomjoke />
    </div>
    <div class="col">
        <LeftCard />
    </div>
  </div>
</div>

  );
}

export default App;
