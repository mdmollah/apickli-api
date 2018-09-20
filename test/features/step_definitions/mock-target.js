
'use strict';

const {Given} = require('cucumber');


Given(/^I use the REAL_GPI target$/, function(callback) {
    this.apickli.domain = 'https://sandbox.swiftlab-api-developer.com/swift-apitracker-pilot/v2';
    callback();
});

Given(/^I use the MOCK_GPI target$/, function(callback) {
    this.apickli.domain = 'http://localhost:4010/swift-apitracker-pilot/v2';
    callback();
});

Given(/^I use the MOCK_SWIFTREF target$/, function(callback) {
    this.apickli.domain = 'http://localhost:4010/swiftref-api';
    callback();
});
Given(/^I use the MOCK_KYC target$/, function(callback) {
    this.apickli.domain = 'http://localhost:4010/v1/api';
    callback();
});
