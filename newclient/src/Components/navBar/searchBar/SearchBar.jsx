import { useState } from "react"
import { useDispatch } from "react-redux"
import { addDog } from "../../../Redux/actions.js"
import axios from 'axios'

function SearchBar (props) {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleChange = (event)=>{
        setName(event.target.value)
    }
    
    const onSearch = async (search) => {
        let dog = await axios(`http://localhost:3001/dogs/name?name=${search}`)
        if (dog.data.length > 0) {
            dispatch(addDog(dog.data))
        }
        else {
            window.alert ('dog not found')
        }
    }

    return(
        <div>
            <input 
            type="text"
            id="search"
            name="search"
            onChange={handleChange}
            />
            <button onClick={()=>(onSearch (name))}>
                Add
            </button>
        </div>
    )
}

export default SearchBar