import express from "express";
import { getBook } from "../conrollers/bookController.js";

const router = express.Router();

router.get("/", getBook);

export default router;