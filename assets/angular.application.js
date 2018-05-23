angular.module('application', [])
    .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }).config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://cdn.shopify.com/**'
        ]);
    });

$(document).ready(function(){
  angular.bootstrap(document, ['application']);
});
