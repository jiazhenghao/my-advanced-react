"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var StateApi =
  /*#__PURE__*/
  (function() {
    function StateApi(rawData) {
      var _this = this;

      _classCallCheck(this, StateApi);

      _defineProperty(this, "lookupAuthor", function(authorId) {
        return _this.data.authors[authorId];
      });

      _defineProperty(this, "getState", function() {
        return _this.data;
      });

      _defineProperty(this, "subscribe", function(cb) {
        _this.lastSubscriptionId++;
        _this.subscriptions[_this.lastSubscriptionId] = cb;
        return _this.lastSubscriptionId;
      });

      _defineProperty(this, "unsubscribe", function(subscriptionId) {
        delete _this.subscriptions[subscriptionId];
      });

      _defineProperty(this, "notifySubscribers", function() {
        Object.values(_this.subscriptions).forEach(function(cb) {
          return cb();
        });
      });

      _defineProperty(this, "mergeWithState", function(stateChange) {
        _this.data = { ..._this.data, ...stateChange };

        _this.notifySubscribers();
      });

      _defineProperty(this, "setSearchTerm", function(searchTerm) {
        _this.mergeWithState({
          searchTerm: searchTerm
        }); // this.data.searchTerm = searchTerm;
        // this.notifySubscribers();
      });

      _defineProperty(this, "startClock", function() {
        setInterval(function() {
          _this.mergeWithState({
            timestamp: new Date()
          });
        }, 1000);
      });

      this.data = {
        articles: this.mapIntoObject(rawData.articles),
        authors: this.mapIntoObject(rawData.authors),
        searchTerm: "",
        timestamp: new Date()
      };
      this.subscriptions = {};
      this.lastSubscriptionId = 0; // setInterval(() => {
      //   this.mergeWithState({
      //     timestamp: new Date()
      //   });
      // }, 1000);
    }

    _createClass(StateApi, [
      {
        key: "mapIntoObject",
        value: function mapIntoObject(arr) {
          return arr.reduce(function(acc, curr) {
            acc[curr.id] = curr;
            return acc;
          }, {});
        }
      }
    ]);

    return StateApi;
  })();

var _default = StateApi;
exports.default = _default;
