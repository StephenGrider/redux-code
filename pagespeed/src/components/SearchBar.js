import React from 'react';
import { connect } from 'react-redux';
import Creatable from 'react-select/lib/Creatable';
import { fetchReport } from '../actions';

class SearchBar extends React.Component {
  onCreateOption = url => {
    this.props.fetchReport(url);
  };

  render() {
    const options = this.props.reports.map(report => {
      return { label: report.id, value: report.id };
    });

    return (
      <div>
        <Creatable options={options} onCreateOption={this.onCreateOption} />
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
