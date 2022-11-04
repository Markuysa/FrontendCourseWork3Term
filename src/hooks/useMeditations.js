import {useMemo} from 'react'

export const useSortedMeditations = (meditations,selectedSort)=>{
    
    const sortedMeditations= useMemo(()=>{
        if (selectedSort){
            return [...meditations].sort( (a , b) => String(a[selectedSort]).localeCompare(String(b[selectedSort]))) 
        }
        return meditations;
    },[selectedSort,meditations]);

    return sortedMeditations;

}

export const useSortedAndSearchMeditations = (meditations,selectedSort,searchQuery)=>{

    
    console.log(sortedMeditations)
    const sortedAndSearchedMeditations = useMemo(()=>{
        return sortedMeditations.filter(meditation => meditation.title.toLowerCase().includes(searchQuery.toLowerCase()))
    },[sortedMeditations,searchQuery])    

    return sortedAndSearchedMeditations;
}
