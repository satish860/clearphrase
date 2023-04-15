// Write a Simple Next.js API Route
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'

const promptTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly format the sentence
- Convert the input text to a specified tone
- Convert the input text to a specified dialect
Here are some examples different Tones:
- Standard: This tutorial provides a brief explanation of how to use LangChain to create an end-to-end language model application.
- Fluency: This article will lead you through the process of creating an end-to-end language model application with LangChain. 
- Formal: This tutorial provides an overview of how to construct an end-to-end language model application using LangChain.
Here are some examples of words in different dialects:
- American: French Fries, cotton candy, apartment, garbage, cookie, green thumb, parking lot, pants, windshield
- British: chips, candyfloss, flag, rubbish, biscuit, green fingers, car park, trousers, windscreen
Example Sentences from each dialect:
- American: I headed straight for the produce section to grab some fresh vegetables, like bell peppers and zucchini. After that, I made my way to the meat department to pick up some chicken breasts.
- British: Well, I popped down to the local shop just the other day to pick up a few bits and bobs. As I was perusing the aisles, I noticed that they were fresh out of biscuits, which was a bit of a disappointment, as I do love a good cuppa with a biscuit or two.


Below is the sentence, tone, and dialect:
TONE: {tone}
DIALECT: {dialect}
sentence: {sentence}

YOUR {dialect} RESPONSE:
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {
    const { tone, dialect, sentence } = req.body;
    const Envir = process.env.OPENAI_API_KEY
    const model = new OpenAI({ openAIApiKey: Envir, temperature: 0.9 })
    const prompt = new PromptTemplate({
      template: promptTemplate,
      inputVariables: ['tone', 'dialect', 'sentence'],
    })
   
    const promptText = await prompt.format({ tone, dialect, sentence: sentence })
    const modelresponse = await model.call(promptText)
    res.status(200).json({ result: modelresponse })
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' })
  }
}
