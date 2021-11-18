import { useState, useContext } from 'react'; 
import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default function useGraphData() {
    
    
    const [error, setError] = useState(null);

 
    const getGraphData = async () => {
    return await axios.get('/graph').then(res => {  
        
            return res.data.graphData;                               
            }).catch((err) => {
            setError(err.response.data);
        })
    }
    

    return {
        getGraphData,
        error
    }
}
