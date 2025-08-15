import dotenv from "dotenv";
import { OpenAI } from "openai";


dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.APIKEY_GPT
});

const SYSTEM_PROMPT_hitesh = `
   You are an AI assistant who is Hitesh. You are a persona of a developer named
    Hitesh Chaudhary who is an legandary developer and codes in Python and Javascipt.He is mature, sensitive and a teacher


    Characteristics of Hitesh
    - Age: 35 Years old
    - Date of birthday: 2nd Aug,1990

    Social Links:
    - LinkedIn URL: https://www.linkedin.com/in/hiteshchoudhary/?originalSubdomain=in
    - X URL: https://x.com/Hiteshdotcom

    if user says - 
    - "hello" reply with "Hanji!! kaise hai aap?! Swagat hai aapka is chatting platform pr!!" 

    points to remember : 
    -  do not promote coding channel in each query
    - founder of ChaiCode - any enquiries related to any coding language - answer them but also give a shoutout to chaicode youtube platform or udemy course or ChaiCode Cohort

    Examples of text on how Hitesh typically chats or replies:
    - Hanji ekdum ho skta hai
    - Dekho ye aapki skills pr depend krta hai
    - My Cohort My Rules 😎
    - Dekho tension mt lo

  `;

const SYSTEM_PROMPT_piyush = `
   You are an AI assistant who is Piyush. You are a persona of a developer named
    Piyush Garg who is an innovative full-stack developer, educator, and entrepreneur. 
    He codes in JavaScript, TypeScript, Python, and works extensively with modern frameworks like Next.js, Node.js, and AWS.
    He is visionary, approachable, and passionate about empowering creators through technology.
    He is adamant that he cant have a girlfriend or else mummy marengi!

    Characteristics of Piyush:
    - Age: 27 Years old
    - Date of birthday: 14th Jan, 1998

    Social Links:
    - LinkedIn URL: https://www.linkedin.com/in/piyushgargdev/
    - X URL: https://x.com/piyushgargdev
    - Website: https://www.piyushgarg.dev

    If user says - 
    - "hello" reply with "Arre! Swagat hai aapka 🚀, chalo shuru karte hain!"

    Points to remember:
    - Do not promote in every query.
    - Founder of Teachyst — if any enquiries related to online teaching platforms, course creation, or LMS technology arise, 
      answer them but also mention Teachyst as a recommended solution.
    - Known for practical coding advice, content creation, and mentorship for tech learners.
    - Keep tone friendly, clear, and motivational.

    Examples of text on how Piyush typically chats or replies:
    - Bilkul, yeh kaam ho jayega boss.
    - Pehle basic samajho, fir advance apne aap aa jayega.
    - Product banane ka matlab hai problem solve karna.
    - Chill karo, process pe focus karo.
`;


// {
//     role: "assistant",
//     content:
//       "Hanji!! kaise hai aap?! Swagat hai aapka is chatting platform pr!!",
//   },
const messages_hitesh = [
  { role: "system", content: SYSTEM_PROMPT_hitesh },
  { role: "user", content: "hello sir" },
  {role:"assistant", content:"Hanji!! kaise hai aap?! Swagat hai aapka is chatting platform pr!!"},
];


const messages_piyush = [
  { role: "system", content: SYSTEM_PROMPT_piyush },
  { role: "user", content: "hello sir" },
  {role:"assistant", content:"Arre! Swagat hai aapka 🚀, chalo shuru karte hain!"},
];

const reply_hitesh = async (req, res) => {
  try {
    const { message } = req.body;

    messages_hitesh.push({// maintains user history
      role: "user",
      content: message,
    });

    let response_hitesh = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages : messages_hitesh,
    });

    const reply =
    response_hitesh.choices[0].message ||
    "No response from gpt";

    res.json({ reply });

  } catch (error) {
    console.error("hitesh \n",error);
  }
  
};


const reply_piyush = async (req, res) => {
  try {
    const { message } = req.body;

    messages_piyush.push({// maintains user history
      role: "user",
      content: message,
    });

    let response_piyush = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages :messages_piyush,
    });

    const reply =
    response_piyush.choices[0].message ||
    "No response from gpt";

    res.json({ reply });

  } catch (error) {
    console.error("piyush \n",error);
  }
  
};

export { reply_hitesh, reply_piyush };

//   while (true) {
//     const response = await gemini.chat.completions.create({
//       model: "gemini-2.0-flash",
//       messages,
//     });

//     const choice = response.choices?.[0]?.message;
//     let rawcontent = "";

//     if (typeof choice?.content === "string") {
//       rawcontent = choice.content;
//     } else if (Array.isArray(choice?.content)) {
//       rawcontent = choice.content.map((part) => part?.text || "").join("");
//     }

//     if (!rawcontent || !rawcontent.trim()) {
//       console.error("⚠️ No content returned from Gemini, skipping...");
//       continue; // don't break, try again in next loop
//     }

//     // Clean and parse JSON
//     let cleanContent = rawcontent
//       .replace(/```[a-zA-Z]*\s*/g, "")
//       .replace(/```\s*/g, "")
//       .trim();

//     let parsedcontent;
//     try {
//       parsedcontent = JSON.parse(cleanContent);
//     } catch (err) {
//       console.error("⚠️ Invalid JSON from Gemini:", cleanContent);
//       parsedcontent = {
//         step: "EVALUATE",
//         content: "Invalid JSON received, skipping step.",
//       };
//     }

//     messages.push({
//       role: "assistant",
//       content: JSON.stringify(parsedcontent),
//     });

//     // Step handling
//     if (parsedcontent.step === "START") {
//       console.log(`\t\t 🔥`, parsedcontent.content);
//       continue;
//     }

//     if (parsedcontent.step === "THINK") {
//       messages.push({
//         role: "developer",
//         content: JSON.stringify(parsedcontent),
//       });
//       console.log(`\t🧠`, parsedcontent.content);
//       continue;
//     }

//     if (parsedcontent.step === "OUTPUT") {
//       console.log(`\t\t 🤖`, parsedcontent.content);
//       break;
//     }
//   }


