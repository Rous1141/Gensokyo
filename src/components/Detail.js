import {useEffect,useState,useContext} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {ThemeContext} from './changeTheme.js'
import {useFormik} from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import DialogActions from '@mui/material/DialogActions';



export default function Details(){
	const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
  	const handleClose = () => {setOpen(false);};
	const {theme} = useContext(ThemeContext);
	const playerID = useParams();	console.log(playerID);
	const [APIData, setAPIData]= useState([])
	
	const url = new URL('https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps');
		url.searchParams.append('id', playerID.id); //looking for your condition: EX: id ='1'
		url.searchParams.append('page', 1); 
		url.searchParams.append('limit', 1); //Incase API conflict between '1' and '1...'
		const id = playerID.id

		const handleClickListItem = () => 
		{
    		setOpen(true);
  		};

	const fetchDetail = () => {fetch(url)
		  		.then(response =>
		  		{
			      		if(!response.ok)
			      		{
			          		throw new Error(`HTTP Status:${response.status}`)
						}
		      		return response.json()
				}
				)            
				  .then(playerInfo => {setAPIData(playerInfo)})
				  .catch(error => console.log(error.message))
		}

	useEffect(() =>{
		fetchDetail();
	},[]);

	const deleteInfo = ()=>
	{
		const deleteUrl = new URL('https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps/');
		fetch(deleteUrl + id, {  method: 'DELETE'})
    	.then(response =>{
      	if(!response.ok){
          throw new Error(`HTTP Status: ${response.status}`)
      	}
      		return response.json()
    	})            
    	.then(data => {setOpenDelete(true)})
    	.catch(error => console.log(error.message));

	}
	   return(
	   		<div>
	   			
				{APIData.map(playerInfo=>(
		        <Grid item md={1}>
		        <Card className='cardDetail' sx={{background:theme.background,color:theme.color,borderColor:theme.borderColor}}>
		        <div className='image' style={{borderColor:theme.borderColor}}>
		      	<CardMedia
		        component="img"
		        image={playerInfo.image}
		        alt={playerInfo.name}/>
		        </div>
		        <div className='content'>
		      	<CardContent className=''>
		        <div className='h1'>
		          {playerInfo.name}
		        </div>
		        <div className='info'style={{borderColor:theme.borderColor}}>
		        <Typography variant="body1" color="" className='page'>
		        Faction: {playerInfo.faction}
		          </Typography>
		          <Typography variant="body1" color="" className='page'>
		        Class: {playerInfo.role}
		          </Typography>
		          <Typography variant="body1" color="" className='page'>
		        Spell Card: {playerInfo.spell}
		          </Typography>
		          <Typography variant="body1" color="" className='page'>
		        Power Level: {playerInfo.rating}
		        </Typography>
		        </div>
		      </CardContent>
		      <div className ='extraDetail' style={{borderColor:theme.borderColor}}>
		        	{playerInfo.detail}
		      </div>
		      </div>
		      <div className ='updateButton'>
		      <Button className='buttonEx'variant="contained" size="normal"><Link to={`../updatePlayers/${playerInfo.id}`}>Update Character Info</Link></Button>
		    	</div>	
		    	<div className ='deleteButton'>
		      <Button onClick={handleClickListItem} className='buttonEx'variant="contained" size="normal" type='submit'>Delete Character!</Button>
		    	</div>	
		    	</Card> 
		    	</Grid>
           		))}
           		
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
      {"Delete Confirmation"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
    <AlertTitle>Are You Sure You Want To Delete This Character?</AlertTitle>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={deleteInfo}>Yes</Button>
      <Button autoFocus onClick={handleClose}>
       No
      </Button>
    </DialogActions>
  	</Dialog>

  	<Dialog
    open={openDelete}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
      
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      <Alert severity="success">
    <AlertTitle>Deletion Complete</AlertTitle>
    </Alert>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button><Link to='/' style={{textDecoration:"none"}}>Return To Home Page</Link></Button>
    </DialogActions>
  	</Dialog>
			</div>
	   );
}