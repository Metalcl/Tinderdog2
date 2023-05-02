import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActions, IconButton, Tooltip } from '@mui/material';

const DogCard = ({ perro, funcion = null, funcion2 = null, loremIpsum = null }) => {

    const path = perro.message.split("/");
    const descripcion = loremIpsum ? loremIpsum : getLoremIpsumWords();

    return (
        <Card className='card-dog' variant="outlined" sx={{ maxWidth: 400, maxHeight: 600 }}>
            <CardMedia
                component="img"
                image={perro?.message}
                alt={path[4]}
                className='img-dog'
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" className='name-dog'>
                    {path[4]}
                </Typography>
                <p className=''>
                    {descripcion}
                </p>
            </CardContent>
            <CardActions className='container-reactions'>
                <Tooltip title="Aceptar">
                    <IconButton className="hover-favorite" variant="outlined" onClick={() => funcion2(perro)}>
                        <FavoriteIcon className='favorite-icon'/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Rechazar" className=''>
                    <IconButton className="hover-heartbroken" variant="outlined" onClick={() => funcion(perro)}>
                        <HeartBrokenIcon className='heartbroken-icon'/>
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default DogCard;
