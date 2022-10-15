import React,{ useState, useEffect, useRef} from 'react'
import './App.css';
import  newsimg from './default_news.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function Home() {
  const effRun = useRef(false)
    const[items, setItems]=useState([])
    const [loading, setLoading]= useState(false)
    useEffect(()=>{
if (effRun.current === false){
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>{
    setItems(res.data.categories)
    setLoading(true)
    }
    ).catch(err=>{
      console.log(err)
    })
    return()=>{
      effRun.current = true;
    }
  }
    },[])
    const foodlist=items.map((food, index)=>{
    var foodimg =food.strCategoryThumb;
    if(foodimg==null)
    {
     foodimg=newsimg
    }
    else{
       foodimg=food.strCategoryThumb
    }
      return <div className='col-md-4' key={index}>
        <center>
          <div className='container'>
           
        <a href={`/meal/${food.strCategory}`}>
        <img src={foodimg} className="" alt="news" />
        <p><b>{food.strCategory}</b></p>
       
        </a>
        </div>
        </center>
      </div>
    
    })
      
    
      return (
        <div className="App">
          <h3 className="mt-3 mb-2 text-danger text-center">Categories of Meals </h3>
          <div className='container'>
          <div className='row'>
          {foodlist}
          
          {loading ? (foodlist): <p className='text-center'>Loading Please Wait...</p>}
          </div>
          </div>
          
        </div>
      );
}

export default Home