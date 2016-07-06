'use strict';

describe('Service: Datasource', function () {

  // load the service's module
  beforeEach(module('basigal2App'));

  // instantiate service
  var Datasource;
  beforeEach(inject(function (_Datasource_) {
    Datasource = _Datasource_;
  }));

  it('should do something', function () {
    expect(!!Datasource).toBe(true);
  });

});
