import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import fetch from '../components/fetch';
import {fetchMonster} from '../../common/monsters/actions';

// This decorator (higher order component) fetches todos both in browser and
// on server side. It's true isomorphic data fetching and rendering.
@fetch(fetchMonster)
export default class Page extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object,
    monster: PropTypes.object
  }

  render() {
    const {actions, msg: {monster: msg}, monsters: {monster}} = this.props;

    console.log(monster);

    return (
      <DocumentTitle title={msg.title}>
        <div className="monster-page">
          <h2>{monster.name}</h2>
          <p>National Dex: {monster.dex}</p>
          <p>Classification: {monster.classification} Pok&eacute;mon</p>
        </div>
      </DocumentTitle>
    );
  }

}
