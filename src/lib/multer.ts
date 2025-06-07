import multer from "multer";
import path from "path";
import { NextApiRequest } from "next";

const storage = multer.memoryStorage();

export const upload = multer({ storage });