import { MagnifyingGlass } from "phosphor-react";
import './Search.css'
export function Search({setSearch}){
    return (
        <div className="search-container">
          <MagnifyingGlass className="search-icon" size={24} color="#2ea9ce"/>
          <input onChange={(event)=> setSearch(event.target.value)} type="search" placeholder="Buscar"/>
        </div>
        
    )
}