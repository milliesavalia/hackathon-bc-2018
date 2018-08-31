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

import FeedTile from './FeedTile';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      textAlign: "center"
    },
  });


class Feed extends React.Component {

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

        console.log("feed: ", ProductsJson);
    }
    
    products = () => {

        console.log("from products: ", this.state.items);

        const {classes } = this.props;
        
        if(this.state.items){
            return( <div className={classes.root}>
                <GridList cellHeight={180} className="grid-list-feed">
                  {this.state.items.products.map(tile => (
                    <FeedTile tile={tile} classes={classes}/>
                  ))}
                </GridList>
              </div>)
        }
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
                
                {this.products()}
            </div>
        );
    }
}

Feed.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Feed);