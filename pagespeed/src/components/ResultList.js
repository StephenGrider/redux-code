import React from 'react';

class ResultList extends React.Component {
  render() {
    const results = Object.values(
      this.props.report.formattedResults.ruleResults
    );

    return results.map(result => {
      return <div>{result.localizedRuleName}</div>;
    });
  }
}

export default ResultList;
