import React,{Component} from "react";
import DeliveryListItem from "./DeliveryListItem";


let path = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
const APIDELIVERY = path + '/api/transport/';

class DeliveryList extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.loadDelivery();
    }

    loadDelivery = () => {
        fetch(APIDELIVERY)
            .then(response => response.json())
            .then(data => this.props.deliveryListChangeHandler(data))
            .then(() => this.props.loadingChangeHandler(false));
    };

    deliveryList = () => {
        return this.props.deliveryList.map( (deliveryItem) => {
            return (
                <DeliveryListItem
                    id={deliveryItem.id}
                    name={deliveryItem.nazev}
                    price={deliveryItem.cena}
                />
            );
        })
    };

    render() {
        return (
            <div>
                <h2>Delivery list</h2>
                {this.deliveryList()}
            </div>
        )
    }
}

export default DeliveryList
