# SWIFT API testing with apickli and prism mock Server

## Running mock server
```
download prism_windows_amd64.exe from https://help.stoplight.io/prism/getting-started/prism-introduction
Execute below Command to run mock server:
prism_windows_amd64.exe run --mockDynamic --list --spec https://raw.githubusercontent.com/yinchanted/tracker-spec/v2/SWIFT-API_gpi-api_2.0.2_swagger.json
```
## Running Cucumber Tests
```
From project Test folder execute command:
./node_modules/cucumber/bin/cucumber-js features/mock-gpiapi.feature
```
