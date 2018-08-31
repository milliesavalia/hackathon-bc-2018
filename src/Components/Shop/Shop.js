import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainMenu from '../Shared/MainMenu';
import ProductsJson from '../Shared/ProductsJson'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import FeedTile from './FeedTile';

import './ShopStyle.css';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
        height: 140,
        width: 200
        }
  });

class Shop extends React.Component{

	 constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            app: props.app,
            items: null,
            spacing: 16
        }
    }

	componentDidMount(){
		this.setState({
			items: ProductsJson
		})
		console.log("shop this........", ProductsJson)
	}

	products = () => {
        console.log("From products: ", this.state.items);

        if (this.state.items){
            const { spacing } = this.state;
            const {classes} = this.props;
            return(
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                            {this.state.items.products.map(value => (
                                <Grid key={value} item>
                                    <div className="paper-frame">
                                    <Paper className="shop-paper">
                                        <Link to='/purchaseView'>
                                            <img  className="paper-img" src={value.img} width='auto' height='80%'/>
                                        </Link>
                                    </Paper>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                )

        }
	}
	render(){
		return (
				<div>
					<MainMenu />

					{this.products()}
                </div>
		)
	}
}

// export default Shop;
 export default withStyles(styles)(Shop);