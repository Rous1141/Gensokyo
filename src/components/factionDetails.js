import {useEffect,useState,useContext} from 'react'
import {ThemeContext} from './changeTheme.js';       
import { useParams } from 'react-router-dom'; 
import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';



export default function Factions() {
	const {theme} = useContext(ThemeContext);
	const factionName = useParams();	console.log(factionName);
	const [APIData, setAPIData]= useState([])
	const url= new URL ('https://64abc0e79edb4181202e7649.mockapi.io/factions');
		url.searchParams.append('name', factionName.faction); //looking for your condition: EX: faction ='human'
		url.searchParams.append('page', 1); 
		url.searchParams.append('limit', 1); //Incase API conflict between '1' and '1...'
	
		useEffect(() =>	{fetch(url)
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
		        <Grid item md={1}>
		        <Card className='cardDetail' sx={{background:theme.background,color:theme.color,borderColor:theme.borderColor}}>
		        <div className='image' style={{borderColor:theme.borderColor}}>
		      	<CardMedia
		        component="img"
		        image={data.image}
		        alt={data.name}/>
		        </div>
		        <div className='content'>
		      	<CardContent className=''>
		        <div className='h1'>
		          {data.name}
		        </div>
		      </CardContent>
		      <div className ='extraDetail' style={{borderColor:theme.borderColor}}>
		        	{data.detail}
		      </div>
		      </div>
		    	</Card> 
		    	</Grid>
            ))}	
			</div>
		);	
}

