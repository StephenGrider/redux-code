import React from 'react';

const Statistics = ({ report }) => {
  return (
    <div className="ui inverted statistics segment">
      <div className="statistic">
        <div className="value">{report.pageStats.numberResources}</div>
        <div className="label">Requests</div>
      </div>
    </div>
  );
};

export default Statistics;
