@console
Feature:
    Sample SWIFT_REF API Testing Using Mock Server
    Background:
        Given I use the MOCK_SWIFTREF target

    Scenario: Validate Response Code:GET /bics
        And I store the raw value ./features/SWIFT-API_swift-ref_api_1.0.1-sandbox_swagger.json as swaggerSpecPath in scenario scope
        When I GET /bics/CITIUS33
        Then response code should be 200
        And response body should be valid according to schema file `swaggerSpecPath`
        And response body should be valid json
