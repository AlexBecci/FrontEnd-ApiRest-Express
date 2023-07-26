import axios from "axios";

const httpRequest = async (state)=>{
    const peticion=await axios.get('http://localhost:3000/api/v1/products')
    state(peticion.data.results)
}

const singleCharacter= async(id,state)=>{
    const peticion=await axios.get(`http://localhost:3000/api/v1/products/${id}`)
    state(peticion.data)
}
export{
    httpRequest,singleCharacter
}