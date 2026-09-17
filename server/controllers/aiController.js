
import Resume from "../models/Resume.js";
import ai from "../configs/ai.js";

export const enhanceProsessionSummary = async (req, res) => {
  try {
    const { userContent } = req.body || {};

    if (!userContent) {
      return res.status(400).json({
        message: "Missing required field",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `
You are an expert resume writer.

Enhance the following professional summary.

Requirements:
- Make it professional
- Make it ATS-friendly
- Highlight key skills, experience, and career objectives
- Keep it concise
- Write only 1-2 sentences
- Do not add fake information
- Return only the final improved summary

Professional Summary:
${userContent}
`,
    });

    const enhancedContent = response.text;

    return res.status(200).json({
      enhancedContent,
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body || {};

    if (!userContent) {
      return res.status(400).json({
        message: "Missing required field",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `
You are an expert resume writer.

Enhance the following job description.

Requirements:
- Make it professional
- Make it ATS-friendly
- Highlight key responsibilities and achievements
- Use strong action verbs
- Use quantifiable results where possible
- Keep it concise
- Write only 1-2 sentences
- Do not add fake information
- Return only the final improved job description

Job Description:
${userContent}
`,
    });

    const enhancedContent = response.text;

    return res.status(200).json({
      enhancedContent,
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

export const upLoadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body || {};
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({
        message: "Missing required field",
      });
    }

    const prompt = `
Extract structured information from the following resume.

Return ONLY valid JSON.
Do not include markdown or any explanation.

Resume:
${resumeText}

Return exactly this JSON structure:

{
  "professional_summary": "",
  "skills": [],
  "personal_info": {
    "image": "",
    "full_name": "",
    "profession": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [
    {
      "company": "",
      "position": "",
      "start_date": "",
      "end_date": "",
      "description": "",
      "is_current": false
    }
  ],
  "projects": [
    {
      "name": "",
      "type": "",
      "description": ""
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field": "",
      "graduation_date": "",
      "gpa": ""
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const extractedData = response.text;

    const parseData = JSON.parse(extractedData);

    const newResume = await Resume.create({
      userId,
      title,
      ...parseData,
    });

    return res.status(200).json({
      resumeId: newResume._id,
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};