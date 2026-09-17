// import OpenAI from "openai";

// const ai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//     baseURL: process.env.OPENAI_BASE_URL,
// });

// export default ai

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

console.log(
  "GEMINI KEY EXISTS:",
  Boolean(process.env.GEMINI_API_KEY)
);

export default ai;

