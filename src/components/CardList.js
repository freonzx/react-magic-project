import React from 'react'
import { Grid, Paper, Typography, List, ListItem, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core/'

const CardList = (props) => {

    return (<Grid container direction="row" spacing={24} justify="center" alignContent="center">
			<Grid item xs={12} align="center">
				<Typography variant="h6" style={{marginTop: "15px", display: "blick"}}>
					Found {props.total} results.
				</Typography>
			</Grid>

			{/*<List>*/}
				{props.data.map(item => (
						// <Paper style={{padding: "20px", margin: "20px"}} >
						// 		<Typography align="center" variant="h4">
						// 		<a href={item.scryfall_uri}>{item.name}</a>
						// 		</Typography>
						// <ListItem key="{item.mtgo_id}">
							
						// 	<Grid container >

						// 	<Grid item xs={4} align="center" >
						// 		<a href={item.scryfall_uri}>
						// 		<img className='card-image' src={ item.image_uris ? item.image_uris['normal'] : item.card_faces[0]['image_uris']['normal']} />
						// 		</a>
						// 	</Grid>

						// 	<Grid item xs={8} style={{marginTop: "20px"}} >
						// 		<Typography style={{display: 'inline-block'}} variant="h6">Type:</Typography> {item.type_line}

						// 		<p align="left">{item.oracle_text}</p>
						// 	</Grid>

						// 	</Grid>
						// </ListItem>
						// </Paper>
			<Grid item xs={3} >

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
	                        <Button size="small" variant= "outlined" color="primary" href={item.scryfall_uri} target="_blank">
	                            Add To Deck
	                        </Button> 
	                    </CardActions>
						</Card>
			</Grid>
					))}
			{/*</List>*/}

			</Grid>)
}

export default CardList;