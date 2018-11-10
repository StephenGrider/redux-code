import React from 'react';
import { connect } from 'react-redux';
import Creatable from 'react-select/lib/Creatable';
import { fetchReport } from '../actions';

class SearchBar extends React.Component {
  state = { url: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.fetchReport(this.state.url);
  };

  onCreateOption = url => {
    this.props.fetchReport(url);
  };

  render() {
    return (
      <div>
        <Creatable onCreateOption={this.onCreateOption} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchReport }
)(SearchBar);
