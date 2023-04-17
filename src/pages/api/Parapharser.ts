// Write a Simple Next.js API Route
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'

const standardTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly format the sentence
- Convert the input text to a specified tone
- Correct the grammar and spelling

Here are some examples of properly formatted sentences:
- This afternoon, my boss and I will meet to talk about how the project is coming along.
- The contract is being examined by attorneys to make sure all of the clauses are valid under the law.
- The client has to be contacted again so we may address their concerns and address any questions they may have.
- The legal group is looking at the situation carefully to identify any potential liabilities.

Below is the sentence, tone:
TONE: {tone}
sentence: {sentence}

YOUR {tone} RESPONSE:
`

const FluencyTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly format the sentence in Fluent English
- Convert the input text to a specified tone
- Correct the grammar and spelling

Here are some examples of Fluent Tone:
- This afternoon, I'll meet with my supervisor to discuss my project progress.
- The contract is being reviewed by lawyers to ensure that all of the terms and conditions are legally valid.
- We must plan a call with the client to discuss their concerns and answer any questions they may have.
- The legal team is doing an extensive examination to ascertain any potential obligations.
- To guarantee compliance with all applicable laws and regulations, I must review the company's policies and procedures.

Below is the sentence, tone:
TONE: {tone}
sentence: {sentence}

YOUR {tone} RESPONSE:
`

const FormalTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly format the sentence in Formal English
- Convert the input text to a specified tone
- Correct the grammar and spelling

Here are some examples of Formal Tone:
-This afternoon, I will meet with my supervisor to discuss my project progress.
-The attorneys are evaluating the contract to ensure that all terms and conditions comply with the law.
-We must schedule a follow-up call with the client in order to address their concerns and answer their inquiries.
-The legal team is conducting a comprehensive investigation to identify any potential liabilities.
-To ensure compliance with all applicable laws and regulations, I must review the company's policies and procedures.

Below is the sentence, tone:
TONE: {tone}
sentence: {sentence}

YOUR {tone} RESPONSE:
`

const SimpleTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly simplify the sentence without changing the meaning
- Convert the input text to a specified tone
- Correct the grammar and spelling

Here are some examples Simple Tone:
- This afternoon, I'm meeting with my boss to talk about how the project is going.
- Lawyers are looking over the contract to make sure that all of the terms and conditions are acceptable.
- We need to set up a follow-up call with the client to talk about their worries and answer any questions they may have.
- The law team is looking into the situation carefully to see if anyone could be held responsible.
- I have to look over the company's policies and processes to make sure they follow all laws and rules.

Below is the sentence, tone:
TONE: {tone}
sentence: {sentence}

YOUR {tone} RESPONSE:
`

const CreativeTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Convert the sentence to a creative tone like social media influencer
- Make sure the meaning reamins the same
- Correct the grammar and spelling

Here are some examples of this Tone:
- Excited to meet with my boss this afternoon to discuss the progress of the project! #worklife #career #meetingtime
- Just had a meeting with my legal team to review the contract and ensure that all terms and conditions meet our standards. #business #legal #contracts
- Hey guys! It's crucial that we schedule a follow-up call with our amazing client to address their concerns and provide them with the answers they need. Let's make sure we're giving them the top-notch service they deserve! #clientcare #customerservice #followup
- The legal team is meticulously examining the situation to determine if anyone can be held accountable. #legalteam #responsibility #justice
- Just spent some time reviewing my company's policies and processes to ensure that we are in compliance with all laws and regulations. #compliance #lawabidingcitizen #corporatelife

Below is the sentence, tone:
TONE: {tone}
sentence: {sentence}

YOUR {tone} RESPONSE:
`



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { tone, sentence } = req.body
    const Envir = process.env.OPENAI_API_KEY
    const model = new OpenAI({ openAIApiKey: Envir, temperature: 0.9 })
    if(tone === 'Fluency'){
      var promptTemplate = FluencyTemplate
    } else if(tone === 'Formal'){
      var promptTemplate = FormalTemplate
    }
    else if(tone === 'Simple'){
      var promptTemplate = SimpleTemplate
    }
    else if(tone === 'Creative'){
      var promptTemplate = CreativeTemplate
    }
    else{ 
      var promptTemplate = standardTemplate
    }
    const prompt = new PromptTemplate({
      template: promptTemplate,
      inputVariables: ['tone', 'sentence'],
    })

    const promptText = await prompt.format({ tone, sentence: sentence })
    const modelresponse = await model.call(promptText)
    res.status(200).json({ result: modelresponse })
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' })
  }
}