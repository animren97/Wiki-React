import React, {useState,useEffect} from 'react'
import { useParams} from "react-router-dom"

const CardDetails = () => {
    let [fetchedData, usedFetchedData]=useState([]);
    let { name, image, location, origin, gender, species, status, type  } = fetchedData
    let {id}= useParams()
let api = `https://rickandmortyapi.com/api/character/${id}`
    useEffect( () => {
        (async function () {
          let data= await fetch(api).then((res) =>res.json())
          usedFetchedData(data)
        })();
      }, [api]);

 
  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-4'>
        <h1 className='text-center'>{name}</h1>
        <img src={image} alt="rick&marty" className="img-fluid"></img>
        {(() => {
                if( status === "Dead") {
                    return (
                        <div className=" badge bg-danger fs-5">{status}</div>
                    );
                }
                
                else if( status === "Alive") {
                    return (
                        <div className= "badge bg-success fs-5">{status}</div>
                    );
                } else {
                    return (
                        <div className= "badge bg-secondary fs-5">{status}</div>
                    );
                }
            })()}
        <div className='content'>
            <span className='fw-bold'>Gender :</span>
           {gender}   
        </div>
        <div className='content'>
            <span className='fw-bold'>Location :</span>
            {location?.name}    
        </div>
        <div className='content'>
            <span className='fw-bold'>Species :</span>
            {species}    
        </div>
        <div className='content'>
            <span className='fw-bold'>Type :</span>
             {type === "" ? "Unknown" : type}     
        </div>
        <div className='content'>
            <span className='fw-bold'>Origin :</span>
            {origin?.name}
        </div>
      </div>
    </div>
  )
}

export default CardDetails
