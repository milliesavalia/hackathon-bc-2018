import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainMenu from '../Shared/MainMenu';

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

class PurchaseView extends Component{
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
    render(){
        return(
            <div>
              <MainMenu />
              {this.products}
              console.log("This is the purchase view!")

            </div>
        )
    }
}

export default withStyles(styles)(PurchaseView);