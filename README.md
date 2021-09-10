This is fork of [swagger2har](https://github.com/Kong/swagger2har/) with very minimal modifications for a certian usecase(`import swagger to dothttp`). visit https://github.com/Kong/swagger2har/

# swagger2har

Transform you Swagger OAI spec files to a series of HAR request objects.

* http://swagger.io/specification/
* http://www.softwareishard.com/blog/har-12-spec/#request

## Setup

```bash
npm install
```

## Usage



Using as a ES module:
```js
import { swagger2har }  from 'swagger2har';
import swaggerJSON from 'your-swagger-api.json'; // e.g. http://petstore.swagger.io/v2/swagger.json

swagger2har(swaggerJSON);
```

To create HAR Request object for one path and method pair described in a given swagger use createHar directly

```js
import { createHar }  from 'swagger2har';
import swaggerJSON from 'your-swagger-api.json'; // e.g. http://petstore.swagger.io/v2/swagger.json

createHar(swaggerJSON, '/pet/findByTags', 'get', 'http://petstore.swagger.io');
```

## Testing

```bash
npm run test
```
