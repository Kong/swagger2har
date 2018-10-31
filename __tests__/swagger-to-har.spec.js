import swagger2Har from "../src"
import petStore from "./petstore.json"
import swagger2har_petstore_response from "./swagger2har_petstore_response.json"
import yaml from "js-yaml"
import fs from "fs"

test("swagger v2 JSON converts to HAR", () => {
  const HARs = swagger2Har(petStore)
  const add_a_new_pet = HARs[0]

  expect(JSON.stringify(swagger2har_petstore_response)).toEqual(JSON.stringify(HARs))
})

test("swagger v2 JSON to HAR object can be crawled", () => {
  const HARs = swagger2Har(petStore)
  const add_a_new_pet = HARs[0]
  const postObj = JSON.parse(add_a_new_pet.har.postData.text)

  expect(add_a_new_pet.har.method).toEqual("POST")
  expect(add_a_new_pet.har.url).toEqual("http://petstore.swagger.io/v2/pet")
  expect(add_a_new_pet.har.httpVersion).toEqual("HTTP/1.1")
  expect(postObj).toHaveProperty("category.name")
})

test("swagger v2 YAML to JSON converts to HAR", () => {
  const vitals = yaml.safeLoad(fs.readFileSync(process.cwd() + "/__tests__/vitals.yaml", "utf8"))
  const HARs = swagger2Har(vitals)
  const get_cluster_stats = HARs[0]

  expect(get_cluster_stats.har.method).toEqual("GET")
  expect(get_cluster_stats.har.url).toEqual("http://127.0.0.1:8001/vitals/")
  expect(get_cluster_stats.har.httpVersion).toEqual("HTTP/1.1")
})

test("swagger v3 YAML to JSON converts to HAR", () => {
  const petstore = yaml.safeLoad(fs.readFileSync(process.cwd() + "/__tests__/petstore-expanded-v3.yaml", "utf8"))
  const HARs = swagger2Har(petstore)
  const pets = HARs[0]

  expect(pets.har.method).toEqual("GET")
  expect(pets.har.url).toEqual("http://petstore.swagger.io/api/pets")
  expect(pets.har.httpVersion).toEqual("HTTP/1.1")
})
