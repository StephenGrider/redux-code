import React from 'react';
import { connect } from 'react-redux';
import { fetchReport } from '../actions';

class SearchBar extends React.Component {
  state = { url: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.fetchReport(this.state.url);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          value={this.state.url}
          onChange={e => this.setState({ url: e.target.value })}
        />
      </form>
    );
  }
}

export default connect(
  null,
  { fetchReport }
)(SearchBar);
