
import {ThemeContext} from './changeTheme'
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Contacts(){
	const {theme} = useContext(ThemeContext);
		return (
			<>
			<div className='contactPage'style={{transition: theme.transition,background:theme.background,border:'solid',borderColor:theme.borderColor}}>
			<form className="form" style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}}>
				<p className="title">Paticipate In Our Newsletter!</p>
				<div>
				<lable for="email">Email: </lable>
				<input className="email" type="text" id="email" name="email" placeholder="Email..."></input>
				</div><div>
				<lable for="first">First Name:</lable>
				<input className="yourname" type="text" id="first" name="name" placeholder="First Name..."></input>
				<lable for="last">Last Name:</lable>
				<input className="yourname" type="text" id="last" name="name" placeholder="Last Name..."></input>
				</div><div>
				<lable for="address">Address:</lable>
				<input className="address" type="text" id="address" name="address" placeholder="Address..."></input>
				</div>
				<input className="submit" type="submit" value="Submit!"  style={{borderColor: theme.borderColor,color: theme.color,backgroundColor: theme.backgroundColor}}></input>
			</form>

			<div className='contactDetails'>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://discord.com/"target="_blank"><h4>BECOME A MEMBER</h4><img  className='link' src='https://gamepress.gg/lostword/sites/lostword/files/2022-07/339_StoryCard.png'></img></a></div>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://moriyashrine.org/"target="_blank"><h4>FORUM</h4><img className='link' src='https://gamepress.gg/lostword/sites/lostword/files/story_cards/0004_%E2%98%865_Lively%20Temple%20Grounds.png'></img></a></div>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://www.reddit.com/r/2hujerk/"target="_blank"><h4>REDDIT</h4><img className='link' src='https://gamepress.gg/lostword/sites/lostword/files/story_cards/0096_%E2%98%863_Suzunaan.png'></img></a></div>
				<div style={{ borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color,transition: theme.transition}} className="box"><a href="https://www.patreon.com/" target="_blank"><h4>SUPPORT US</h4><img className='link' src='https://gamepress.gg/lostword/sites/lostword/files/story_cards/0054_%E2%98%864_The%20Usual%20Offering%20Box.png'></img></a></div>
	    	</div>
			</div>
			<div class="footer" style={{transition: theme.transition, borderColor: theme.borderColor,backgroundColor: theme.backgroundColor, color: theme.color }}>
				<div className ='aboutButton'>
		        	<Button className='buttonEx'variant="outlined" size="normal" sx={{borderColor:theme.borderColor,color:theme.color}}><Link to={`/About`}>About Us</Link></Button>
		      	</div>
				<footer>All Rights Reserved @By Annie-BHX</footer>
			</div>
			</>
			
		)
	
}