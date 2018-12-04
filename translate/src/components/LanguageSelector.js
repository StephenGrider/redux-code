import React from 'react';

class LanguageSelector extends React {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange('english')}
        />
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange('dutch')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
