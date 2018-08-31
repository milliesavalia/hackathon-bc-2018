import React from 'react';
import { withRouter } from 'react-router';

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
    imgFullHeight: {
        height: 5
    }
});


class FeedTile extends React.Component {

    state = {
        isFavorite: false,
        isHover: false
    };

    onFavorite = () => {
        this.setState(prevSate => ({
            isFavorite: !prevSate.isFavorite
        }));
    }

    displayFavorite = () => {
        if (!this.state.isFavorite) {
            return (
            <IconButton className="feed-tile-icon inactive"
            onClick={this.onFavorite}>
            <i className="far fa-heart favorite-icon"></i>
            </IconButton>);
        } else {
            return (
                <IconButton className="feed-tile-icon active"
                onClick={this.onFavorite}>
                <i className="fas fa-heart favorite-icon"></i>
                </IconButton>);
        }
    }

    displaySocial = () => {
        return (<IconButton className="feed-tile-icon inactive">
           <i className="fas fa-share-alt social-icon"></i>
        </IconButton>);
    }

    handleImageClick = () => {
        window.location.href=this.props.tile.url;
    }

    render() {
        const { classes, tile } = this.props;
        return (
            <div className="feed-tile-frame">
                <GridListTile className="feed-tile" key={tile.id}>
                    <div className="feed-tile-img-frame">
                        <img className="feed-tile-img" 
                             src={tile.img} alt={tile.title} 
                             onClick={this.handleImageClick}/>
                        <div className="feed-tile-icon">
                <div className="tile-icons">
                {this.displaySocial()}
                {this.displayFavorite()}
                </div>
            </div>
                    </div>
                </GridListTile>
                <div className='feed-tile-info'>
                  <div className='tile-company'>{tile.company}</div>
                   <div className='tile-title'>{tile.title}</div>
                </div>
            </div>)
    }
}

FeedTile.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object
};


export default withRouter(FeedTile);
