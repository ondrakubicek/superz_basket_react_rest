import React,{Component} from "react";
import styled from "styled-components";


let path = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
const APICOUPONE = path + '/api/coupone/';

const CouponeBoxStyled = styled.div`
    margin: -20px;
    background: #eee;
    padding: 20px;
    margin-bottom: 30px;
`;

const UserCouponeUl = styled.ul`
    padding: 0;
`;
const UserCouponeLi = styled.li`
    list-style: none;
    display: ${props => props.hide ? "none" : "flex"};
    flex-direction: column;
    margin-bottom:20px;
`;
const UserCouponCoupon = styled.span`
    display: flex;
    margin-top: 5px;
    span {
        flex: 1;
    }
`;
const UserCouponCouponValue = styled.span`
    display: block;
`;

const AplyCouponeButton = styled.button`
    border: none;
    background: darkseagreen;
    padding: 3px 5px;
    color: #fff;
    border-radius: 3px;
`;
const CouponeInputBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const CouponeInput = styled.input`
    border: none;
    background: #fff;
    pading: 3px 5px;
    font-size: 1.2em;
    border-radius: 0;
    margin-bottom: 10px;
`;


class CouponeBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usercoupone: [],
        };
    }
    componentDidMount() {
        this.loadUserCoupone();
    }

    loadUserCoupone = () => {
        fetch(APICOUPONE)
            .then(response => response.json())
            .then(data => this.setState({usercoupone: data}));
    };

    userCouponeList = () => {


        let showHeader = this.state.usercoupone.length > 0;
        if(this.props.coupon){
            showHeader = this.state.usercoupone.length > 1;
        }


        let list = this.state.usercoupone.map( (coupon) => {
            let hide = this.props.coupon.code === coupon.code;
            return (
                <UserCouponeLi hide={hide}>
                    <UserCouponCoupon><span>{coupon.code}</span> <AplyCouponeButton onClick={()=>this.useCoupon(coupon)}>→</AplyCouponeButton></UserCouponCoupon>
                    <UserCouponCouponValue>Sleva: {Math.floor(coupon.value)}{coupon.type === "p" ? "%": ""} </UserCouponCouponValue>

                </UserCouponeLi>
            );
        })

        return (
            <div>
                {showHeader ? <h3>Tvoje kupony:</h3>: ""}
                <UserCouponeUl>{list}</UserCouponeUl>
            </div>
        )
    };

    couponeInput = () => {
        return (
            <CouponeInputBox>
                <label>
                    <h3>Slevový kupon:</h3>
                    <CouponeInput type="text" placeholder="slevový kopon" ></CouponeInput>
                </label>
                <AplyCouponeButton>Použít</AplyCouponeButton>
            </CouponeInputBox>
        )
    }

    useCoupon = (coupon) => {
        this.props.couponChangeHandler(coupon);
    }

    render() {
        return (
            <CouponeBoxStyled>
                {this.userCouponeList()}
                {this.couponeInput()}
            </CouponeBoxStyled>
        )
    }
}

export default CouponeBox
