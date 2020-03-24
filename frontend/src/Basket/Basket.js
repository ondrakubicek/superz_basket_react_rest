import React from 'react';
import Theme from './../Theme/Theme';
import ErrorHandler from './../ErrorHandler/ErrorHandler';
import StepSwitcher from './Components/StepSwitcher/StepSwitcher';
import BasketSteps from "./BasketSteps/BasketSteps";
import BasketItemList from "./Step1/BasketItemList";
import Loader from "../Components/Loader";




let path = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
const APIBASKET = path + '/api/basket/'

class Basket extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			basket: [],
			coupon: false,
			loading: true,
			deliveryList: [],
		}
	};

	componentDidMount() {
		this.loadBasket();
	}

	changeStepHandler = (step) => {
		this.setState({step:step})
	}

	changeBasketEmptyHandler = (value) => {
		this.setState({basketEmpty: true})
	}

	loadBasket = () => {
		this.setState({loading: true});
		fetch(APIBASKET)
			.then(response => response.json())
			.then(data => this.setState({basket: data, loading: false}));
	};

	basketChangeHandler = (basket) => {
		this.setState({basket: basket});
	}
	deliveryListChangeHandler = (deliveryList) => {
		this.setState({deliveryList: deliveryList});
	}

	couponChangeHandler = (item) => {
		this.setState({coupon: item});
	}

	loadingChangeHandler = (loading) => {
		this.setState({loading: loading});
	}

	render() {
		let switcher =<StepSwitcher step={this.state.step} changeStepHandler={(step) => this.changeStepHandler(step)} />
		let loader = <Loader show={this.state.loading}/>;
		let basketSteps = <BasketSteps
				isBasketEmpty={this.state.basketEmpty}
				step={this.state.step}
				changeStepHandler={(step) => this.changeStepHandler(step)}
				errorHandler={(error) => this.errorHandler(error)}
				basket={this.state.basket}
				coupon={this.state.coupon}
				basketChangeHandler={(basket) => this.basketChangeHandler(basket)}
				couponChangeHandler={(coupon) => this.couponChangeHandler(coupon)}
				loadingChangeHandler={(loading) => this.loadingChangeHandler(loading)}
				deliveryList={this.state.deliveryList}
				deliveryListChangeHandler={(loading) => this.deliveryListChangeHandler(loading)}
			/>

		return (
			<Theme>
				{switcher}
				{loader}
				{(!this.state.loading) ? basketSteps : "" }
			</Theme>
		)
	}
}

export default Basket;
