@console
Feature:
    Sample KYC API Testing Using prism mock server
    Background:
        Given I use the MOCK_KYC target

    Scenario: Validate Response Code:GET /entities/my
        And I store the raw value ./features/SWIFT-API_kyc-api_1.0.0-oas2_swagger.json as swaggerSpecPath in scenario scope
        When I GET /entities/my
        Then response code should be 200
        And response body should be valid according to schema file `swaggerSpecPath`
        And response body should be valid json
