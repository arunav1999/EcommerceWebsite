import React, {useState, useEffect} from "react";
import Container from "../../components/container/Container";
import PageHeading from "../../components/pageheading/PageHeading";
import { useAuth } from '../../utils/Auth';
import { getOrderItems } from "../../utils/Orders";


const Orders = (props) => {
    const userInfo = useAuth();
    const [orderItems, setOrderItems] = useState([]);

    useEffect( async () => {
        console.info('USER INFO in ORDERS',userInfo)
        if(userInfo !== null)
        {
            const localOrderItems = await getOrderItems(userInfo.token)
            setOrderItems(localOrderItems)
        }
    }, [userInfo])

    if(userInfo === null)
    {
        return (
            <>
                <PageHeading content={"You need to Login first !"}/>
            </>
        )
    }

    return (
        <React.Fragment>
            
            <PageHeading content={"All Orders"} />
            <Container orderItems={orderItems}/>
            
        </React.Fragment>


    )

}
export default Orders;