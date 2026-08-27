window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "serenity-js-mocha-webdriverio-template",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 1,
      "failed": 1,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 944,
    "startedAt": "2026-08-27T11:40:48.454Z",
    "finishedAt": "2026-08-27T11:40:49.398Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "offers a web testing tutorial",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 804,
      "startedAt": "2026-08-27T11:40:48.454Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 152.0.7977.64"
        },
        {
          "type": "platform",
          "name": "linux"
        },
        {
          "type": "feature",
          "name": "serenity-js website"
        },
        {
          "type": "module",
          "name": "serenity-js-mocha-webdriverio-template"
        }
      ],
      "activities": [
        {
          "name": "Alice navigates to \"https://serenity-js.org\"",
          "outcome": "SUCCESS",
          "duration": 701,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-27T11:40:48.471Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 38,
            "column": 22
          }
        },
        {
          "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
          "outcome": "SUCCESS",
          "duration": 40,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-27T11:40:49.183Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 39,
            "column": 20
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2850",
          "timestamp": "2026-08-27T11:40:48.454Z",
          "duration": 804,
          "activities": [
            {
              "name": "Alice navigates to \"https://serenity-js.org\"",
              "outcome": "SUCCESS",
              "duration": 701,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-27T11:40:48.471Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 38,
                "column": 22
              }
            },
            {
              "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
              "outcome": "SUCCESS",
              "duration": 40,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-27T11:40:49.183Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 39,
                "column": 20
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithWebdriverIO"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "offers examples to help you practice test automation",
      "category": "serenity-js website",
      "outcome": "FAILURE",
      "duration": 137,
      "startedAt": "2026-08-27T11:40:49.261Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 152.0.7977.64"
        },
        {
          "type": "platform",
          "name": "linux"
        },
        {
          "type": "feature",
          "name": "serenity-js website"
        },
        {
          "type": "module",
          "name": "serenity-js-mocha-webdriverio-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt ensures all GitHub systems are operational",
          "outcome": "FAILURE",
          "duration": 95,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-27T11:40:49.268Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2850/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-66879ca724.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 214\nconnection: close\ndate: Thu, 27 Aug 2026 11:40:33 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 016a528647efe54d747fc4c81a8e3ff9fe1d87b8\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.056782\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 2d7beac1fa8d4920a38afccf290ffb06\natl-request-id: 2d7beac1-fa8d-4920-a38a-fccf290ffb06\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"21dbe3014d236ad54410d5ab9ffce3f6\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 c7904a191557d069faf4e0ae7f35d0b2.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: vyPBztze9BEEEj2_4gNuk8XdPgFw99MWNQJc8KJl7J6Ip6A_3nimyQ==\nage: 16",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-27T10:50:15.104Z\"\n    },\n    \"status\": {\n        \"indicator\": \"major\",\n        \"description\": \"Partial System Outage\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-27T11:40:49.340Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              }
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "FAILURE",
              "duration": 2,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-27T11:40:49.351Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "error": {
                "name": "AssertionError",
                "message": "Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26",
                "stack": "AssertionError: Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26\n    at ErrorFactory.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/ErrorFactory.ts:36:16)\n    at Stage.createError (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/stage/Stage.ts:336:28)\n    at RaiseErrors.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/RaiseErrors.ts:59:27)\n    at Ensure.performAs (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/assertions/src/Ensure.ts:140:41)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async Context.<anonymous> (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:67:9)"
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-27T11:40:49.268Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 68,
            "column": 26
          },
          "error": {
            "name": "AssertionError",
            "message": "Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26",
            "stack": "AssertionError: Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26\n    at ErrorFactory.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/ErrorFactory.ts:36:16)\n    at Stage.createError (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/stage/Stage.ts:336:28)\n    at RaiseErrors.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/RaiseErrors.ts:59:27)\n    at Ensure.performAs (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/assertions/src/Ensure.ts:140:41)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async Context.<anonymous> (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:67:9)"
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "FAILURE",
          "run": "2850",
          "timestamp": "2026-08-27T11:40:48.454Z",
          "duration": 137,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "FAILURE",
              "duration": 95,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 61,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-27T11:40:49.268Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2850/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-66879ca724.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 214\nconnection: close\ndate: Thu, 27 Aug 2026 11:40:33 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 016a528647efe54d747fc4c81a8e3ff9fe1d87b8\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.056782\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 2d7beac1fa8d4920a38afccf290ffb06\natl-request-id: 2d7beac1-fa8d-4920-a38a-fccf290ffb06\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"21dbe3014d236ad54410d5ab9ffce3f6\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 c7904a191557d069faf4e0ae7f35d0b2.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: vyPBztze9BEEEj2_4gNuk8XdPgFw99MWNQJc8KJl7J6Ip6A_3nimyQ==\nage: 16",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-27T10:50:15.104Z\"\n    },\n    \"status\": {\n        \"indicator\": \"major\",\n        \"description\": \"Partial System Outage\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-27T11:40:49.340Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  }
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "FAILURE",
                  "duration": 2,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-27T11:40:49.351Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "error": {
                    "name": "AssertionError",
                    "message": "Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26",
                    "stack": "AssertionError: Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26\n    at ErrorFactory.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/ErrorFactory.ts:36:16)\n    at Stage.createError (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/stage/Stage.ts:336:28)\n    at RaiseErrors.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/RaiseErrors.ts:59:27)\n    at Ensure.performAs (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/assertions/src/Ensure.ts:140:41)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async Context.<anonymous> (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:67:9)"
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-27T11:40:49.268Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "error": {
                "name": "AssertionError",
                "message": "Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26",
                "stack": "AssertionError: Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26\n    at ErrorFactory.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/ErrorFactory.ts:36:16)\n    at Stage.createError (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/stage/Stage.ts:336:28)\n    at RaiseErrors.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/RaiseErrors.ts:59:27)\n    at Ensure.performAs (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/assertions/src/Ensure.ts:140:41)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async Context.<anonymous> (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:67:9)"
              }
            }
          ],
          "error": {
            "name": "AssertionError",
            "message": "Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26",
            "stack": "AssertionError: Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26\n    at ErrorFactory.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/ErrorFactory.ts:36:16)\n    at Stage.createError (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/stage/Stage.ts:336:28)\n    at RaiseErrors.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/RaiseErrors.ts:59:27)\n    at Ensure.performAs (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/assertions/src/Ensure.ts:140:41)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async Context.<anonymous> (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:67:9)"
          }
        }
      ],
      "error": {
        "name": "AssertionError",
        "message": "Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26",
        "stack": "AssertionError: Expected GitHub Status to equal \"All Systems Operational\"\n\nExpectation: equals('All Systems Operational')\n\nExpected string: All Systems Operational\nReceived string: Partial System Outage\n\n    at /__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:68:26\n    at ErrorFactory.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/ErrorFactory.ts:36:16)\n    at Stage.createError (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/stage/Stage.ts:336:28)\n    at RaiseErrors.create (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/errors/RaiseErrors.ts:59:27)\n    at Ensure.performAs (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/assertions/src/Ensure.ts:140:41)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async PerformActivities.perform (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/node_modules/@serenity-js/core/src/screenplay/abilities/PerformActivities.ts:60:13)\n    at async Context.<anonymous> (/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:67:9)"
      },
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithWebdriverIO"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-27T11:40:48.454Z",
      "duration": 944,
      "outcomes": {
        "passed": 1,
        "failed": 1,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2850",
      "slowest": 804,
      "fastest": 137,
      "average": 471,
      "commit": "b9fb54e183173aaf7456fe5f5349e31d46172b30",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/33068343516",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template",
      "score": {
        "confidence": 83,
        "passRate": 50,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "browser",
      "name": "chrome 152.0.7977.64",
      "scenarioCount": 2,
      "passed": 1,
      "failed": 1,
      "skipped": 0
    },
    {
      "type": "platform",
      "name": "linux",
      "scenarioCount": 2,
      "passed": 1,
      "failed": 1,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "serenity-js website",
      "scenarioCount": 2,
      "passed": 1,
      "failed": 1,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-mocha-webdriverio-template",
      "scenarioCount": 2,
      "passed": 1,
      "failed": 1,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.20.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.9",
    "testRunner": {
      "name": "Mocha",
      "version": "11.8.0"
    },
    "browsers": [
      {
        "name": "chrome",
        "version": "152.0.7977.64"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2850",
      "branch": "main",
      "commit": "b9fb54e183173aaf7456fe5f5349e31d46172b30",
      "commitMessage": "chore(deps): update dependency node to v24.20.0 (#1124)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/33068343516",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template",
      "triggeredBy": "renovate[bot]"
    },
    "projectName": "serenity-js-mocha-webdriverio-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "specs",
    "outcomes": {
      "passed": 1,
      "failed": 1,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 2,
    "children": [
      {
        "type": "file",
        "name": "serenity-js_website",
        "outcomes": {
          "passed": 1,
          "failed": 1,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 2,
        "scenarios": [
          {
            "name": "offers a web testing tutorial",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "offers examples to help you practice test automation",
            "outcome": "FAILURE",
            "executionHistory": [
              "FAILURE"
            ]
          }
        ],
        "score": {
          "confidence": 80,
          "passRate": 50,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 80,
      "passRate": 50,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "specs"
};
