import express from "express";
import chatRoutes from "./chat";

const router = express.Router();

export default (): express.Router => {
  chatRoutes(router);
  return router;
};
