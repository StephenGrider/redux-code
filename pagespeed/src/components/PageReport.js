import React from 'react';
import { connect } from 'react-redux';
import Statistics from './Statistics';

const PageReport = ({ report }) => {
  if (!report) {
    return <div>Enter a URL to get started</div>;
  }

  return (
    <div>
      Report For: {report.id}
      <Statistics report={report} />
    </div>
  );
};

const mapStateToProps = state => {
  return { report: state.reports[state.reports.length - 1] };
};

export default connect(mapStateToProps)(PageReport);
