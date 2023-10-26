// const app = express();
const jsonServer = require('json-server');
const router = jsonServer.router('./product.json');
const port = process.env.PORT||4000;

// console.log(data);
// key={ image, name, description }

server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on `+port);
});


// app.get("/:id", (req, res) => {
//     const singleProduct = data.map(function(element) {
//         return `${element.image}, ${element.name}, ${element.description}`;
//     });
//     res.json({ element });
//     console.log(singleProduct);
// });



