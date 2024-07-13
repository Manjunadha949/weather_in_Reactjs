import React,{ useState, useEffect }  from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faWind, faTint ,faCloud} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const Home = () => {
    const [data,setData]=useState({
        celcius:10,
        name:'London',
        humidity:10,
        speed:2
    })
    const [name,setName]=useState('');
    useEffect(()=>{
            },[]);
    const handleClick=()=>{
        if(name!==""){
            const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=93bea8965a7ae977992f0430dee8865a&units=metric';
            axios.get('apiUrl')
            .then(res=>{
             
             setData({...data,celcius:res.data.main.temp,name:res.data.name,humidity:res.data.main.humidity,
                 speed:res.data.wind.speed
             })
            })
            .catch(err =>  console.error(err));
     
        }
    }
    return (
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Enter City Name"  onChange={e=>setName(e.target.value)}/>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass}  onClick={handleClick}/>
                    </button>
                </div>
                <div className="winfo">
                <FontAwesomeIcon icon={faCloud} className="icon"/>
                    <h1>{Math.round(data.celcius)}°C</h1>
                    <h2>{data.name}</h2>
                    <div className="details">
                        <div className="col">
                            <FontAwesomeIcon icon={faTint} className="icon-large" />
                            <div className="humidity">
                                <p>{Math.round(data.humidity)}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <FontAwesomeIcon icon={faWind} className="icon-large" />
                            <div className="wind">
                                <p>{Math.round(data.speed)} Km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
