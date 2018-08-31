import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
	checkoutHeader: {
		borderBottom: "1px solid grey"
	},
	checkoutOptions: {
		textAlign: 'center',
		verticalAlign: 'middle',
		lineHeight: '50px'
	}
});


class Checkout extends Component {
	constructor(props) {
		super(props);
		this.checkoutDisplayModes = {
			default: "default",
			creditCard: "creditCard",
			apple: "apple"
		}

		this.state = {
			checkoutDisplayMode: this.checkoutDisplayModes.default
		}
	}

	changeCheckoutDisplay = (newDisplayMode) => {
		this.setState({
			checkoutDisplayMode: newDisplayMode
		});
	}

	getCheckoutDisplay = () => {
		if (this.state.checkoutDisplayMode == this.checkoutDisplayModes.creditCard) {
			return (
				<div>
					Checking out with Credit Card<br />
					<br />
					<br />
					Credit card number:<br />
					<input type='text' /><br />
					CCV:<br />
					<input type='text' /><br />
					Name on Card:<br />
					<input type="text" /><br />
					<br />
					<br />
					<div>
						Total: $47<br />
						<Popup trigger={<button>Complete Purchase</button>} modal>
							Your purchase is complete.<br />
							Congratulations!
						</Popup>
					</div>
				</div>
			);
		} else if (this.state.checkoutDisplayMode == this.checkoutDisplayModes.apple) {
			return (
				<div>
					Checking out with ApplePay
					<br />
					<br />
					Pay with touch ID to continue
					<br />
					<br />
					<div>
						Total: $47<br />
						<Popup trigger={<button>Use Touch ID</button>} modal>
							Your purchase is complete.<br />
							Congratulations!
						</Popup>
					</div>
				</div>
			);
		} else {
			return (
				<div>Please select a payment method to continue</div>
			);
		}
	}

	render() {
		const { classes, product } = this.props;
		return (
			<div>
				<div className={classes.checkoutHeader}>
					<GridList cellHeight={50}>
						<GridListTile>
							<div className={classes.checkoutOptions}>
								<button onClick={() => this.changeCheckoutDisplay(this.checkoutDisplayModes.creditCard)}>Checkout with a Credit Card!</button>
							</div>
						</GridListTile>
						<GridListTile>
							<div className={classes.checkoutOptions}>
								<button onClick={() => this.changeCheckoutDisplay(this.checkoutDisplayModes.apple)}>Checkout with Apple Pay!</button>
							</div>
						</GridListTile>
					</GridList>
				</div>
				<div>
					<br />
					{this.getCheckoutDisplay()}
				</div>
			</div>
		);
	}
}

Checkout.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
