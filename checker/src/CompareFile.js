import './CompareFile.css';
import _ from 'lodash';
import React from 'react';
import prettier from 'prettier/standalone';
import parsers from 'prettier/parser-babylon';
import * as diff from 'diff';

class CompareFile extends React.Component {
  formatContents(contents) {
    try {
      return prettier.format(contents, {
        parser: 'babylon',
        plugins: [parsers]
      });
    } catch (e) {
      return e.message;
    }
  }

  renderDiffs() {
    if (!this.props.github) {
      return null;
    }
    const local = this.formatContents(this.props.local.contents);
    const github = this.formatContents(this.props.github.contents);

    return diff.diffLines(github, local).map((part, i) => {
      const status = part.added ? 'added' : part.removed ? 'removed' : 'same';

      return (
        <span key={i} className={status}>
          {part.value}
        </span>
      );
    });
  }

  renderLocalFile(file) {
    return this.formatContents(file.contents);
  }

  renderGithubFile(file) {
    if (!file) {
      return this.renderNoMatch();
    }

    return this.formatContents(file.contents);
  }

  renderNoMatch() {
    return <div>No matching file found.</div>;
  }

  render() {
    return (
      <div className="compare-file">
        <h3>{this.props.local.fullPath}</h3>
        <div className="code">
          <pre>{this.renderLocalFile(this.props.local)}</pre>
          <pre>{this.renderGithubFile(this.props.github)}</pre>
          <pre>{this.renderDiffs()}</pre>
        </div>
      </div>
    );
  }
}

export default CompareFile;
