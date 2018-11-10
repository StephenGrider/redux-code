import React from 'react';
import { connect } from 'react-redux';
import Creatable from 'react-select/lib/Creatable';
import { fetchReport } from '../actions';

class SearchBar extends React.Component {
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

const mapStateToProps = state => {
  return { reports: state.reports };
};

export default connect(
  mapStateToProps,
  { fetchReport }
)(SearchBar);
