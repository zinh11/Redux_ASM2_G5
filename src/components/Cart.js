import React from 'react';
import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';

function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
    let ListCart = [];
    let TotalCart = 0;

    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });

    function TotalPrice(price, quantity) {
        return (price * quantity).toLocaleString('en-US');
    }

    function handleDelete(key, name) {
        const isConfirmed = window.confirm("Are you sure you want to delete this item from your cart?");
        if (isConfirmed) {
            DeleteCart(key);
            window.alert(`Delete ${name} successfully`)
        }
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListCart.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>
                                        <i className="badge bg-danger" onClick={() => handleDelete(key, item.name)}>X</i>
                                    </td>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} style={{ width: '100px', height: '80px' }} alt={item.name} /></td>
                                    <td>{item.price} $</td>
                                    <td>
                                        <span className="btn btn-danger" style={{ margin: '2px' }} onClick={() => DecreaseQuantity(key)}>-</span>
                                        <span className="btn disabled">{item.quantity}</span>
                                        <span className="btn btn-success" style={{ margin: '2px' }} onClick={() => IncreaseQuantity(key)}>+</span>
                                    </td>
                                    <td>{TotalPrice(item.price, item.quantity)} $</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td colSpan="5">Total Carts</td>
                            <td>{TotalCart.toLocaleString('en-US')} $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state._todoProduct
    };
};

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart);
