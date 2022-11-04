import '../css/meditations_list.css'
import Meditation from "./meditation_card";
import MeditationsSelect from '../UI/select/MeditationsSelect';
import { useMemo, useState } from 'react';
import { useSortedAndSearchMeditations } from '../hooks/useMeditations.js';
import InputField from '../UI/InputField/InputFiels';   
import axios from 'axios'
import { useEffect } from 'react';
const MeditationsList= ({meditations, onMeditationsChange})=>{

    // async function fetchMeditations(){
    //     //const meditationsList = await axios.get('https://jsonplaceholder.typicode.com/photos') for external downloadin
    //     // Here could be implemented a downloading information from the back server (coming soon...)
    //     setTimeout(() => {
            
    //         onMeditationsChange(meditations);
    //     }, 1000);
    // }

    // useEffect( ()=>{
    //     fetchMeditations();
    //     console.log("fetch")
    // },[])

    const [searchQuery, setSearchQuery]= useState('')
    const [selectedSort,setSelectedSort]=useState('')
    const [optionsList, setOptionsList]=useState([
        {name:"By rating",value: "rating"},
        {name:"By name",value: "title"}
    ]);
    const sortMeditations = (sort) =>{
        setSelectedSort(sort)
    }
    const sortedAndSearchedMeditations = useSortedAndSearchMeditations(meditations,selectedSort,searchQuery);
    return (
        <ul className="meditations_list_content">
            <div className="search_fields">
                {/* <button onClick={fetchMeditations}>GET POSTS</button> */}
                <MeditationsSelect 
                    defaultValue={"Sort by"} 
                    options = {optionsList} 
                    value={selectedSort}    
                    onChange = {sortMeditations}
                />
                <InputField 
                    placeholder ="Input the name"
                    value = {searchQuery}
                    onChange = {event => setSearchQuery(event.target.value)}
                />
            </div>
            {sortedAndSearchedMeditations.length
                ?sortedAndSearchedMeditations.map( (meditation)=>
                    <Meditation 
                        meditation = {meditation} 
                        key={meditation.id} 
                    />
                )           
                : <h1>No results</h1>
            }
        </ul>

    );



};

export default MeditationsList;