# Cypress.io end-to-end tests

[Cypress.io](https://www.cypress.io) is an open source, MIT licensed end-to-end test runner

## Folder structure

These folders hold end-to-end tests and supporting files for the Cypress Test Runner.

- [fixtures](fixtures) holds optional JSON data for mocking, [read more](https://on.cypress.io/fixture)
- [e2e](integration) holds the actual test files, [read more](https://on.cypress.io/writing-and-organizing-tests)
- [pages](pages) Page Object Model refers to using the Objects/Classes to depict and represent all the locators and functions (Components used for the automation) related to that particular page in a web application
- [selectors](selectors) refers to DOM node using to identify an element.
- [support](support) file runs before all tests and is a great place to write or load additional custom commands, [read more](https://on.cypress.io/writing-and-organizing-tests#Support-file)


# Cypress.io Component Testing with Next.js

Example of using [Cypress](https://www.cypress.io/) with a [Next.js](https://nextjs.org/) application. This emphasizes Component Testing, but does show some examples of E2E tests to show capabilities that are not ideally tested by component tests (image optimization, routing, etc).

## Coverage

Next runs code client-side (in the browser) *and* server-side (in the Next node server). To get comprehensive code coverage we need to collect from both places.

The `swc-plugin-coverage-instrument` dependency adds Istanbul instrumentation to the SWC compiler (see `next.config.js`). This, combined with using `nyc` to run the server process, allows us to collect and merge coverage from both locations after tests are complete using the `@cypress/code-coverage` plugin.

1. Launch Next server: `npm run dev`
2. Launch Cypress: `npm run cypress:open`
3. Run tests
4. Open coverage report at `coverage/lcov-report/index.html`