# test-automation-task
![Project](https://github.com/tejeswarpatro18/test-automation-task)

# WebdriveIO
Herein lies an example [WebDriver.io](https://webdriver.io/) project, that includes tests (some quite silly) that aim to illustrate solutions for common issues when writing e2e tests.

## Example WebdriveIO project that:
* Makes use of page objects
* Runs tests on Local chrome
* Runs tests sharded (parallel)
* It can be considered as example tests for both Angular, and non-Angular applications
* is written using es6

## Example API automation project that:
* Makes use of [pactumjs](https://pactumjs.github.io/)
* Runs tests on Local 
* This can be example for Both REST and SOAP apis automation test
* is written in Javascript/Nodejs

## Setup:
* Install [Node](http://nodejs.org) (v12.x.x or later)
* `git clone https://github.com/tejeswarpatro18/test-automation-task.git`
* `npm i` to install the project dependencies

## Run tests:
* run tests for UI suit using command `npm run test:ui`
* run tests for UI suit using command `npm run test:api`

## Reporting:
* For UI tests, Allure report has been used. Can get html report using `npm run report`
* For api tests we can use multiple reports by refering [pactumjsReporter](https://pactumjs.github.io/guides/reporting.html#adding-a-reporter)

## Troubleshooting
* run `node -v` and make sure your node version is 12.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure