import React from 'react';

const Statistics = ({ report }) => {
  const mb = (
    parseFloat(report.pageStats.overTheWireResponseBytes) /
    1024 /
    1024
  ).toFixed(2);

  return (
    <div className="ui inverted statistics segment">
      <div className="statistic">
        <div className="value">{report.pageStats.numberResources}</div>
        <div className="label">Requests</div>
      </div>

      <div className="red inverted statistic">
        <div className="value">{report.pageStats.numberJsResources || 0}</div>
        <div className="label">JS Files</div>
      </div>

      <div className="green inverted statistic">
        <div className="value">{report.pageStats.numberCssResources || 0}</div>
        <div className="label">CSS Files</div>
      </div>

      <div className="blue inverted statistic">
        <div className="value">{mb}</div>
        <div className="label">MB Loaded</div>
      </div>
    </div>
  );
};

export default Statistics;
