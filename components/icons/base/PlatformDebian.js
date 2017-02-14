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

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-debian', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-debian');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M2.65603874,5.16700815 C2.68642627,5.33364645 3.03933499,4.93419361 2.7631231,5.55645706 C2.23136472,5.92819947 2.69882551,5.71915014 2.65603874,5.16700815 L2.65603874,5.16700815 Z M2.65866423,5.19930536 C2.65706423,5.17900536 2.65606423,5.15910536 2.65376423,5.13840536 C2.65336423,5.16220536 2.65536423,5.18170536 2.65866423,5.19930536 L2.65866423,5.19930536 Z M2.21290675,6.95977879 C1.868546,7.39990489 2.05448766,7.49365067 2.0181823,7.79306417 C2.14278529,7.41066029 2.16532936,7.18103949 2.21290675,6.95977879 L2.21290675,6.95977879 Z M13.0395111,0 C12.6680035,0.0312799047 12.297905,0.0498318001 11.9324561,0.0968925575 L12.0934114,0.118873031 C12.3623434,0.0203366347 12.7543286,0.0648611837 13.0395111,0 L13.0395111,0 Z M12.4285197,0.467238997 L12.4387115,0.427538997 L12.2886995,0.493438997 L12.4285197,0.467238997 L12.4285197,0.467238997 Z M12.0148829,0.309558336 C12.227032,0.34764843 12.4735139,0.376861794 12.4387115,0.427538997 C12.6709155,0.376673927 12.7236592,0.32975407 12.0148829,0.309558336 L12.0148829,0.309558336 Z M9.80002141,13.2015757 C9.66175108,13.0486518 9.57979397,12.8644479 9.48820866,12.6809015 C9.57580179,13.0035166 9.75530899,13.280527 9.92236998,13.5623279 L9.80002141,13.2015757 L9.80002141,13.2015757 Z M14.1172119,12.9648629 C14.2606016,12.8527531 14.3906527,12.7394692 14.5066608,12.629285 C14.1832002,12.7084241 13.8542916,12.7101619 13.5228937,12.6798683 C13.1252256,12.6855982 13.5980875,12.8847845 14.1172119,12.9648629 L14.1172119,12.9648629 Z M15.6571131,12.147875 C15.8942016,11.8210799 16.0668986,11.4631927 16.1274389,11.0931411 C16.0742724,11.3569068 15.9313054,11.5847428 15.7963697,11.8249781 C15.0532137,12.2929556 15.726671,11.5471224 15.795947,11.2635367 C14.9967126,12.269754 15.6861856,11.8669195 15.6571131,12.147875 L15.6571131,12.147875 Z M16.4451694,10.0977732 C16.4930286,9.38167002 16.3039402,9.60800315 16.240488,9.88135006 C16.3145077,9.91995679 16.3734511,10.3861495 16.4451694,10.0977732 L16.4451694,10.0977732 Z M11.8867574,15.2447735 C11.3145606,14.9767808 10.7906457,14.5723025 10.3596781,14.0769904 C10.5883126,14.4117699 10.8349823,14.7369682 11.153934,14.9926086 C10.6143792,14.8097668 9.89357932,13.6851931 9.68312098,13.6393065 C10.6132989,15.3047501 13.4566704,16.5598445 14.9457536,15.9369705 C14.2566564,15.9625674 13.3814766,15.9512484 12.6074633,15.6651265 C12.3129343,15.5135646 11.9222173,15.2147147 11.9101938,15.1117165 C11.8954932,15.1495717 11.871728,15.1878027 11.8867574,15.2447735 L11.8867574,15.2447735 Z M11.9266054,15.0880452 C11.9135054,15.1006452 11.9080054,15.1174452 11.9105054,15.1383452 C11.9171054,15.1216452 11.9226054,15.1049452 11.9266054,15.0880452 L11.9266054,15.0880452 Z M9.12642322,13.5046996 C9.38774663,13.8598158 9.59505819,14.2443332 9.9288514,14.5219071 C9.68871003,14.0531782 9.510377,13.8593931 9.18217284,13.2257637 L9.12642322,13.5046996 L9.12642322,13.5046996 Z M20.4597996,8.57609506 C20.4664689,8.21097497 20.5613419,8.38475222 20.5982578,8.29485772 C20.5265864,8.25366782 20.3385313,7.97374555 20.2238383,7.43682082 C20.3068756,7.31071489 20.4457565,7.76394474 20.5586178,7.78249664 C20.4859601,7.35556821 20.3609344,7.03004115 20.355909,6.70249453 C20.0262019,6.01335032 20.2392904,6.7944086 19.9717204,6.40669747 C19.6206903,5.31185384 20.2629147,6.15251302 20.3062651,5.65513435 C20.8383052,6.42595387 21.1418049,7.6204611 21.2808736,8.11530355 C21.1746347,7.51196773 21.0029709,6.92760651 20.793358,6.36217292 C20.9550648,6.43013391 20.5332088,5.12083977 21.0035345,5.98794127 C20.5010365,4.13960888 18.8535812,2.41254484 17.337727,1.60217926 C17.523058,1.77182343 17.7574695,1.98509978 17.6732579,2.01849319 C16.9195813,1.56953732 17.0519808,1.53468793 16.9441919,1.3450359 C16.3299598,1.09521936 16.2898971,1.36518467 15.8830705,1.34541163 C14.7254322,0.731555248 14.5023868,0.796792166 13.4371322,0.412086912 L13.4859777,0.638560937 C12.7187747,0.383155349 12.5924339,0.735500461 11.7637043,0.639453306 C11.7133089,0.600095108 12.0293017,0.496955963 12.2892631,0.459194636 C11.5478448,0.556979564 11.5825533,0.313080848 10.8571507,0.48605966 C11.0359534,0.36065824 11.2250418,0.277667862 11.4156332,0.171006205 C10.8111232,0.207734262 9.97238965,0.522740749 10.2312708,0.236243124 C9.24524928,0.676275296 7.49385642,1.29388903 6.5109817,2.21547205 L6.4801245,2.00891195 C6.02975963,2.54954706 4.51625373,3.62358439 4.39564292,4.3237658 L4.27526696,4.35189893 C4.0409025,4.74867465 3.88934056,5.19838199 3.70349284,5.60657066 C3.39694038,6.12884174 3.25420821,5.8075417 3.29784038,5.88940487 C2.6950212,7.11176343 2.3956077,8.13874 2.13691443,8.98099605 C2.32116528,9.25659737 2.14132932,10.6396764 2.21102808,11.7466375 C1.908186,17.2136227 6.04793579,22.5218601 10.5729544,23.7472715 C11.236032,23.9847827 12.2225702,23.9755773 13.0613977,24 C12.0715718,23.7167901 11.9434463,23.8500349 10.9793584,23.5137055 C10.2838267,23.1863467 10.1313254,22.8121151 9.63873733,22.3848109 L9.83364965,22.7293126 C8.86754209,22.3873471 9.27173857,22.3060476 8.48579574,22.0570764 L8.69399967,21.7851855 C8.38082489,21.7615612 7.86447163,21.2572784 7.72328936,20.9783424 L7.38071335,20.9918219 C6.96919004,20.4838287 6.74985497,20.1180041 6.76577672,19.8343715 L6.65512288,20.0314443 C6.52972146,19.8161953 5.14067765,18.1269396 5.86138356,18.519911 C5.72748115,18.3976094 5.54947689,18.3208656 5.35649021,17.9703052 L5.50326153,17.8027276 C5.15650547,17.3564488 4.86507633,16.7845338 4.88715074,16.5941303 C5.07210609,16.8439469 5.20041945,16.8906319 5.32755864,16.9332308 C4.45181525,14.7605455 4.40268795,16.8135124 3.7393755,14.7218918 L3.8798063,14.7101971 C3.77211137,14.5484903 3.70682749,14.3725056 3.62040853,14.1998556 L3.6814654,13.5912595 C3.05098276,12.8623344 3.50501104,10.4917309 3.59603275,9.19164225 C3.65910919,8.66293672 4.12229601,8.10013327 4.47464112,7.21762665 L4.2599088,7.18061679 C4.67025794,6.46488936 6.60256701,4.30638808 7.49751984,4.41741765 C7.93111755,3.87279036 7.41157055,4.41544504 7.3267015,4.27825495 C8.27904778,3.29279705 8.57846129,3.58206572 9.22110834,3.40471899 C9.91429169,2.99328962 8.62617958,3.56515766 8.95490038,3.24775587 C10.1529301,2.94181398 9.80401359,2.55213024 11.3671164,2.39667005 C11.53197,2.49050977 10.9844308,2.5415627 10.8470058,2.66339464 C11.8453326,2.17503361 14.0060883,2.28601622 15.4094101,2.93439322 C17.0381256,3.6956315 18.8678121,5.94534236 18.9399062,8.06204317 L19.0220982,8.08411758 C18.9804856,8.92562216 19.1508342,9.89868082 18.8556947,10.7925534 L19.0566657,10.3693823 C19.0801022,11.012546 18.8683757,11.3244527 18.6775965,11.8769234 L18.3338463,12.0486811 C18.052609,12.5948113 18.3609932,12.3953902 18.1598342,12.8297394 C17.7207414,13.2203625 16.8271976,14.0514404 16.5414514,14.1274327 C16.332496,14.1227361 16.6826807,13.8809508 16.7285673,13.7864066 C16.1408714,14.1898986 16.2568794,14.3922317 15.3580284,14.6371637 L15.331633,14.5789718 C13.1144702,15.621964 10.0350434,13.555142 10.0755758,10.7347372 C10.0517636,10.9137278 10.0081784,10.8690154 9.95905107,10.9414852 C9.84468686,9.49030429 10.6292676,8.03287678 11.9523231,7.43776015 C13.2464469,6.79713268 14.7636162,7.06005296 15.6907883,7.92400768 C15.181621,7.25703181 14.1681239,6.54999325 12.9667595,6.61612254 C11.7901936,6.63467443 10.6894321,7.38252717 10.3220577,8.19425478 C9.71914454,8.57384065 9.64921094,9.65736528 9.38652549,9.85561224 C9.03319407,12.4530655 10.0513878,13.5751499 11.7738491,14.8952464 C11.9110392,14.987818 11.9288397,15.0405617 11.9177085,15.0881391 C11.9182721,15.0875755 11.9185539,15.0869649 11.9191175,15.0864483 C13.9511372,15.8454322 16.0503663,15.6614631 17.8083815,14.2520827 C18.2556466,13.9036358 18.7443364,13.3110554 18.8855656,13.3028362 C18.6728998,13.6223985 18.921871,13.4565117 18.7584264,13.7389701 C19.2043294,13.020002 18.5648761,13.4462259 19.219171,12.497543 L19.4609562,12.83035 C19.3711086,12.2338713 20.2019517,11.5092671 20.1175993,10.5657037 C20.3082377,10.2770925 20.3300772,10.8761544 20.127932,11.5401243 C20.4084179,10.8035906 20.2019517,10.6852342 20.2739989,10.0775305 C20.3519638,10.2817422 20.4541166,10.4988229 20.5066255,10.7144476 C20.3237837,10.0027123 20.6941171,9.51580727 20.7857024,9.10221742 C20.6957609,9.06210775 20.5037606,9.41684817 20.4597996,8.57609506 L20.4597996,8.57609506 Z', stroke: 'none' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformDebian';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];