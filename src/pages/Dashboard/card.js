import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {CardActionArea} from "@mui/material";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
let colorCard = {green : '#a2cf6e', yellow : '#ffeb3b', blue : '#03a9f4', red: '#ed4b82'};
export default function BasicCard(props) {
    const severitiesCorresponds={
        1 : '#a2cf6e',
        2 : '#03a9f4',
        3 : '#ffeb3b',
        4 : '#ed4b82'
    }
    return (

        <Card sx={{ width: '20%' , margin: '20px' , backgroundColor : severitiesCorresponds[props.severity]}}>
            <CardContent className={"p-0"} sx={{ display: 'flex' , flexDirection:'column', justifyContent : 'center', backgroundColor : '#ffffff'}}>
                <CardActionArea onClick={()=>{
                    props.changeTitle(props.name);
                    props.changeData()
                }} style={{padding : "2rem"}}>
                    {/*<Typography sx={{ fontSize: 14 , textAlign: 'center' }} color="text.secondary" gutterBottom>*/}
                    {/*    Word of the Day*/}
                    {/*</Typography>*/}
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' , color : severitiesCorresponds[props.severity]  }} >
                        <br/>
                        {props.name}
                    </Typography>
                    {/*<Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
                    {/*    adjective*/}
                    {/*</Typography>*/}
                    <Typography variant="body2" sx={{ textAlign: 'center' , color :  severitiesCorresponds[props.severity] }} >
                        {props.info}
                    </Typography>
                </CardActionArea>
            </CardContent>
            <CardActions sx={{ display: 'flex' , flexDirection:'column', justifyContent : 'center'}}>
                <Button size="small"  >
                    <Link style={{color : "white"}} to={props.link}>
                        Afficher Plus &gt;&gt;
                    </Link>
                    {/*<Typography style={{color : "white"}}  sx={{ textAlign: 'center' }} >*/}
                    {/*    Afficher Plus &gt;&gt;*/}
                    {/*</Typography>*/}
                </Button>
            </CardActions>
        </Card>
    );
}

BasicCard.propTypes = {
    name : PropTypes.any,
    info: PropTypes.any,
    link : PropTypes.any
};
