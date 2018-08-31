import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import './FeedStyles.css';

const styles = theme => ({
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    imgFullHeight:{
        height: 5
    }
  });


class FeedTile extends React.Component{

    state ={
        isFavorite:false,
        isHover: false
    };

    onFavorite = () => {
        this.setState(prevSate =>({
            isFavorite: !prevSate.isFavorite
        }));
    }

    

    onHover = () =>{
        this.setState({isHover: true})
    }

    onUnhover = () => {
        this.setState({isHover: false})
    }

    displayFavorite = () =>{
        if(!this.state.isFavorite){
            return(<i className="far fa-heart feed-tile-icon"></i>);
        } else {
            return(<i className="fas fa-heart feed-tile-icon"></i>);
        }
    }

    displayIcon = () => {
        if(this.state.isHover){
            return(<GridListTileBar
                classes={{
                  root: this.props.classes.titleBar,
                  title: this.props.classes.title,
                }}
                actionIcon={
                  <IconButton onClick={this.onFavorite}>
                  {this.displayFavorite()}
                  </IconButton>
                }/>)
        }
    }

    render(){
        const { classes, tile } = this.props;
        return(
        <GridListTile key={tile.img}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.onUnhover}>
                  <div className="feed-tile-img-frame">
                  <img className="feed-tile-img" src={tile.img} alt={tile.title} />
                  </div>
                  {this.displayIcon()}
                </GridListTile>)
    }
}

FeedTile.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(FeedTile);
