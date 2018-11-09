import React from 'react';
import { connect } from 'react-redux';

const PageReport = props => {
  console.log(props.report);
  return <div>Page Report</div>;
};

const mapStateToProps = state => {
  return { report: state.reports[state.reports.length - 1] };
};

export default connect(mapStateToProps)(PageReport);
