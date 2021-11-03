import React, { useEffect , useState }from 'react'

//API 
import { getApi } from './API'

// //style
// import styles from "./Main.module.css"

//components
import { Item } from './Item'
import { Nav } from './Nav'

//material
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';


export const Main = () => {

    const [info, setInfo] = useState([])

    const [search, setSearch] = useState('')
    

    useEffect( () => {
        const fetchData = async () =>{
            setInfo(await getApi());
                
        };
        fetchData();

    } ,[])

    const changeHandler = (event) => {
        setSearch(event.target.value)
    }

    const searched = info.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))


    return (
    <>
        <Container>
            <Nav input={
            <TextField  variant="outlined" label="Search Here" fullWidth color="secondary"  focused value={search} onChange={changeHandler} />

            } />

            {
                info.length ?
                <div>
                {searched.map(detail => <Item key={detail.id} data ={detail} />)}
                </div>
                :
                <h1 style={{color:"#fefefe"}} >Loading . . . </h1>
            }
        
        </Container>
    </>    
    )

}
