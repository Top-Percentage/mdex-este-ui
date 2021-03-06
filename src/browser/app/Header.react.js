import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  }

  render() {
    const {msg: {app: {links: msg}}, viewer} = this.props;

    return (
      <header>
        <h1>
          <Link to="/">{msg.home}</Link>
        </h1>
        <ul>
          <li><Link activeClassName="active" to="/todos">{msg.todos}</Link></li>
          <li><Link activeClassName="active" to="/me">{msg.me}</Link></li>
          {!viewer &&
            <li><Link activeClassName="active" to="/login">{msg.login}</Link></li>
          }
          <li><Link activeClassName="active" to="/dex/1">Bulbasaur</Link></li>
          <li><Link activeClassName="active" to="/dex/2">Ivysaur</Link></li>
          <li><Link activeClassName="active" to="/dex/3">Venasaur</Link></li>
        </ul>
      </header>
    );
  }

}
