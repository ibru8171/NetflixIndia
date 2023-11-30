import instance from "../instance";
import { useState } from "react";
import { useEffect } from "react";
import './Banner.css'




function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovieBanner] = useState();
    const fetchData = async () => {
        const { data } = await instance.get(fetchUrl);
        setMovieBanner(data.results[Math.floor((Math.random()) * (data.results.length))]);

    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log("=Banner=");
    console.log(movie);
    return (
        <>
        <div style={{height:"600px",backgroundPosition:"center -40",backgroundAttachment:"fixed",backgroundImage:`url(${base_url + movie?.backdrop_path} )`, backgroundSize:'cover',}}>
            <div className='banner_content'>
              <h1 style={{color:"white"}}>
                {movie && movie?.name}
              </h1>
              <button className="btn btn-danger">Play <i class="fa-solid fa-play bg-transparent" ></i></button>
              <button className="btn btn-outline-light ms-4">More info <i class="fa-solid fa-play fa-rotate-90 bg-transparent"></i></button>
              <h2 style={{color:"white"}}>
                {movie && movie?.overview?.slice(0,200)}...
              </h2>

                
                 </div>
                
            </div>
          
              </>
    )
}
    
   

     
export default Banner;