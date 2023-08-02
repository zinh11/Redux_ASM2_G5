import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-dark bg-dark justify-content-end">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active text-white">
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/carts" className="nav-link text-white">
                                        Carts : {this.props.numberCart}
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-white">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        numberCart: state._todoProduct.numberCart,
    };
};

export default connect(mapStateToProps, null)(Header);
