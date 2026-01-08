
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const body = req.body;
  const userInput = body.message;

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Du bist Nilay's Workshop-KI. Hilf beim Planen, Strukturieren und Anpassen von Workshops. Stelle Rückfragen bei Unklarheiten." },
      { role: "user", content: userInput }
    ],
  });

  res.status(200).json({ reply: response.data.choices[0].message.content });
}
