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
    "duration": 4714,
    "startedAt": "2026-10-09T05:47:53.175Z",
    "finishedAt": "2026-10-09T05:47:57.889Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "offers a web testing tutorial",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 1216,
      "startedAt": "2026-10-09T05:47:53.175Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 155.0.8059.39"
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
          "duration": 1010,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-10-09T05:47:53.193Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 38,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-alice-navigates-to--https---serenity--3b7d2e5127.png",
              "type": "screenshot"
            }
          ]
        },
        {
          "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
          "outcome": "SUCCESS",
          "duration": 29,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-10-09T05:47:54.276Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 39,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-alice-ensures-that-the-text-of-page-e-3b7d2e5127.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2943",
          "timestamp": "2026-10-09T05:47:53.175Z",
          "duration": 1216,
          "activities": [
            {
              "name": "Alice navigates to \"https://serenity-js.org\"",
              "outcome": "SUCCESS",
              "duration": 1010,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-09T05:47:53.193Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 38,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-alice-navigates-to--https---serenity--3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
              "outcome": "SUCCESS",
              "duration": 29,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-09T05:47:54.276Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 39,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-alice-ensures-that-the-text-of-page-e-3b7d2e5127.png",
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
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers a web testing tutorial@serenity-js-mocha-webdriverio-template@chrome 155.0.8059.39@linux"
    },
    {
      "name": "offers examples to help you practice test automation",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 3496,
      "startedAt": "2026-10-09T05:47:54.393Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 155.0.8059.39"
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
          "duration": 270,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 125,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-09T05:47:54.399Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-09de9cac68.json",
                  "type": "screenshot"
                },
                {
                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-apisitt-sends-a-get-request-to--https-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Fri, 09 Oct 2026 05:47:50 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 31499eb207ca6df8ac9dece0ce5ed3c20bd69620\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.058028\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: ebf8369707324e6091a37dca3343c5d9\natl-request-id: ebf83697-0732-4e60-91a3-7dca3343c5d9\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"cd57bc8cc86ac1e07ebee2a4ff64d4f8\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 de04a7f45d43d28125c2a98cf02d48f2.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: Smj2H0DfTILkGZaaVDyhJY4Ym9OaiFAKa0xDMWDpfe74H5tStpfCcQ==\nage: 4",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-10-09T05:12:19.334Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-09T05:47:54.566Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-apisitt-ensures-that-the-status-of-th-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-09T05:47:54.618Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-apisitt-ensures-that-github-status-do-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            }
          ],
          "type": "Task",
          "startedAt": "2026-10-09T05:47:54.399Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 68,
            "column": 26
          }
        },
        {
          "name": "Wendy starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 2539,
          "children": [
            {
              "name": "Wendy creates an empty todo list",
              "outcome": "SUCCESS",
              "duration": 1733,
              "children": [
                {
                  "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                  "outcome": "SUCCESS",
                  "duration": 919,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:54.707Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-navigates-to--https---todo-app--04a270aa93.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:55.697Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 73,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-ensures-that-website-title-does-04a270aa93.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                  "outcome": "SUCCESS",
                  "duration": 580,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:55.780Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until--what-needs-to-be-d-7b0b3e7c34.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy empties local storage if needed",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [
                    {
                      "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-10-09T05:47:56.402Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:56.402Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 20,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:54.707Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 34,
                "column": 22
              }
            },
            {
              "name": "Wendy records an item called 'Buy dog food'",
              "outcome": "SUCCESS",
              "duration": 251,
              "children": [
                {
                  "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:56.451Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-enters--buy-dog-food--into--wha-f81528b487.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 62,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:56.534Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-presses-key-enter-in--what-need-352c3cf374.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:56.638Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until-the-text-of-display-352c3cf374.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:56.451Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called 'Feed the dog'",
              "outcome": "SUCCESS",
              "duration": 244,
              "children": [
                {
                  "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:56.712Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-enters--feed-the-dog--into--wha-1e634d11d8.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:56.781Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-presses-key-enter-in--what-need-5bcda1ff33.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:56.864Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until-the-text-of-display-5bcda1ff33.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:56.712Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called \"Book a vet's appointment\"",
              "outcome": "SUCCESS",
              "duration": 269,
              "children": [
                {
                  "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:56.966Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-enters--book-a-vet-s-appointmen-03f7e70cee.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:57.049Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-presses-key-enter-in--what-need-0a88cf2627.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:57.156Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until-the-text-of-display-0a88cf2627.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:56.966Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-10-09T05:47:54.706Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 73,
            "column": 22
          }
        },
        {
          "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
          "outcome": "SUCCESS",
          "duration": 527,
          "children": [
            {
              "name": "Wendy marks an item called 'Buy dog food' as completed",
              "outcome": "SUCCESS",
              "duration": 265,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 255,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                      "outcome": "SUCCESS",
                      "duration": 197,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 146,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-10-09T05:47:57.304Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-clicks-on-toggle-button-of-an-i-9aecc71117.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-09T05:47:57.303Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:57.256Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:57.256Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            },
            {
              "name": "Wendy marks an item called 'Feed the dog' as completed",
              "outcome": "SUCCESS",
              "duration": 242,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 231,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                      "outcome": "SUCCESS",
                      "duration": 184,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 123,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-10-09T05:47:57.568Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-clicks-on-toggle-button-of-an-i-5f4b0ac12f.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-09T05:47:57.568Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:57.531Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:57.531Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-10-09T05:47:57.256Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 78,
            "column": 22
          }
        },
        {
          "name": "Wendy ensures that number of items left does equal 1",
          "outcome": "SUCCESS",
          "duration": 33,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-10-09T05:47:57.793Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 82,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-ensures-that-number-of-items-le-5f4b0ac12f.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2943",
          "timestamp": "2026-10-09T05:47:53.175Z",
          "duration": 3496,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 270,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 125,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:54.399Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-09de9cac68.json",
                      "type": "screenshot"
                    },
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-apisitt-sends-a-get-request-to--https-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Fri, 09 Oct 2026 05:47:50 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 31499eb207ca6df8ac9dece0ce5ed3c20bd69620\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.058028\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: ebf8369707324e6091a37dca3343c5d9\natl-request-id: ebf83697-0732-4e60-91a3-7dca3343c5d9\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"cd57bc8cc86ac1e07ebee2a4ff64d4f8\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 de04a7f45d43d28125c2a98cf02d48f2.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: Smj2H0DfTILkGZaaVDyhJY4Ym9OaiFAKa0xDMWDpfe74H5tStpfCcQ==\nage: 4",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-10-09T05:12:19.334Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:54.566Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-apisitt-ensures-that-the-status-of-th-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-10-09T05:47:54.618Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-apisitt-ensures-that-github-status-do-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:54.399Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              }
            },
            {
              "name": "Wendy starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 2539,
              "children": [
                {
                  "name": "Wendy creates an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 1733,
                  "children": [
                    {
                      "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                      "outcome": "SUCCESS",
                      "duration": 919,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:54.707Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-navigates-to--https---todo-app--04a270aa93.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:55.697Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                        "line": 73,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-ensures-that-website-title-does-04a270aa93.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                      "outcome": "SUCCESS",
                      "duration": 580,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:55.780Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until--what-needs-to-be-d-7b0b3e7c34.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy empties local storage if needed",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [
                        {
                          "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                          "outcome": "SUCCESS",
                          "duration": 18,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-10-09T05:47:56.402Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                            "line": 20,
                            "column": 22
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-09T05:47:56.402Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:54.707Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy records an item called 'Buy dog food'",
                  "outcome": "SUCCESS",
                  "duration": 251,
                  "children": [
                    {
                      "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:56.451Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-enters--buy-dog-food--into--wha-f81528b487.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 62,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:56.534Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-presses-key-enter-in--what-need-352c3cf374.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:56.638Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until-the-text-of-display-352c3cf374.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:56.451Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called 'Feed the dog'",
                  "outcome": "SUCCESS",
                  "duration": 244,
                  "children": [
                    {
                      "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:56.712Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-enters--feed-the-dog--into--wha-1e634d11d8.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:56.781Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-presses-key-enter-in--what-need-5bcda1ff33.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:56.864Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until-the-text-of-display-5bcda1ff33.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:56.712Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 269,
                  "children": [
                    {
                      "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 33,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:56.966Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-enters--book-a-vet-s-appointmen-03f7e70cee.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:57.049Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-presses-key-enter-in--what-need-0a88cf2627.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 38,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-10-09T05:47:57.156Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-waits-until-the-text-of-display-0a88cf2627.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:56.966Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:54.706Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 73,
                "column": 22
              }
            },
            {
              "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
              "outcome": "SUCCESS",
              "duration": 527,
              "children": [
                {
                  "name": "Wendy marks an item called 'Buy dog food' as completed",
                  "outcome": "SUCCESS",
                  "duration": 265,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 255,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 197,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                              "outcome": "SUCCESS",
                              "duration": 146,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-10-09T05:47:57.304Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-clicks-on-toggle-button-of-an-i-9aecc71117.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-10-09T05:47:57.303Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-09T05:47:57.256Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:57.256Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                },
                {
                  "name": "Wendy marks an item called 'Feed the dog' as completed",
                  "outcome": "SUCCESS",
                  "duration": 242,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 231,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 184,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                              "outcome": "SUCCESS",
                              "duration": 123,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-10-09T05:47:57.568Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-clicks-on-toggle-button-of-an-i-5f4b0ac12f.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-10-09T05:47:57.568Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-10-09T05:47:57.531Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-10-09T05:47:57.531Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-10-09T05:47:57.256Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 78,
                "column": 22
              }
            },
            {
              "name": "Wendy ensures that number of items left does equal 1",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-10-09T05:47:57.793Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 82,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/2943/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-155-0-8059-39-wendy-ensures-that-number-of-items-le-5f4b0ac12f.png",
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
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers examples to help you practice test automation@serenity-js-mocha-webdriverio-template@chrome 155.0.8059.39@linux"
    }
  ],
  "history": [
    {
      "timestamp": "2026-10-09T05:47:53.175Z",
      "duration": 4714,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2943",
      "slowest": 3496,
      "fastest": 1216,
      "average": 2356,
      "commit": "7435f7f92d16da5e03cf0381f47d95c77250b1bb",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/37890110125",
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
      "name": "chrome 155.0.8059.39",
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
    "nodeVersion": "v24.21.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.48.2",
    "testRunner": {
      "name": "Mocha",
      "version": "11.8.0"
    },
    "browsers": [
      {
        "name": "chrome",
        "version": "155.0.8059.39"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2943",
      "branch": "main",
      "commit": "7435f7f92d16da5e03cf0381f47d95c77250b1bb",
      "commitMessage": "fix(deps): update serenity/js and playwright to ^3.48.2 (#1144)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/37890110125",
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
