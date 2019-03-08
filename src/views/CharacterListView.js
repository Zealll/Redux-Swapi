import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getCharacters} from '../actions'

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h1>Character's taking a bathroom break...</h1>
    }
    if (this.props.error) {
      return <h1>{this.props.error}</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  }
}
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
