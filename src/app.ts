import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "@lib/index";
import swaggerUi from "swagger-ui-express";

// Swagger File
import * as swaggerDocument from "./swagger.json";

import routes from "@routes/index";
import { responseHandler } from "@helpers/response-handler";
import { requestSizeHandler } from "./api/middlewares/request-size";
import { MAX_REQUEST_SIZE } from "./config/index";
import { errorHandler } from "@helpers/error-Handler";

config();

const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(
  express.json({
    limit: MAX_REQUEST_SIZE,
  })
); // Accept Request body

// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Limit Payload size
app.use(requestSizeHandler);

// Response Handlers
app.use(responseHandler);

// Database 
(async () => {
  await connectToDatabase();
})()

// Routes
app.use("/api", routes);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
