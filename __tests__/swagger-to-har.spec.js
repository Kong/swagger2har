import swagger2Har from '../src/swagger-to-har'
import petStore from './petstore.json'
import yaml from 'js-yaml'
import fs from 'fs'

test('swagger JSON converts to HAR', () => {
  const HARs = swagger2Har(petStore)

  const add_a_new_pet = HARs[0];
  
  expect(add_a_new_pet.har.method).toEqual('POST')
  expect(add_a_new_pet.har.url).toEqual('http://petstore.swagger.io/v2/pet')
  expect(add_a_new_pet.har.httpVersion).toEqual('HTTP/1.1')

  const postObj = JSON.parse(add_a_new_pet.har.postData.text)  
  expect(postObj).toHaveProperty('category.name')
});

test('swagger YAML to JSON converts to HAR', () => {
  var vitals = yaml.safeLoad(fs.readFileSync(process.cwd() + '/__tests__/vitals.yaml', 'utf8'));
  
  const HARs = swagger2Har(vitals)

  const get_cluster_stats = HARs[0];

  expect(get_cluster_stats.har.method).toEqual('GET')
  expect(get_cluster_stats.har.url).toEqual('http://127.0.0.1:8001/vitals/')
  expect(get_cluster_stats.har.httpVersion).toEqual('HTTP/1.1')
});
