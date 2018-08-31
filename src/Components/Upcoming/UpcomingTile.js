import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './UpcomingStyles.css';

const styles = theme => ({
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    imgFullHeight:{
        height: 5
    }
  });


class UpcomingTile extends React.Component{

    state ={
        isNotify: false,
        isHover: false,
    };

    notify = () => toast( 'Product launches in 48 hours! Dont miss it!!', {autoClose: false});

    onNotify = () => {
        this.setState(prevSate =>({
            isNotify: !prevSate.isNotify
        }));
    }


    onHover = () =>{
        this.setState({isHover: true})
    }

    onUnhover = () => {
        this.setState({isHover: false})
    }

    displayNotification = () => {
        if(this.state.isHover){
            return (
              <div>
                <Button variant="contained" className="notify-button" onClick={this.notify}> Notify Me </Button>
                <ToastContainer />
              </div>
            );
        }
    }

    render(){
        const { classes, tile } = this.props;
        return(
        <GridListTile key={tile.img} className="tile"
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.onUnhover}>
                  <div className="tile-wrapper">
                    <img className="upcoming-tile-img" src={tile.img} />
                    <div className="wrapper">
                        <strong className="tile-title">
                          {tile.title} 
                        </strong>
                    </div>
                    <span className="wrapper-button">
                      {this.displayNotification()}
                    </span>
                  </div>
                </GridListTile>)
    }
}

UpcomingTile.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(UpcomingTile);
