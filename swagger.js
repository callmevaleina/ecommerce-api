const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce",
            version: "1.0.0",
            description: "API that is used to create a Perfumery Ecommerce"
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        "./src/models/user.models.js",
        "./src/routes/auth.routes.js",
        "./src/models/product.models.js",
        "./src/routes/product.routes.js",
        "./src/models/cart.models.js",
        "./src/routes/cart.routes.js",
        "./src/models/purchase.models.js",
        "./src/routes/purchase.routes.js",
    ]
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port)=>{
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    app.get("/api/v1/docs.json", (req, res)=>{

        res.setHeader("ContentType", "application/json");
        res.send(swaggerSpec)
    })
};

module.exports = swaggerDocs;

