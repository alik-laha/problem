import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [names, setNames] = useState([]);
  const [random,setRandom]=useState(0)
  const [data, setData] = useState([]);
  const [NameArray, setNameArray] = useState([]);
  useEffect(() => {
  axios.get("https://swapi.dev/api/people/",{headers:{"Accept":"application/json"}})
  .then((response) => {
    // setData(response.data.results);
    setData(response.data.results);
  })
  .catch((error) => {
    console.error(error);
  });
}, []);
  useEffect(() => {
    
    data.map((item) => {
      setNames((prev) => [...prev, item.name]);
    });
  }, [data]);
const handleClick = () => {
  setRandom(Math.floor(Math.random() * names.length));
  setNameArray((prev) => [...prev, names[random]]);
  
}
const handledelete = (id) => {
  setNameArray(NameArray.splice(id+1))
}
  
  return (
    <div>
      <button onClick={handleClick}>
        Add
      </button>
      {
        NameArray.length>0 ? NameArray.map((item,count) => {
          return (
          <div key={count} style={{display:"flex"}}>
          <p >{item}</p>
          <hr></hr>
          <button onClick={()=>handledelete(count)} style={{flexDirection:"right"}}>Delete</button>
          </div>
        )
      }) : <h1>Click to add Name</h1>
    }
    </div>
  );
}

export default App;
