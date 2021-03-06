var ocirest = require('../../utils/ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
  var possibleHeaders = [];
  var headers = ocirest.buildHeaders( possibleHeaders, parameters );
  ocirest.process( auth,
                   { path : '/itas/' + encodeURIComponent(parameters.domain) +
                            '/myservices/api' + auth.RESTversion +
                            '/serviceEntitlements/' + encodeURIComponent(parameters.serviceEntitlementId) +
                            '/serviceConfigurations/' + encodeURIComponent(parameters.serviceConfigurationId) +
                            'securityGroups',
                     host : endpoint.service.myServices,
                     headers : headers,
                     method : 'GET' },
                    callback );
};

function post( auth, parameters, callback ) {
  var possibleHeaders = [];
  var headers = ocirest.buildHeaders( possibleHeaders, parameters );
  ocirest.process( auth,
                   { path : '/itas/' + encodeURIComponent(parameters.domain) +
                            '/myservices/api' + auth.RESTversion +
                            '/serviceEntitlements/' + encodeURIComponent(parameters.serviceEntitlementId) +
                            '/serviceConfigurations/' + encodeURIComponent(parameters.serviceConfigurationId) +
                            'securityGroups',
                     host : endpoint.service.myServices,
                     headers : headers,
                     body : parameters.body,
                     method : 'POST' },
                    callback );
};


module.exports = {
    get: get,
    post: post
    };