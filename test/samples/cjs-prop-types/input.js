'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function Label (ref) {
  var text = ref.text;

  return React.createElement( 'span', null, text )
}

var Sample = (function (superclass) {
  function Sample(props) {
    superclass.call(this, props);
  }

  if ( superclass ) Sample.__proto__ = superclass;
  Sample.prototype = Object.create( superclass && superclass.prototype );
  Sample.prototype.constructor = Sample;

  Sample.prototype.componentDidMount = function componentDidMount () {
    var ref = this.props;
  };

  Sample.prototype.componentWillUnmount = function componentWillUnmount () {
  };

  Sample.prototype.render = function render () {
    return (
      React.createElement( 'div', null,
        React.createElement( Label, { text: this.props.labelText })
      )
    )
  };

  return Sample;
}(React.Component));

Sample.propTypes = {
  pollingEnabled: PropTypes.bool,
  pollingUrl: PropTypes.string,
  pollingInterval: PropTypes.number,
  labelText: PropTypes.string,
  onAirLink: PropTypes.string,
  onAirText: PropTypes.string,
  scheduleLink: PropTypes.string,
  scheduleText: PropTypes.string,
};

Sample.defaultProps = {
  pollingEnabled: false,
  pollingUrl: '',
  pollingInterval: 500,
};

module.exports = Sample;
