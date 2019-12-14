import React    from 'react';
import ViewCart from './ViewCart';


class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'><center>Sneaker Store </center></h1>
        <p><center>Undisputed kings of sneakers!</center></p>
        <ViewCart cart={this.props.cart} />
      </div>

     
    );
  }

}

export default Header;