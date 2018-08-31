import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import Loading from '../Shared/Loading';
import MainMenu from '../Shared/MainMenu';
import ProductsJson from '../Shared/ProductsJson';

import UpcomingTile from './UpcomingTile';

import './UpcomingStyles.css';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  });


class Upcoming extends React.Component {

    provider = null;
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            app: props.app,
            items: null
        }
    }

    componentDidMount() {    
        this.setState({
            isLoaded: true,
            items: ProductsJson
        });

        console.log("Upcoming: ", ProductsJson);
    }
    
    products = () => {
        const {classes } = this.props;
        return( 
        	<div className={classes.root}>
            	<GridList cellHeight={90} className={classes.gridList}>
              		{this.state.items.upcoming.map(tile => (
                  		<UpcomingTile tile={tile} classes={classes}/>))}
            	</GridList>
          	</div>)
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (<h1>There shouldn't be any errors</h1>);
        } else if (!isLoaded) {
            return (<Loading />);
        }
        return (
            <div>
                <MainMenu />
                <div className="launch-date">Aug 15</div>
                {this.products()}
            </div>
        );
    }
}

Upcoming.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Upcoming);