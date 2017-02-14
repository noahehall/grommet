'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Announcer = require('../utils/Announcer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VALUE;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Value = function (_Component) {
  _inherits(Value, _Component);

  function Value() {
    _classCallCheck(this, Value);

    return _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).apply(this, arguments));
  }

  _createClass(Value, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.announce) {
        (0, _Announcer.announce)(this.valueRef.textContent);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          active = _props.active,
          align = _props.align,
          className = _props.className,
          colorIndex = _props.colorIndex,
          icon = _props.icon,
          label = _props.label,
          responsive = _props.responsive,
          size = _props.size,
          trendIcon = _props.trendIcon,
          units = _props.units,
          value = _props.value,
          props = _objectWithoutProperties(_props, ['active', 'align', 'className', 'colorIndex', 'icon', 'label', 'responsive', 'size', 'trendIcon', 'units', 'value']);

      delete props.announce;
      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, CLASS_ROOT + '--interactive', props.onClick), _defineProperty(_classnames, CLASS_ROOT + '--active', active), _classnames), className);

      var unitsSpan = void 0;
      if (units) {
        unitsSpan = _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__units' },
          units
        );
      }

      var labelSpan = void 0;
      if (label) {
        labelSpan = _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__label' },
          label
        );
      }

      return _react2.default.createElement(
        'div',
        _extends({ ref: function ref(_ref) {
            return _this2.valueRef = _ref;
          } }, props, { className: classes }),
        _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + '__annotated' },
          icon,
          _react2.default.createElement(
            'span',
            { className: CLASS_ROOT + '__value' },
            value
          ),
          unitsSpan,
          trendIcon
        ),
        labelSpan
      );
    }
  }]);

  return Value;
}(_react.Component);

Value.displayName = 'Value';
exports.default = Value;


Value.propTypes = {
  active: _react.PropTypes.bool,
  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
  announce: _react.PropTypes.bool,
  colorIndex: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  onClick: _react.PropTypes.func,
  responsive: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  trendIcon: _react.PropTypes.node,
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.node]),
  units: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node])
};

Value.defaultProps = {
  align: 'center',
  announce: false
};
module.exports = exports['default'];