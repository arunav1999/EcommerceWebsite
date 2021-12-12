import React from "react";
import Container from "../../components/container/Container";
import PageHeading from "../../components/pageheading/PageHeading";
import {useAuth} from '../../utils/Auth';
import { useOrderItems } from '../../utils/Orders'

const Orders = (props) => {

    const orderItems = useOrderItems();
    return(
        <React.Fragment>
            <PageHeading content={"All Orders"}/>
            <Container orderItems={orderItems}/>
        </React.Fragment>
        
        
    )

}
export default Orders;