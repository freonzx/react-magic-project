import React from 'react'
import { Grid, Paper, Typography, List, ListItem, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core/'
import CheckIcon from '@material-ui/icons/Check';

const CardList = (props) => {

	const handleAdd = (item) => {
		props.addToDeck(item)
	}

    return (<Grid container direction="row" spacing={24} justify="center" alignContent="center">
			<Grid item xs={12} align="center">
				<Typography variant="h6" style={{marginTop: "15px", display: "blick"}}>
					{props.total > 0 ? <p>Found {props.total} results.</p> : null}
				</Typography>
			</Grid>
				{props.data.map((item, i) => (
					
				<Grid item sm={12} md={6} lg={3} xs={3} >
					<Card>
	                <CardMedia style={{ height: 0, paddingTop: '150%'}}
	                    image={item.image_uris ? item.image_uris['normal'] : item.card_faces[0]['image_uris']['normal']}
	                    title={item.name}
	                    />
	                <CardContent>
	                    <Typography gutterBottom variant="headline" component="h2">
	                        {item.type_line}
	                    </Typography>
	                    <Typography component="p">
	                        {item.oracle_text}
	                    </Typography>
	                </CardContent>
	                <CardActions>
	                    <Button size="small" variant= "outlined" color="primary" onClick={() => handleAdd(item)}>
	                        Add To Deck
	                    </Button>
	                    <Button size="small" variant="outlined" color="primary" href={item.scryfall_uri } target="_blank">
	                    	More Ifo
	                    </Button>

	                    {props.deck.includes(item) ? <CheckIcon style={{color: "green"}} /> : '' }
	                </CardActions>
					</Card>
				</Grid>
				))}
			</Grid>)
}

export default CardList;