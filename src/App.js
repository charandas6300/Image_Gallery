import './App.css';
import React,{useState} from 'react'
import axios from 'axios';
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault()
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    ).then(res => {setData(res.data.photos.photo)})
  }
  return (
    <div>
      <center>
      <h1><span style={{color: 'green'}}>Image</span> Gallery</h1>
        <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={changeHandler} className="search"></input><br></br>
        <button type="submit" id="butt">Search</button>
        </form>
        {data.length>=1?<Gallery data={data}/>:<h4>No data loaded</h4>}
      </center>
    </div>
  );
}

export default App;
