window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "serenity-js-mocha-webdriverio-template",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 3936,
    "startedAt": "2026-10-15T09:57:17.094Z",
    "finishedAt": "2026-10-15T09:57:21.030Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "offers a web testing tutorial",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 1200,
      "startedAt": "2026-10-15T09:57:17.094Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 155.0.8059.79"
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
          "duration": 979,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-10-15T09:57:17.125Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 38,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-alice-navigates-to--https---serenity--3b7d2e5127.png",
              "type": "screenshot"
            }
          ]
        },
        {
          "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
          "outcome": "SUCCESS",
          "duration": 24,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-10-15T09:57:18.176Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 39,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-alice-ensures-that-the-text-of-page-e-3b7d2e5127.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2960",
          "timestamp": "2026-10-15T09:57:17.094Z",
          "duration": 1200,
          "activities": [
            {
              "name": "Alice navigates to \"https://serenity-js.org\"",
              "outcome": "SUCCESS",
              "duration": 979,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-15T09:57:17.125Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 38,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-alice-navigates-to--https---serenity--3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-15T09:57:18.176Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 39,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-alice-ensures-that-the-text-of-page-e-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
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
      ],
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers a web testing tutorial@serenity-js-mocha-webdriverio-template@chrome 155.0.8059.79@linux"
    },
    {
      "name": "offers examples to help you practice test automation",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 2734,
      "startedAt": "2026-10-15T09:57:18.296Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 155.0.8059.79"
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
          "outcome": "SUCCESS",
          "duration": 232,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 89,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-15T09:57:18.303Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-ee4532190a.json",
                  "type": "screenshot"
                },
                {
                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-apisitt-sends-a-get-request-to--https-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 15 Oct 2026 09:56:55 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: d88ffcf21a634603ae8c8fa51144a6f0317329bf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.065947\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 512bc2921795411091527b9a91ed78c0\natl-request-id: 512bc292-1795-4110-9152-7b9a91ed78c0\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"575ba870879e895747aefb78469d166c\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 11ba7cf61f8ee8331f744925c9c4cf68.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: kjCd1fidG9kujtrKDkCrQHLHtk5ZYbJsaVHt_2j-3X7aIgep-BIdUA==\nage: 23",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-10-15T08:59:26.633Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-15T09:57:18.442Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-apisitt-ensures-that-the-status-of-th-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-15T09:57:18.484Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-apisitt-ensures-that-github-status-do-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            }
          ],
          "type": "Task",
          "startedAt": "2026-10-15T09:57:18.302Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 68,
            "column": 26
          }
        },
        {
          "name": "Wendy starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 1930,
          "children": [
            {
              "name": "Wendy creates an empty todo list",
              "outcome": "SUCCESS",
              "duration": 1198,
              "children": [
                {
                  "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                  "outcome": "SUCCESS",
                  "duration": 883,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:18.560Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-navigates-to--https---todo-app--7b0b3e7c34.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:19.537Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 73,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-ensures-that-website-title-does-7b0b3e7c34.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                  "outcome": "SUCCESS",
                  "duration": 57,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:19.620Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until--what-needs-to-be-d-7b0b3e7c34.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy empties local storage if needed",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [
                    {
                      "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-10-15T09:57:19.739Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:19.738Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 20,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:18.560Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 34,
                "column": 22
              }
            },
            {
              "name": "Wendy records an item called 'Buy dog food'",
              "outcome": "SUCCESS",
              "duration": 261,
              "children": [
                {
                  "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:19.758Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-enters--buy-dog-food--into--wha-f81528b487.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 66,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:19.834Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-presses-key-enter-in--what-need-352c3cf374.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:19.953Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until-the-text-of-display-352c3cf374.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:19.758Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called 'Feed the dog'",
              "outcome": "SUCCESS",
              "duration": 216,
              "children": [
                {
                  "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:20.019Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-enters--feed-the-dog--into--wha-1e634d11d8.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 47,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:20.087Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-presses-key-enter-in--what-need-5bcda1ff33.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:20.173Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until-the-text-of-display-5bcda1ff33.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:20.019Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called \"Book a vet's appointment\"",
              "outcome": "SUCCESS",
              "duration": 255,
              "children": [
                {
                  "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:20.235Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-enters--book-a-vet-s-appointmen-03f7e70cee.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:20.320Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-presses-key-enter-in--what-need-0a88cf2627.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:20.421Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until-the-text-of-display-0a88cf2627.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:20.235Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-10-15T09:57:18.560Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 73,
            "column": 22
          }
        },
        {
          "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
          "outcome": "SUCCESS",
          "duration": 465,
          "children": [
            {
              "name": "Wendy marks an item called 'Buy dog food' as completed",
              "outcome": "SUCCESS",
              "duration": 232,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 232,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                      "outcome": "SUCCESS",
                      "duration": 196,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 144,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-10-15T09:57:20.526Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-clicks-on-toggle-button-of-an-i-9aecc71117.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-15T09:57:20.525Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:20.490Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:20.490Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            },
            {
              "name": "Wendy marks an item called 'Feed the dog' as completed",
              "outcome": "SUCCESS",
              "duration": 233,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 233,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                      "outcome": "SUCCESS",
                      "duration": 196,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 135,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-10-15T09:57:20.759Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-clicks-on-toggle-button-of-an-i-5f4b0ac12f.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-15T09:57:20.759Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:20.722Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:20.722Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-10-15T09:57:20.490Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 78,
            "column": 22
          }
        },
        {
          "name": "Wendy ensures that number of items left does equal 1",
          "outcome": "SUCCESS",
          "duration": 21,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-10-15T09:57:20.956Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 82,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-ensures-that-number-of-items-le-5f4b0ac12f.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2960",
          "timestamp": "2026-10-15T09:57:17.094Z",
          "duration": 2734,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 232,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 89,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:18.303Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-ee4532190a.json",
                      "type": "screenshot"
                    },
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-apisitt-sends-a-get-request-to--https-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 15 Oct 2026 09:56:55 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: d88ffcf21a634603ae8c8fa51144a6f0317329bf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.065947\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 512bc2921795411091527b9a91ed78c0\natl-request-id: 512bc292-1795-4110-9152-7b9a91ed78c0\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"575ba870879e895747aefb78469d166c\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 11ba7cf61f8ee8331f744925c9c4cf68.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: kjCd1fidG9kujtrKDkCrQHLHtk5ZYbJsaVHt_2j-3X7aIgep-BIdUA==\nage: 23",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-10-15T08:59:26.633Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:18.442Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-apisitt-ensures-that-the-status-of-th-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "SUCCESS",
                  "duration": 0,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-15T09:57:18.484Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-apisitt-ensures-that-github-status-do-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:18.302Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              }
            },
            {
              "name": "Wendy starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 1930,
              "children": [
                {
                  "name": "Wendy creates an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 1198,
                  "children": [
                    {
                      "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                      "outcome": "SUCCESS",
                      "duration": 883,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:18.560Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-navigates-to--https---todo-app--7b0b3e7c34.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:19.537Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                        "line": 73,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-ensures-that-website-title-does-7b0b3e7c34.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                      "outcome": "SUCCESS",
                      "duration": 57,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:19.620Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until--what-needs-to-be-d-7b0b3e7c34.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy empties local storage if needed",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [
                        {
                          "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                          "outcome": "SUCCESS",
                          "duration": 19,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-10-15T09:57:19.739Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                            "line": 20,
                            "column": 22
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-15T09:57:19.738Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:18.560Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy records an item called 'Buy dog food'",
                  "outcome": "SUCCESS",
                  "duration": 261,
                  "children": [
                    {
                      "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 37,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:19.758Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-enters--buy-dog-food--into--wha-f81528b487.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 66,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:19.834Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-presses-key-enter-in--what-need-352c3cf374.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:19.953Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until-the-text-of-display-352c3cf374.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:19.758Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called 'Feed the dog'",
                  "outcome": "SUCCESS",
                  "duration": 216,
                  "children": [
                    {
                      "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:20.019Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-enters--feed-the-dog--into--wha-1e634d11d8.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 47,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:20.087Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-presses-key-enter-in--what-need-5bcda1ff33.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:20.173Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until-the-text-of-display-5bcda1ff33.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:20.019Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 255,
                  "children": [
                    {
                      "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:20.235Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-enters--book-a-vet-s-appointmen-03f7e70cee.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 49,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:20.320Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-presses-key-enter-in--what-need-0a88cf2627.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 37,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-15T09:57:20.421Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-waits-until-the-text-of-display-0a88cf2627.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:20.235Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:18.560Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 73,
                "column": 22
              }
            },
            {
              "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
              "outcome": "SUCCESS",
              "duration": 465,
              "children": [
                {
                  "name": "Wendy marks an item called 'Buy dog food' as completed",
                  "outcome": "SUCCESS",
                  "duration": 232,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 232,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 196,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                              "outcome": "SUCCESS",
                              "duration": 144,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-10-15T09:57:20.526Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-clicks-on-toggle-button-of-an-i-9aecc71117.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-10-15T09:57:20.525Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-15T09:57:20.490Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:20.490Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                },
                {
                  "name": "Wendy marks an item called 'Feed the dog' as completed",
                  "outcome": "SUCCESS",
                  "duration": 233,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 233,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 196,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                              "outcome": "SUCCESS",
                              "duration": 135,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-10-15T09:57:20.759Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-clicks-on-toggle-button-of-an-i-5f4b0ac12f.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-10-15T09:57:20.759Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-15T09:57:20.722Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-15T09:57:20.722Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-15T09:57:20.490Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 78,
                "column": 22
              }
            },
            {
              "name": "Wendy ensures that number of items left does equal 1",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-15T09:57:20.956Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 82,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/2960/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-79-wendy-ensures-that-number-of-items-le-5f4b0ac12f.png",
                  "type": "screenshot"
                }
              ]
            }
          ]
        }
      ],
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
        },
        {
          "name": "Wendy",
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
      ],
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers examples to help you practice test automation@serenity-js-mocha-webdriverio-template@chrome 155.0.8059.79@linux"
    }
  ],
  "history": [
    {
      "timestamp": "2026-10-15T09:57:17.094Z",
      "duration": 3936,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2960",
      "slowest": 2734,
      "fastest": 1200,
      "average": 1967,
      "commit": "365acbcedf5abd9ae265f3c4046ad51b4e16c071",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/38716480129",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "browser",
      "name": "chrome 155.0.8059.79",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "platform",
      "name": "linux",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "serenity-js website",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-mocha-webdriverio-template",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.22.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.49.0",
    "testRunner": {
      "name": "Mocha",
      "version": "12.0.3"
    },
    "browsers": [
      {
        "name": "chrome",
        "version": "155.0.8059.79"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2960",
      "branch": "main",
      "commit": "365acbcedf5abd9ae265f3c4046ad51b4e16c071",
      "commitMessage": "chore(deps): update dependency node to v24.22.0 (#1147)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/38716480129",
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
      "passed": 2,
      "failed": 0,
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
          "passed": 2,
          "failed": 0,
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
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "specs"
};
