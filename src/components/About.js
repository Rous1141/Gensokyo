import {ThemeContext} from './changeTheme'
import React, {useContext} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlbumIcon from '@mui/icons-material/Album';
import WhatshotIcon from '@mui/icons-material/Whatshot';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AboutUs() {
  const {theme} = useContext(ThemeContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='contactPage'style={{transition: theme.transition,background:theme.background,border:'solid',borderColor:theme.borderColor}}>
    <Card className ='aboutCard' sx={{border:'solid',borderColor:theme.borderColor}}>
      <CardMedia
        component="img"
        height="250"
        image="https://gamepress.gg/lostword/sites/lostword/files/story_cards/0044_%E2%98%864_Behind%20the%20Firepower.png"
        alt="Paella dish"
      />
      <CardContent sx={{color:theme.color,backgroundColor:theme.backgroundColor}}>
        <Typography variant="body2" color="">
          We Are Touhou Project Fanatics That Love To Immerse Ourselves Into The Diverse World Of Gensokyo, And Wish Nothing More Than To Introduce Folks Into This Endeavor.
          This Project Is Aimed To Show You The Current State Of Gensokyo And Its People and Factions That Mainstayed In This Fantasy World
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{color:theme.color,backgroundColor:theme.backgroundColor}}>
        <IconButton>
          <AlbumIcon sx={{color:theme.color,backgroundColor:theme.backgroundColor}}/>
        </IconButton>
        <IconButton>
          <WhatshotIcon sx={{color:theme.color,backgroundColor:theme.backgroundColor}}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{color:theme.color,backgroundColor:theme.backgroundColor}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{color:theme.color,backgroundColor:theme.backgroundColor}}>
          <Typography paragraph sx={{borderTop:'solid',borderColor:theme.borderColor}}>About Gensokyo:</Typography>
          <Typography paragraph>
            Gensokyo was originally a desolate, haunted region of Japan ages ago. The youkai that lived there began to terrorize the surrounding lands, because of this, powerful and heroic humans were sent to exorcise and exterminate them. As time passed, the technology and population of humans increased greatly, which lead to an increase in human influence. Due to this, Yukari Yakumo implemented a plan roughly 500 years ago to restore the power of youkai in Gensokyo by creating a "Barrier that divides Reality and Fantasy" (the plan was called "妖怪拡張計画, "Youkai Expansion Project"). From that day, Gensokyo became a place where it brought in things that have become fantasy outside; in other words, things that were forgotten in the Outside World such as youkai, lost items, and such are transported into Gensokyo.[1] It's said that it's hard for things that have become fantasy to leave Gensokyo, but beings that are powerful enough possesses the ability to leave Gensokyo at their will. In 1885 A.D., Gensokyo was sealed off from the increasingly scientific world once again with the creation of a second barrier, which was called the Great Hakurei Barrier. There has been little contact with the outside world ever since. It's known that the language spoken in Gensokyo is modern Japanese. Gensokyo is populated by youkai, humans, and animals. Some of its inhabitants went there to hide, to escape, to find shelter when no-one and nowhere else would accept them. Many of them just like the natural darkness.
          </Typography>
          <Typography paragraph sx={{borderTop:'solid',borderColor:theme.borderColor}}>
            About The Factions In Gensokyo:
          </Typography>
          <Typography paragraph>
            This game features eight playable characters, with four starting preset teams of two and unlockable individual character modes. When playing with the character pairs, one character fires when unfocused, while the other switches in and fires when focused, with a reduction in movement speed. The two shot types can be drastically different. The individual characters, with the exception of Remilia and Youmu, do not change shot types while focusing/unfocusing.
Imperishable Night features Last Spells. For the enemy, a Last Spell is a bonus Spell Card which the player can challenge without the option to use bombs and without the risk of losing lives. On the player side, Last Spells are secondary "bomb" Spell Cards, which last longer and do much more damage than normal bombs at the expense of two bomb stocks. Player Last Spells can only be used immediately after being hit, with a grace period of less than 1 second.
          </Typography>
          <Typography sx={{borderTop:'solid',borderColor:theme.borderColor}}>
            That's All The Basic Information You Need To Know About The Project Touhou As A Whole. For More Information Or The Wikipedia On The Series (Including: Offical Games, Mangas, Artworks, Fan-made Series, etc.), Please Join Our Community Forum Or The Fan Sub-reddit That Has Dedicated Themselves To Expand The Lore Of Gensokyo!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}