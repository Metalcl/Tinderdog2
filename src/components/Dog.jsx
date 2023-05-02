import React, { useState } from 'react'
import { useQuery } from 'react-query';
import DogCard from './DogCard';
import Reject from './Reject';
import Approve from './Approve';
import Card from '@mui/material/Card';
import { CircularProgress } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActions, IconButton, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const Dog = () => {
    const [rechazados, setRechazados] = useState([]);
    const [aceptados, setAceptados] = useState([]);

    const conseguirPerritos = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        return response.json();
    }

    const Rechazados = () => {
        const ordenarRechazados = rechazados.reverse();
        setRechazados([...ordenarRechazados, data].reverse());
        refetch();
    }

    const Aceptados = () => {
        const ordenarAceptados = aceptados.reverse();
        setAceptados([...ordenarAceptados, data].reverse());
        refetch();
    }

    const OtraOportunidad = (perro) => {
        const ordenar = aceptados.reverse();
        setAceptados([...ordenar, perro].reverse());
        const moverRechazado = rechazados.filter((dog) => dog !== perro);
        setRechazados(moverRechazado);
    }

    const Arrepentimiento = (perro) => {
        const ordenar = rechazados.reverse();
        setRechazados([...ordenar, perro].reverse());
        const moverAceptado = aceptados.filter((dog) => dog !== perro);
        setAceptados(moverAceptado);
    }

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut odio et diam fermentum lacinia. Vivamus ut turpis sem. In nec bibendum velit, eget gravida nisi. Donec blandit commodo lectus, vitae hendrerit neque consequat nec. Praesent ut commodo risus. Maecenas vel dictum odio. Maecenas ut leo commodo, interdum nisl in, suscipit nulla. Fusce commodo semper sapien, sit amet lobortis nunc tempor nec. Nunc non libero non nisi ornare efficitur. Sed pharetra ligula eu lacinia bibendum. Duis vitae enim ac mauris lacinia malesuada."
    function getLoremIpsumWords() {
        const words = loremIpsum.split(' ');
        const randomWords = [];
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            randomWords.push(words[randomIndex]);
        }
        return randomWords.join('');
    }

    const { data, refetch, isRefetching, status } = useQuery("perritos", conseguirPerritos);

    return (
        <div className="container">
            <div className="dog">
                <h1 className='title'>Candidatos</h1>
                {status === "loading" || isRefetching ?
                    <Card className='card-dog' variant="outlined" sx={{ maxWidth: 400, maxHeight: 600 }}>
                        <div className='no-charge-image'>
                            <CircularProgress />
                        </div>
                        <CardContent>
                            <Typography className='name-dog' variant="h4" component="div" gutterBottom>
                                <h4 className='name-dog'>Cargando...</h4>
                            </Typography>
                            <Typography variant="body1" gutterBottom >
                                <p>Cargando la descripción del perrito</p>
                            </Typography>
                        </CardContent>
                        <CardActions className='container-reactions'>
                            <Tooltip>
                                <IconButton>
                                    <FavoriteIcon className='icons-dissable' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip >
                                <IconButton>
                                    <HeartBrokenIcon className='icons-dissable' />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                    :
                    (
                        <>
                            <DogCard perro={data} funcion={Rechazados} funcion2={Aceptados} loremIpsum={getLoremIpsumWords()} />
                        </>
                    )
                }
            </div>
            <div className="list approve">
                <h1 className='title'>Aceptados</h1>
                {
                    aceptados.length === 0 ?
                        <Card className='card-dog' variant="outlined" sx={{ maxWidth: 400, maxHeight: 600 }}>
                            <div className='no-charge-image'>
                                <img className='perrito-pre-load' src="../../public/perritoTriste.png" alt="Perrito muy triste" />
                            </div>
                            <CardContent>
                                <Typography className='name-dog' variant="h4" component="div" gutterBottom>
                                    <h4 className='name-dog'>No hay perritos</h4>
                                </Typography>
                                <Typography variant="body1" gutterBottom >
                                    <p>Aún no has aceptado ningún perrito</p>
                                </Typography>
                            </CardContent>
                            <CardActions className='container-reactions'>
                                <Tooltip>
                                    <IconButton>
                                        <RotateLeftIcon className='icons-dissable' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip >
                                    <IconButton>
                                        <ExpandMoreIcon className='icons-dissable' />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card> :
                        aceptados.map((aceptado, index) => (
                            <>
                                <Approve key={index} perro={aceptado} funcion={Arrepentimiento} loremIpsum={getLoremIpsumWords()} />
                            </>
                        ))}
            </div>
            <div className="list reject">
                <h1 className='title'>Rechazados</h1>
                {
                    rechazados.length === 0 ? <Card className='card-dog' variant="outlined" sx={{ maxWidth: 400, maxHeight: 600 }}>
                        <div className='no-charge-image'>
                            <img className='perrito-pre-load' src="../../public/perritoFeliz.png" alt="Perrito muy feliz" />
                        </div>
                        <CardContent>
                            <Typography className='name-dog' variant="h4" component="div" gutterBottom>
                                <h4 className='name-dog'>No hay perritos</h4>
                            </Typography>
                            <Typography variant="body1" gutterBottom >
                                <p>Aún no has rechazado ningún perrito</p>
                            </Typography>
                        </CardContent>
                        <CardActions className='container-reactions'>
                            <Tooltip>
                                <IconButton>
                                    <RotateLeftIcon className='icons-dissable' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip >
                                <IconButton>
                                    <ExpandMoreIcon className='icons-dissable' />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card> :
                        rechazados.map((rechazados, index) => (
                            <>
                                <Reject key={index} perro={rechazados} funcion={OtraOportunidad} loremIpsum={getLoremIpsumWords()} />
                            </>
                        ))}
            </div>
        </div>
    );
}

export default Dog;
