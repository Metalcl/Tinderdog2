import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { CardActionArea, CardActions, IconButton, Tooltip } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Approved = ({ perro, funcion = null, loremIpsum = null }) => {

    const path = perro.message.split("/");
    const descripcion = loremIpsum ? loremIpsum : getLoremIpsumWords();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className='card-dog' sx={{ maxWidth: 400, maxHeight: 600 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={perro?.message}
                    alt={path[4]}
                    className='img-dog'
                />
                <CardContent>
                    <Typography className='name-dog' gutterBottom variant="h4" component="div">
                        {path[4]}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='container-reactions'>
                <Tooltip title="Deshacer">
                    <IconButton className='hover-rotate' variant="outlined" onClick={() => funcion(perro)}>
                        <RotateLeftIcon className='rotate-icon' />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Ver más">
                    <IconButton
                        className="hover-expand"
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon className='expand-icon' />
                    </IconButton>
                </Tooltip>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography className='name-dog' paragraph>
                        {descripcion}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Approved;