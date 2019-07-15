const { getAll } = require("../src")
const nexploitSwagger = require("./nexploit_swagger")
const githubSwagger = require("./github_swagger")
const { safeLoad } = require("js-yaml")
const { readFileSync } = require("fs")

test("NexPloit swagger v2 JSON to HAR", () => {
  const [firstRequest] = getAll(nexploitSwagger)
  const { har } = firstRequest

  expect(har.method).toEqual("GET")
  expect(har.url).toEqual("https://nexploit.app/api/v1/agents")
  expect(har.httpVersion).toEqual("HTTP/1.1")
})

test("GitHub swagger v2 JSON to HAR", () => {
  const [firstRequest] = getAll(githubSwagger)
  const { har } = firstRequest

  expect(har.method).toEqual("GET")
  expect(har.url).toEqual("https://api.github.com/emojis")
  expect(har.httpVersion).toEqual("HTTP/1.1")
})


test("Petstore OpenApi v3 YAML to JSON converts to HAR", () => {
  const content = safeLoad(readFileSync(process.cwd() + "/__tests__/petstore_oas.yaml", "utf8"))
  const [firstRequest] = getAll(content)
  const { har } = firstRequest

  expect(har.method).toEqual("PUT")
  expect(har.url).toEqual("https://petstore.swagger.io/v2/pet")
  expect(har.httpVersion).toEqual("HTTP/1.1")
})
