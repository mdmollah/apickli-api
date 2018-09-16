
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
