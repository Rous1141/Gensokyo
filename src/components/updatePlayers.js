import {useState,useContext} from 'react';
import {ThemeContext} from './changeTheme.js';
import {useFormik} from 'formik';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import * as Yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import DialogActions from '@mui/material/DialogActions';

export default function AddPlayers() 
{
  const [open, setOpen] = useState(false);
  const handleClose = () => {setOpen(false);};
   const {theme} = useContext(ThemeContext);
   const playerID = useParams(); console.log(playerID);
   const id = playerID.id;
  const url = new URL('https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps/');
  
  const [name,setName] = useState("");
  const [faction,setFaction] = useState("");
  const [role,setRole] = useState("");
  const [spell,setSpell] = useState("");
  const [detail,setDetail] = useState("");
  const [image,setImage] = useState("");
  const [rating,setRating] = useState("");
  const [active,setActive] = useState(true);

    fetch(url+id)
          .then(response =>
          {
                if(!response.ok)
                {
                    throw new Error(`HTTP Status:${response.status}`)
            }
              return response.json()
        }
        )            
          .then(data => {setName(data.name);setFaction(data.faction);setRole(data.role);setSpell(data.spell);setDetail(data.detail);setRating(data.rating);setImage(data.image);setActive(data.active)})
          .catch(error => console.log(error.message))
    


  const formik = useFormik({
    validateOnChange:false,
    validateOnBlur:false,
     enableReinitialize: true,
  initialValues:{
    name: name,
    faction: faction,
    role:role,
    spell:spell,
    detail:detail,
    image:image,
    rating:rating,
    active:active,
},
onSubmit: (values)=>{
    fetch(url + id, {  method: 'PUT',
    body: JSON.stringify(values),  headers: {
    'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
    }).then(response =>{
      if(!response.ok){
          throw new Error(`HTTP Status: ${response.status}`)
      }
      return response.json()
    })            
    .then(data => setOpen(true))
    .catch(error => console.log(error.message));
},
validationSchema: Yup.object({
    name: Yup.string().required("Must be 3 characters or more").min(3, "Must be 3 characters or more"),
    faction: Yup.string().required("Must be 3 characters or more").min(3, "Must be 3 characters or more"),
    role: Yup.string().required("Must be 5 characters or more").min(5, "Must be 5 characters or more"),
    rating: Yup.number().integer().typeError("Please type a number."),
    detail: Yup.string().required("Must be 10 characters or more.").min(10, "Must be 10 characters or more"),
    spell: Yup.string().required("Must be 10 characters or more.").min(10, "Must be 10 characters or more"),
    image: Yup.string().required("Must be 10 characters or more.").min(10, "Must be 10 characters or more"),
}),
});

  return (
      <div className='container'style={{background:'rgba(179, 179, 179, 0.8)',borderColor:theme.borderColor}}>
      <h2 className='title' style={{borderColor:theme.borderColor}}>Update Charater Info</h2>
      <form onSubmit={formik.handleSubmit} sx={{color:theme.color}}>
        <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.name}
              onChange={formik.handleChange}
            />
          {(<Typography variant="body2" color="red">{formik.errors.name}</Typography>)}
          <TextField
            margin="dense"
            name="faction"
            label="Faction"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.faction}
            onChange={formik.handleChange}
          />
          {formik.errors.faction && (<Typography variant="body2" color="red">{formik.errors.faction}</Typography>)}
          <TextField
            margin="dense"
               name="role"
            label="Role"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.role}
              onChange={formik.handleChange}
          />
          {formik.errors.role && (<Typography variant="body2" color="red">{formik.errors.role}</Typography>)}
          <TextField
            margin="dense"
            name="image"
            label="URL of image"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.image}
              onChange={formik.handleChange}
          />
          {formik.errors.image && (<Typography variant="body2" color="red">{formik.errors.image}</Typography>)}
          <TextField
            margin="dense"
            name="rating"
            label="Power Level"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.rating}
              onChange={formik.handleChange}
          />
          {formik.errors.rating && (<Typography variant="body2" color="red">{formik.errors.rating}</Typography>)}
          <TextField
            margin="dense"
            name="spell"
            label="Most Used Spell Card"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.spell}
              onChange={formik.handleChange}
          />
          {formik.errors.spell && (<Typography variant="body2" color="red">{formik.errors.spell}</Typography>)}
          <TextField
            multiline
            rows={2}
            margin="dense"
            name="detail"
            label="Character Information"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.detail}
              onChange={formik.handleChange}
          />
          {formik.errors.detail && (<Typography variant="body2" color="red" display="block">{formik.errors.detail}</Typography>)}
          <div className='buttonEnd'>
          <FormControlLabel control={<Switch/>}
          label="Active" name='active'/>
          <Button className='buttonSubmit' variant="contained" size="large"  type='submit' sx={{background:'red'}}>Welcome Them To The Bullethell!</Button>
          </div>
        </form>
    
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
      {"Congraturation"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      <Alert severity="success">
    <AlertTitle>Updating successful!</AlertTitle>
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