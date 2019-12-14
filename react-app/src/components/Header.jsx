import React    from 'react';
import ViewCart from './ViewCart';

class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Sneaker Store</h1>
        <p>Undisputed kings of sneakers!</p>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;