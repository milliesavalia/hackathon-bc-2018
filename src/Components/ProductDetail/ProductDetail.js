import React from 'react';
import Button from '@material-ui/core/Button';

import ProductsJson from '../Shared/ProductsJson';
import './DetailStyles.css';
import MainMenu from '../Shared/MainMenu';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: props.id,
            item: null,
            isNotified: false
        }
    }
    componentDidMount() {
        const product = ProductsJson.products.find(e => {
            if(e){
                return e.id == this.props.id;
            }
        });
        this.setState({
            isLoaded: true,
            item: product

        });
    }

    handleNotification = () => {
        this.setState({
            isNotified: true
        });
    }

    displayButton = () => {
        if(!this.state.isNotified){
            return (<Button className="action-button" 
                    variant="contained" 
                    color="primary"
                    onClick={this.handleNotification}>Notify Me</Button>)
        } else{
            return(<Button className="action-button" 
                    variant="contained" 
                    disabled
                    color="primary">Notification Sent!</Button>)
        }
        
    }

    display = () => {
        if (this.state.item) {
            const { item } = this.state;
            return (
                <div>
                    <div className="detail-image-frame">
                        <img className='detail-main-image' src={item.img} />
                    </div>
                    <div className="top-info">
                        <div className="detail-company">{item.company}</div>
                        <div className="detail-title">{item.title}</div>
                        <div className="subtitle">$ {item.price}</div>
                        {this.displayButton()}
                    </div>
                    <br/>
                    <div className="blog">
                        <div className="blog-title">
                            {item.blog.title}
                        </div>
                        <div>
                            {item.blog.content}
                        </div>
                    </div>
                </div>);
        }
    }


    // handleClick = (obj) => {
    //     console.log(obj);
    // }

    // notify = (product) => {
    //     const han
    //     return (<Button className="action-button" 
    //                     variant="contained" 
    //                     color="primary"
    //                     onClick={}>Notify Me</Button>)
    // } 

    render() {
        return (
            <div>
                <MainMenu />
                {this.display()}
            </div>);
    }
}

export default ProductDetail;