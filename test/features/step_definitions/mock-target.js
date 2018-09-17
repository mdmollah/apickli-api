
'use strict';

const {Given} = require('cucumber');


Given(/^I use the GPI target$/, function(callback) {
    this.apickli.domain = 'https://sandbox.swiftlab-api-developer.com/swift-apitracker-pilot/v2';
    callback();
});
Given(/^I use the MOCK target$/, function(callback) {
    this.apickli.domain = 'http://localhost:4010/swift-apitracker-pilot/v2';
    callback();
});
Given(/^I use the MOCK_APIGEE target$/, function(callback) {
    this.apickli.domain = 'http://apistudio.io/try/f6122def-2c50-49e8-bf95-2ee1fb135fae';
    callback();
});
Given(/^I use the MOCK_OPENAPI target$/, function(callback) {
    this.apickli.domain = 'http://127.0.0.1:10010/swift-apitracker-pilot/v2';
    callback();
});
