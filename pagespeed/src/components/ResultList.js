import './ResultList.css';
import React from 'react';

class ResultList extends React.Component {
  renderSummary(result) {
    let format = result.summary.format;

    if (result.summary.args) {
      result.summary.args.forEach(arg => {
        format = format
          .replace(`{{${arg.key}}}`, arg.value)
          .replace('{{BEGIN_LINK}}', '')
          .replace('{{END_LINK}}', '');
      });
    }

    return format;
  }

  renderResults() {
    const results = Object.values(
      this.props.report.formattedResults.ruleResults
    );

    return results.map(result => {
      const iconName = result.ruleImpact ? 'yellow exclamation' : 'green check';

      return (
        <div className="active step" key={result.localizedRuleName}>
          <i className={`icon ${iconName}`} />
          <div className="content">
            <h3>{result.localizedRuleName}</h3>
            <p>{this.renderSummary(result)}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui vertical steps fluid">{this.renderResults()}</div>
    );
  }
}

export default ResultList;
