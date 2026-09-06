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
    "duration": 2865,
    "startedAt": "2026-09-06T17:52:06.955Z",
    "finishedAt": "2026-09-06T17:52:09.820Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "offers a web testing tutorial",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 1116,
      "startedAt": "2026-09-06T17:52:06.955Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 152.0.7977.82"
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
          "duration": 1017,
          "children": [],
          "type": "Task",
          "startedAt": "2026-09-06T17:52:06.973Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 38,
            "column": 22
          }
        },
        {
          "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
          "outcome": "SUCCESS",
          "duration": 35,
          "children": [],
          "type": "Task",
          "startedAt": "2026-09-06T17:52:08.002Z",
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
          "run": "2869",
          "timestamp": "2026-09-06T17:52:06.955Z",
          "duration": 1116,
          "activities": [
            {
              "name": "Alice navigates to \"https://serenity-js.org\"",
              "outcome": "SUCCESS",
              "duration": 1017,
              "children": [],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:06.973Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 38,
                "column": 22
              }
            },
            {
              "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.002Z",
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
      ],
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers a web testing tutorial@serenity-js-mocha-webdriverio-template@chrome 152.0.7977.82@linux"
    },
    {
      "name": "offers examples to help you practice test automation",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 1746,
      "startedAt": "2026-09-06T17:52:08.074Z",
      "source": {
        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts"
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 152.0.7977.82"
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
          "duration": 63,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.081Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2869/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-0d3e820589.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Sun, 06 Sep 2026 17:52:00 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: b8536bb3263783f82c00d8e6cceeefcc798e0b7d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.063845\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: a145174075744fe78feb474e72b9656c\natl-request-id: a1451740-7574-4fe7-8feb-474e72b9656c\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"6b3311d13b092a7716e1348de2bd0013\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 e0bed00f7c599b055dc1b21ec2ba7e72.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: k2DSuoHIVlZZGF3bAsXFTV1HlFZNK8QZJf4RY9eTx9CsFB4s8RqtAA==\nage: 8",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-06T16:14:09.868Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.122Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              }
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.133Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-06T17:52:08.081Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 68,
            "column": 26
          }
        },
        {
          "name": "Wendy starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 1144,
          "children": [
            {
              "name": "Wendy creates an empty todo list",
              "outcome": "SUCCESS",
              "duration": 653,
              "children": [
                {
                  "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                  "outcome": "SUCCESS",
                  "duration": 511,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.184Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.706Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 73,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                  "outcome": "SUCCESS",
                  "duration": 57,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.730Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy empties local storage if needed",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [
                    {
                      "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.798Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.798Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 20,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.184Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 34,
                "column": 22
              }
            },
            {
              "name": "Wendy records an item called 'Buy dog food'",
              "outcome": "SUCCESS",
              "duration": 153,
              "children": [
                {
                  "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.848Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 60,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.894Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  }
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.965Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.847Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called 'Feed the dog'",
              "outcome": "SUCCESS",
              "duration": 141,
              "children": [
                {
                  "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.011Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.053Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  }
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.112Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:09.011Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called \"Book a vet's appointment\"",
              "outcome": "SUCCESS",
              "duration": 155,
              "children": [
                {
                  "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.163Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 48,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.208Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  }
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 40,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.267Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:09.162Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-06T17:52:08.183Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 73,
            "column": 22
          }
        },
        {
          "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
          "outcome": "SUCCESS",
          "duration": 417,
          "children": [
            {
              "name": "Wendy marks an item called 'Buy dog food' as completed",
              "outcome": "SUCCESS",
              "duration": 218,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 208,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                      "outcome": "SUCCESS",
                      "duration": 159,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 148,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-09-06T17:52:09.377Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.377Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.338Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:09.338Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            },
            {
              "name": "Wendy marks an item called 'Feed the dog' as completed",
              "outcome": "SUCCESS",
              "duration": 177,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 167,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                      "outcome": "SUCCESS",
                      "duration": 119,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 107,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-09-06T17:52:09.606Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.605Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.567Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:09.567Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-06T17:52:09.338Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 78,
            "column": 22
          }
        },
        {
          "name": "Wendy ensures that number of items left does equal 1",
          "outcome": "SUCCESS",
          "duration": 23,
          "children": [],
          "type": "Task",
          "startedAt": "2026-09-06T17:52:09.765Z",
          "location": {
            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 82,
            "column": 20
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2869",
          "timestamp": "2026-09-06T17:52:06.955Z",
          "duration": 1746,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 63,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.081Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2869/serenity-js-mocha-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-0d3e820589.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Sun, 06 Sep 2026 17:52:00 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: b8536bb3263783f82c00d8e6cceeefcc798e0b7d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.063845\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: a145174075744fe78feb474e72b9656c\natl-request-id: a1451740-7574-4fe7-8feb-474e72b9656c\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"6b3311d13b092a7716e1348de2bd0013\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 e0bed00f7c599b055dc1b21ec2ba7e72.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: k2DSuoHIVlZZGF3bAsXFTV1HlFZNK8QZJf4RY9eTx9CsFB4s8RqtAA==\nage: 8",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-06T16:14:09.868Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.122Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  }
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.133Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 68,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.081Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 68,
                "column": 26
              }
            },
            {
              "name": "Wendy starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 1144,
              "children": [
                {
                  "name": "Wendy creates an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 653,
                  "children": [
                    {
                      "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                      "outcome": "SUCCESS",
                      "duration": 511,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.184Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      }
                    },
                    {
                      "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.706Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                        "line": 73,
                        "column": 22
                      }
                    },
                    {
                      "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                      "outcome": "SUCCESS",
                      "duration": 57,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.730Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      }
                    },
                    {
                      "name": "Wendy empties local storage if needed",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [
                        {
                          "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                          "outcome": "SUCCESS",
                          "duration": 19,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-09-06T17:52:08.798Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                            "line": 20,
                            "column": 22
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.798Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.184Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy records an item called 'Buy dog food'",
                  "outcome": "SUCCESS",
                  "duration": 153,
                  "children": [
                    {
                      "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.848Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      }
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 60,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.894Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      }
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:08.965Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:08.847Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called 'Feed the dog'",
                  "outcome": "SUCCESS",
                  "duration": 141,
                  "children": [
                    {
                      "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 33,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.011Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      }
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 49,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.053Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      }
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.112Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.011Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 155,
                  "children": [
                    {
                      "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.163Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      }
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 48,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.208Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      }
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 40,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.267Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.162Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:08.183Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 73,
                "column": 22
              }
            },
            {
              "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
              "outcome": "SUCCESS",
              "duration": 417,
              "children": [
                {
                  "name": "Wendy marks an item called 'Buy dog food' as completed",
                  "outcome": "SUCCESS",
                  "duration": 218,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 208,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 159,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                              "outcome": "SUCCESS",
                              "duration": 148,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-09-06T17:52:09.377Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-09-06T17:52:09.377Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.338Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.338Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                },
                {
                  "name": "Wendy marks an item called 'Feed the dog' as completed",
                  "outcome": "SUCCESS",
                  "duration": 177,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 167,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 119,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                              "outcome": "SUCCESS",
                              "duration": 107,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-09-06T17:52:09.606Z",
                              "location": {
                                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-09-06T17:52:09.605Z",
                          "location": {
                            "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-09-06T17:52:09.567Z",
                      "location": {
                        "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-06T17:52:09.567Z",
                  "location": {
                    "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:09.338Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 78,
                "column": 22
              }
            },
            {
              "name": "Wendy ensures that number of items left does equal 1",
              "outcome": "SUCCESS",
              "duration": 23,
              "children": [],
              "type": "Task",
              "startedAt": "2026-09-06T17:52:09.765Z",
              "location": {
                "path": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 82,
                "column": 20
              }
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
      "id": "/__w/serenity-js-mocha-webdriverio-template/serenity-js-mocha-webdriverio-template/test/specs/serenity-js_website.spec.ts:offers examples to help you practice test automation@serenity-js-mocha-webdriverio-template@chrome 152.0.7977.82@linux"
    }
  ],
  "history": [
    {
      "timestamp": "2026-09-06T17:52:06.955Z",
      "duration": 2865,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2869",
      "slowest": 1746,
      "fastest": 1116,
      "average": 1431,
      "commit": "63750702bdd6ca652cf8cbd1817fffdcc995248d",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/34049869850",
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
      "name": "chrome 152.0.7977.82",
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
    "nodeVersion": "v24.20.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.46.0",
    "testRunner": {
      "name": "Mocha",
      "version": "11.8.0"
    },
    "browsers": [
      {
        "name": "chrome",
        "version": "152.0.7977.82"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2869",
      "branch": "main",
      "commit": "63750702bdd6ca652cf8cbd1817fffdcc995248d",
      "commitMessage": "fix(deps): update webdriverio monorepo to ^9.31.6 (#1130)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions/runs/34049869850",
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
