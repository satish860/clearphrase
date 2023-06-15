// Write a Simple Next.js API Route
import { NextResponse, NextRequest } from "next/server";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { CallbackManager } from "langchain/callbacks";

const standardTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly format the sentence
- Convert the input text to a specified tone
- Correct the grammar and spelling
- Do not generate an output for a single char input. 
- If the user has formed an incomplete word or sentence, the model should return an error message 

Here are some examples of properly formatted sentences:
- This afternoon, my boss and I will meet to talk about how the project is coming along.
- The contract is being examined by attorneys to make sure all of the clauses are valid under the law.
- The client has to be contacted again so we may address their concerns and address any questions they may have.
- The legal group is looking at the situation carefully to identify any potential liabilities.

Below is the sentence, tone:
TONE: {tone}
sentence: {sentence}

YOUR {tone} RESPONSE:
`;

const FluencyTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly format the sentence in Fluent English
- Convert the input text to a specified tone
- Correct the grammar and spelling
- Do not generate an output for a single char input. 
- If the user has formed an incomplete word or sentence, the model should return an error message 

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
`;

const FormalTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly format the sentence in Formal English
- Convert the input text to a specified tone
- Correct the grammar and spelling
- Do not generate an output for a single char input. 
- If the user has formed an incomplete word or sentence, the model should return an error message 

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
`;

const SimpleTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Properly simplify the sentence without changing the meaning
- Convert the input text to a specified tone
- Correct the grammar and spelling
- Do not generate an output for a single char input. 
- If the user has formed an incomplete word or sentence, the model should return an error message 

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
`;

const CreativeTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to:
- Convert the sentence to a creative tone like social media influencer
- Make sure the meaning reamins the same
- Correct the grammar and spelling
- Do not generate an output for a single char input. 
- If the user has formed an incomplete word or sentence, the model should return an error message 

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
`;
const SummarizeTemplate = `
Below is an sentence that may be poorly worded.
Your goal is to: 
- Strip away the extra words to provide a clear message with less words as possible
- Correct the grammar and spelling
- Do not generate an output for a single char input. 
- If the user has formed an incomplete word or sentence, the model should return an error message 

Here are some examples of this Tone:
- The new COVID-19 vaccine has been approved for use by the FDA. The vaccine has shown to be highly effective in preventing the spread of the virus, with a success rate of over 95%. It is recommended for use by individuals over the age of 16 and has been approved for emergency use in the United States.
- In recent years, there has been a growing concern over climate change and its impact on the environment. The use of fossil fuels has been identified as a major contributor to the problem, and many countries have implemented policies to reduce their use. Renewable energy sources such as wind and solar power are becoming increasingly popular, as they offer a cleaner and more sustainable alternative to traditional energy sources.
- Artificial intelligence is changing the way we live and work. With its ability to process large amounts of data and identify patterns, AI is being used in a wide range of applications, from voice recognition software to self-driving cars. While there are concerns over the potential impact of AI on jobs and privacy, many experts believe that it has the potential to revolutionize numerous industries and improve our lives in countless ways.

Below is the sentence, tone:
TONE: {tone}
sentence: {sentence}

YOUR {tone} RESPONSE:
`;

export default async function handler(req: NextRequest) {
  if (req.method === "POST") {
    const rem = await req.json();
    const tone = rem.tone;
    const sentence = rem.sentence;
    const Envir = process.env.OPENAI_API_KEY;

    // const model = new OpenAI({ openAIApiKey: Envir, temperature: 0.9 })
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    if (tone === "Fluency") {
      var promptTemplate = FluencyTemplate;
    } else if (tone === "Formal") {
      var promptTemplate = FormalTemplate;
    } else if (tone === "Simple") {
      var promptTemplate = SimpleTemplate;
    } else if (tone === "Creative") {
      var promptTemplate = CreativeTemplate;
    } else if (tone === "Summarize") {
      var promptTemplate = SummarizeTemplate;
    } else {
      var promptTemplate = standardTemplate;
    }
    const prompt = new PromptTemplate({
      template: promptTemplate,
      inputVariables: ["tone", "sentence"],
    });

    const model = new OpenAI({
      openAIApiKey: Envir,
      temperature: 0.9,
      streaming: true,
      callbackManager: CallbackManager.fromHandlers({
        handleLLMNewToken: async (token) => {
          console.log(token);
          await writer.ready;
          await writer.write(encoder.encode(`${token}`));
        },
      }),
    });

    const promptText = await prompt.format({ tone, sentence: sentence });

    await model.call(promptText);

    return new NextResponse(await stream.readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  }
}

export const config = {
  runtime: "edge",
};
