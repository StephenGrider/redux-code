import './PageReport.css';
import React from 'react';
import { connect } from 'react-redux';
import Statistics from './Statistics';
import ResultList from './ResultList';

const PageReport = ({ report }) => {
  if (!report) {
    return <div>Enter a URL to get started</div>;
  }

  return (
    <div className="page-report">
      <h1 className="ui center aligned header">Report For: {report.id}</h1>
      <Statistics report={report} />
      <ResultList report={report} />
    </div>
  );
};

const mapStateToProps = ({ reports, selectedReport }) => {
  return {
    report: reports.data.find(report => report.id === selectedReport)
  };
};

export default connect(mapStateToProps)(PageReport);
