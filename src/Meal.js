import React,{ useState, useEffect} from 'react'
import './App.css';
import  newsimg from './default_news.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {useParams} from 'react-router-dom' 

function Meal() {
    const Params = useParams()
    // alert(Params.mealid)


    const[items, setItems]=useState([])
    const [loading, setLoading]= useState(false)
    useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Params.mealid}`)
    .then(res=>{
    setItems(res.data.meals)
    setLoading(true)
    }
    ).catch(err=>{
      console.log(err)
    })
    })
    const foodlist=items.map((food)=>{
    var foodimg =food.strMealThumb;
    if(foodimg==null)
    {
     foodimg=newsimg
    }
    else{
       foodimg=food.strMealThumb
    }
      return <div className='col-md-4'>
        <center>
          <div className='container'>
        <a href={`/meal/instructions/${food.strMeal}`}>
        <img src={foodimg} className="" alt="news" />
        <p><b>{food.strMeal}</b></p>
        </a>
        </div>
        </center>
      </div>
    
    })

  return (
    <div>

<div>
          <h3 className="mt-3 mb-2 text-danger text-center">Available Meals in {Params.mealid} </h3>
          <div className='container'>
          <div className='row'>
          {foodlist}
          {loading ? (foodlist): <p className='text-center'>Loading Please Wait...</p>}
          </div>
          </div>
          
        </div>
    </div>
  )
}

export default Meal