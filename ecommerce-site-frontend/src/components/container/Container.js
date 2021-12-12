import React from 'react';
import '../container/styles.css'
import Ccard from '../ccard/Ccard';
import Ocard from '../ocard/Ocard';
import { addToOrder } from '../../utils/Orders';
import { useAuth } from '../../utils/Auth';

const Container = ({
    orderItems,
    setOrders
}) => {
    const content = []
    orderItems.map((orderItem) => {
        content.push(<Ocard {...orderItem}/>)
    });


    return (
        <>
            <div className="container">
                <div>
                    {
                        content
                    }
                </div>
            </div>
        </>
    )
}

export default Container;