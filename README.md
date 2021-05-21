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
## Testing

```bash
npm run test
```
