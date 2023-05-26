import axios from 'axios'
import { useState } from 'react'
import {useQuery} from 'react-query'

const fetchColors = (pageNumber)=>{
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueries = () => {
    const [pageNumber,setPageNumber] = useState(1)
    const {data} = useQuery(
        ['colors',pageNumber],
        ()=> fetchColors(pageNumber),
        {
            keepPreviousData:true
        }
    )
  return (
    <div>
        <div>
            {data?.data.map((color)=>(
                <div key={color.id}>
                    <h2>{color.id} {color.label}</h2>
                </div>
            ))}
        </div>
        <div>
            <button 
                onClick={()=>setPageNumber(page => page - 1)} 
                disabled={pageNumber === 1}
            >Prev Page</button>
            <button 
                onClick={()=>setPageNumber(page => page + 1)} 
                disabled={pageNumber === 4}
            >Next Page</button>
        </div>
    </div>
  )
}

export default PaginatedQueries