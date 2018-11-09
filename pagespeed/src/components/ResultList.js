import React from 'react';

class ResultList extends React.Component {
  renderSummary(result) {
    console.log(result);
  }

  render() {
    const results = Object.values(
      this.props.report.formattedResults.ruleResults
    );

    return results.map(result => {
      return (
        <div className="active step" key={result.localizedRuleName}>
          <div className="content">
            <h3>{result.localizedRuleName}</h3>
            <p>{this.renderSummary(result)}</p>
          </div>
        </div>
      );
    });
  }
}

export default ResultList;
