angular.module('application').service('ProductParamsRepo', [function() {
  var productParams = {};
  this.updateProperties = function(id, properties) {
    productParams[id] = properties;
  };
  this.getProperties = function(id) {
    return productParams[id];
  }
}]);
