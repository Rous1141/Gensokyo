import {useEffect,useState,useContext} from 'react'
import {ThemeContext} from './changeTheme.js';        
import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';



export default function Players() {
	  const {theme} = useContext(ThemeContext);
const [APIData, setAPIData]= useState([])
const baseURL= new URL ('https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps');
	  baseURL.searchParams.append('sortBy', 'faction');
	
		useEffect(() =>	{fetch(baseURL)
		  		.then(response =>
		  		{
			      		if(!response.ok)
			      		{
			          		throw new Error(`HTTP Status:${response.status}`)
						}
		      		return response.json()
				}
				)            
				  .then(data => {setAPIData(data)})
				  .catch(error => console.log(error.message))
		},[]);

		return (
			<div >

		{APIData.map((data)=>
			(
		        <Grid item md={4}>
		        <Card className='card' sx={{background:theme.background,color:theme.color,borderColor:theme.borderColor}}>
		        <div className='image' style={{borderColor:theme.borderColor}}>
		      	<CardMedia 
		        component="img"
		        height="100%"
		        width="100%"
		        image={data.image}
		        alt={data.name}
		        />
		        </div> 
		        <div className='content'>
		      	<CardContent>
		        <Typography gutterBottom variant="h5" component="div">
		          {data.name}
		        </Typography>
		        <Typography variant="body2">
		        {data.role}
		        </Typography>
		      </CardContent>
		      
		      <div className ='extraDetail'>
			        <Button className='buttonEx'variant="contained" size="normal"> 
			        <Link to={`factionDetails/${data.faction}`}>Faction: {data.faction}</Link></Button>
		      </div>  
		      
		      <div className ='extraDetail'>
		        	<Button className='buttonEx'variant="contained" size="normal"><Link to={`Detail/${data.id}`}>Personal Detail</Link></Button>
		      </div>

		      </div>
		    	</Card> 
		    	</Grid>
            ))}


			</div>
		);	
}

