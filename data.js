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
    "duration": 3431,
    "startedAt": "2026-11-12T10:46:32.656Z",
    "finishedAt": "2026-11-12T10:46:36.087Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "offers a web testing tutorial",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 1298,
      "startedAt": "2026-11-12T10:46:32.656Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 157.0.8103.78"
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
          "duration": 1126,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-12T10:46:32.670Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 38,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-alice-navigates-to--https---serenity--3b7d2e5127.png",
              "type": "screenshot"
            }
          ]
        },
        {
          "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
          "outcome": "SUCCESS",
          "duration": 32,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-12T10:46:33.847Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 39,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-alice-ensures-that-the-text-of-page-e-3b7d2e5127.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2998",
          "timestamp": "2026-11-12T10:46:32.656Z",
          "duration": 1298,
          "activities": [
            {
              "name": "Alice navigates to \"https://serenity-js.org\"",
              "outcome": "SUCCESS",
              "duration": 1126,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-12T10:46:32.670Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 38,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-alice-navigates-to--https---serenity--3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            },
            {
              "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
              "outcome": "SUCCESS",
              "duration": 32,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-12T10:46:33.847Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 39,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-alice-ensures-that-the-text-of-page-e-3b7d2e5127.png",
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
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers a web testing tutorial@serenity-js-mocha-webdriverio-template@chrome 157.0.8103.78@linux"
    },
    {
      "name": "offers examples to help you practice test automation",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 2131,
      "startedAt": "2026-11-12T10:46:33.956Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 157.0.8103.78"
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
          "duration": 267,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 134,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-12T10:46:33.961Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-f85e6aecb3.json",
                  "type": "screenshot"
                },
                {
                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-apisitt-sends-a-get-request-to--https-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 12 Nov 2026 10:46:31 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 7e1886ffe3f153b4f200cccb1067836adc233065\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.153912\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: a469a96369dc44b68e9e15471d37f73a\natl-request-id: a469a963-69dc-44b6-8e9e-15471d37f73a\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"ab4c0af877c242c77f3043c7300e3ee0\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 44560179599d3ceafce5daacf7e6a68a.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: BcQicIZg3-Xhr0WGXDE4qDVoj-v3cESqshqccheqf9DH1MmOcDbp2Q==\nage: 3",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-12T08:54:11.894Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-12T10:46:34.125Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-apisitt-ensures-that-the-status-of-th-3b7d2e5127.png",
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
              "startedAt": "2026-11-12T10:46:34.177Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-apisitt-ensures-that-github-status-do-3b7d2e5127.png",
                  "type": "screenshot"
                }
              ]
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-12T10:46:33.961Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 68,
            "column": 26
          }
        },
        {
          "name": "Wendy starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 1376,
          "children": [
            {
              "name": "Wendy creates an empty todo list",
              "outcome": "SUCCESS",
              "duration": 683,
              "children": [
                {
                  "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                  "outcome": "SUCCESS",
                  "duration": 443,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:34.248Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-navigates-to--https---todo-app--7b0b3e7c34.png",
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
                  "startedAt": "2026-11-12T10:46:34.752Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 73,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-ensures-that-website-title-does-7b0b3e7c34.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:34.817Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until--what-needs-to-be-d-7b0b3e7c34.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy empties local storage if needed",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [
                    {
                      "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-11-12T10:46:34.917Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:34.916Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 20,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:34.248Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 34,
                "column": 22
              }
            },
            {
              "name": "Wendy records an item called 'Buy dog food'",
              "outcome": "SUCCESS",
              "duration": 245,
              "children": [
                {
                  "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:34.931Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-enters--buy-dog-food--into--wha-f81528b487.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 59,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:35.010Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-presses-key-enter-in--what-need-352c3cf374.png",
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
                  "startedAt": "2026-11-12T10:46:35.111Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until-the-text-of-display-352c3cf374.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:34.931Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called 'Feed the dog'",
              "outcome": "SUCCESS",
              "duration": 233,
              "children": [
                {
                  "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:35.176Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-enters--feed-the-dog--into--wha-1e634d11d8.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:35.253Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-presses-key-enter-in--what-need-5bcda1ff33.png",
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
                  "startedAt": "2026-11-12T10:46:35.350Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until-the-text-of-display-5bcda1ff33.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:35.176Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called \"Book a vet's appointment\"",
              "outcome": "SUCCESS",
              "duration": 215,
              "children": [
                {
                  "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:35.410Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-enters--book-a-vet-s-appointmen-03f7e70cee.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 40,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:35.478Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-presses-key-enter-in--what-need-0a88cf2627.png",
                      "type": "screenshot"
                    }
                  ]
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:35.560Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until-the-text-of-display-0a88cf2627.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:35.409Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-12T10:46:34.248Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 73,
            "column": 22
          }
        },
        {
          "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
          "outcome": "SUCCESS",
          "duration": 384,
          "children": [
            {
              "name": "Wendy marks an item called 'Buy dog food' as completed",
              "outcome": "SUCCESS",
              "duration": 204,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 204,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                      "outcome": "SUCCESS",
                      "duration": 172,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 131,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-11-12T10:46:35.657Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-clicks-on-toggle-button-of-an-i-9aecc71117.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-11-12T10:46:35.656Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:35.625Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:35.625Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            },
            {
              "name": "Wendy marks an item called 'Feed the dog' as completed",
              "outcome": "SUCCESS",
              "duration": 180,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 180,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                      "outcome": "SUCCESS",
                      "duration": 143,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 113,
                          "children": [],
                          "type": "Interaction",
                          "startedAt": "2026-11-12T10:46:35.866Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          },
                          "artifacts": [
                            {
                              "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-clicks-on-toggle-button-of-an-i-5f4b0ac12f.png",
                              "type": "screenshot"
                            }
                          ]
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-11-12T10:46:35.866Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:35.829Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:35.829Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-12T10:46:35.625Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 78,
            "column": 22
          }
        },
        {
          "name": "Wendy ensures that number of items left does equal 1",
          "outcome": "SUCCESS",
          "duration": 16,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-12T10:46:36.010Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 82,
            "column": 20
          },
          "artifacts": [
            {
              "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-ensures-that-number-of-items-le-5f4b0ac12f.png",
              "type": "screenshot"
            }
          ]
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2998",
          "timestamp": "2026-11-12T10:46:32.656Z",
          "duration": 2131,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 267,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 134,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:33.961Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-f85e6aecb3.json",
                      "type": "screenshot"
                    },
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-apisitt-sends-a-get-request-to--https-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 12 Nov 2026 10:46:31 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 7e1886ffe3f153b4f200cccb1067836adc233065\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.153912\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: a469a96369dc44b68e9e15471d37f73a\natl-request-id: a469a963-69dc-44b6-8e9e-15471d37f73a\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"ab4c0af877c242c77f3043c7300e3ee0\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 44560179599d3ceafce5daacf7e6a68a.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: BcQicIZg3-Xhr0WGXDE4qDVoj-v3cESqshqccheqf9DH1MmOcDbp2Q==\nage: 3",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-12T08:54:11.894Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-12T10:46:34.125Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-apisitt-ensures-that-the-status-of-th-3b7d2e5127.png",
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
                  "startedAt": "2026-11-12T10:46:34.177Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-apisitt-ensures-that-github-status-do-3b7d2e5127.png",
                      "type": "screenshot"
                    }
                  ]
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:33.961Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              }
            },
            {
              "name": "Wendy starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 1376,
              "children": [
                {
                  "name": "Wendy creates an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 683,
                  "children": [
                    {
                      "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                      "outcome": "SUCCESS",
                      "duration": 443,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:34.248Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-navigates-to--https---todo-app--7b0b3e7c34.png",
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
                      "startedAt": "2026-11-12T10:46:34.752Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                        "line": 73,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-ensures-that-website-title-does-7b0b3e7c34.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:34.817Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until--what-needs-to-be-d-7b0b3e7c34.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy empties local storage if needed",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [
                        {
                          "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                          "outcome": "SUCCESS",
                          "duration": 14,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-11-12T10:46:34.917Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                            "line": 20,
                            "column": 22
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-11-12T10:46:34.916Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:34.248Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy records an item called 'Buy dog food'",
                  "outcome": "SUCCESS",
                  "duration": 245,
                  "children": [
                    {
                      "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 27,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:34.931Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-enters--buy-dog-food--into--wha-f81528b487.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 59,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:35.010Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-presses-key-enter-in--what-need-352c3cf374.png",
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
                      "startedAt": "2026-11-12T10:46:35.111Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until-the-text-of-display-352c3cf374.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:34.931Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called 'Feed the dog'",
                  "outcome": "SUCCESS",
                  "duration": 233,
                  "children": [
                    {
                      "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:35.176Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-enters--feed-the-dog--into--wha-1e634d11d8.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:35.253Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-presses-key-enter-in--what-need-5bcda1ff33.png",
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
                      "startedAt": "2026-11-12T10:46:35.350Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until-the-text-of-display-5bcda1ff33.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:35.176Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 215,
                  "children": [
                    {
                      "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:35.410Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-enters--book-a-vet-s-appointmen-03f7e70cee.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 40,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:35.478Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-presses-key-enter-in--what-need-0a88cf2627.png",
                          "type": "screenshot"
                        }
                      ]
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-12T10:46:35.560Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-waits-until-the-text-of-display-0a88cf2627.png",
                          "type": "screenshot"
                        }
                      ]
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:35.409Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:34.248Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 73,
                "column": 22
              }
            },
            {
              "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
              "outcome": "SUCCESS",
              "duration": 384,
              "children": [
                {
                  "name": "Wendy marks an item called 'Buy dog food' as completed",
                  "outcome": "SUCCESS",
                  "duration": 204,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 204,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 172,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                              "outcome": "SUCCESS",
                              "duration": 131,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-11-12T10:46:35.657Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-clicks-on-toggle-button-of-an-i-9aecc71117.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-11-12T10:46:35.656Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-11-12T10:46:35.625Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:35.625Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                },
                {
                  "name": "Wendy marks an item called 'Feed the dog' as completed",
                  "outcome": "SUCCESS",
                  "duration": 180,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 180,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 143,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                              "outcome": "SUCCESS",
                              "duration": 113,
                              "children": [],
                              "type": "Interaction",
                              "startedAt": "2026-11-12T10:46:35.866Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              },
                              "artifacts": [
                                {
                                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-clicks-on-toggle-button-of-an-i-5f4b0ac12f.png",
                                  "type": "screenshot"
                                }
                              ]
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-11-12T10:46:35.866Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-11-12T10:46:35.829Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-12T10:46:35.829Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-12T10:46:35.625Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 78,
                "column": 22
              }
            },
            {
              "name": "Wendy ensures that number of items left does equal 1",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-12T10:46:36.010Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 82,
                "column": 20
              },
              "artifacts": [
                {
                  "path": "test-runs/2998/serenity-js-mocha-webdriverio-template-1/screenshot-linux-chrome-157-0-8103-78-wendy-ensures-that-number-of-items-le-5f4b0ac12f.png",
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
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers examples to help you practice test automation@serenity-js-mocha-webdriverio-template@chrome 157.0.8103.78@linux"
    }
  ],
  "history": [
    {
      "timestamp": "2026-11-12T10:46:32.656Z",
      "duration": 3431,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2998",
      "slowest": 2131,
      "fastest": 1298,
      "average": 1715,
      "commit": "1e074f7a6630e9567e8613966e502cb1924159c4",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/43203128716",
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
      "name": "chrome 157.0.8103.78",
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
    "nodeVersion": "v24.22.3",
    "os": {
      "name": "linux",
      "version": "7.0.0-1019-azure",
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
        "version": "157.0.8103.78"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2998",
      "branch": "main",
      "commit": "1e074f7a6630e9567e8613966e502cb1924159c4",
      "commitMessage": "chore(deps): update dependency node to v24.22.3 (#1153)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/43203128716",
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
