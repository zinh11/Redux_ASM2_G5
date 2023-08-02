import React, { Component } from 'react';
import { actFetchProductsRequest, AddCart } from '../actions';
import { connect } from 'react-redux';

export class Product extends Component {
    componentDidMount() {
        this.props.actFetchProductsRequest();
    }

    render() {
        const { _products } = this.props;
        console.log(_products); //
        if (_products._products.length > 0) {
            return (
                <div className="container mt-4">
                    <div className="row">
                        {_products._products.map((item, index) => (
                            <div key={index} className="col-md-3 mb-4">
                                <div className="card">
                                    <img src={item.image} className="card-img-top" style={{ height: '200px' }} alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Price: ${item.price}</p>
                                        <button className="btn btn-primary" onClick={() => this.props.AddCart(item)}>Add Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return (
            <div className="container mt-4">
                <div className="row">
                    <h2>Có cái nịt :D?!</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        _products: state._todoProduct,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
        AddCart: item => dispatch(AddCart(item)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
