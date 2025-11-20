
import imagekit from "../configs/imagekit.js"
import Resume from "../models/Resume.js";
import fs from 'fs'


//controller for creating a new resume
// POST : /api/resume/create

export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    // create new resume
    const newResume = await Resume.create({ userId, title });
    //return succes message
    return res
      .status(201)
      .json({ message: "Resume created succesfully", resume: newResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// controller for deleating a new resume
// POST : /api/resume/delate

// export const deleteResume = async (req, res) => {
//   try {
//     const userId = req.userId;
//     const { resumeId } = req.body;

//     await Resume.findByIdAndDelete({ userId, _id: resumeId });
//     return res.status(200).json({ message: "Resume deleate succesfully" });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };
export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params; // <-- FIXED

    const deleted = await Resume.findOneAndDelete({ _id: resumeId, userId });

    if (!deleted) {
      return res.status(404).json({ message: "Resume not found or unauthorized" });
    }

    return res.status(200).json({ message: "Resume deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




//get user resume by id
// GET : /api/resume/get

// export const getResumeById = async (req, res) => {
//   try {
//     const userId = req.userId;
//     const { resumeId } = req.body;

//     const resume = await Resume.findOne({ userId, _id: resumeId });

//     if (!resume) {
//       return res.status(404).json({ message: "Resume not found" });
//     }
//     resume.__v = undefined;
//     resume.createdAt = undefined;
//     resume.updatedAt = undefined;

//     return res.status(200).json({ resume });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };
export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params; // <-- GET request e body na, params use korte hobe

    const resume = await Resume.findOne({ userId, _id: resumeId });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    resume.__v = undefined;
    resume.createdAt = undefined;
    resume.updatedAt = undefined;

    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};



//get resume by id public
//GET : /api/resumes/public
export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;
    const resume = await Resume.findOne({ public: true, _id: resumeId });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//controller for updeting a resume
//PUT : /api/resume/updated

// export const updateResume = async (req, res) => {
//   try {
//     const userId = req.userId;
//     const { resumeId, resumeData, removBackground } = req.body;
//     const image = req.file;

//     // let resumeDataCopy = json.parse(resumeData);
//     let resumeDataCopy;
//     if(typeof resumeData === 'string'){
//       resumeDataCopy = await JSON.parse(resumeData)
//     }else{
//       resumeDataCopy = structuredClone(resumeData)
//     }

//     if (image) {
//         const imageBufferData = fs.createWriteStream(image.path)
//       const response = await imagekit.Files.upload({
//         file: imageBufferData,
//         fileName: "resume.jpg",
//         folder : 'user-resumes',
//         transformation : {
//             pre:'w-300, h-300 fo-face,z-0.75' + (removBackground ? ', e-bgremove' : '')
//         }
//       });

//       resumeDataCopy.personal_info.image = response.url
//     }

//     const resume = await Resume.findByIdAndUpdate(
//       { userId, _id: resumeId },
//       resumeDataCopy,
//       { new: true }
//     );
//     return res.status(200).json({ message: "saved successfully", resume });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.body;
    let resumeData = req.body.resumeData;

    if (!resumeId) {
      return res.status(400).json({ message: "Resume ID missing" });
    }

    // Convert string to JSON if needed
    if (typeof resumeData === "string") {
      resumeData = JSON.parse(resumeData);
    }

    // If file uploaded, replace Image
    if (req.file) {
      const file = fs.readFileSync(req.file.path);
      const uploadResponse = await imagekit.upload({
        file,
        fileName: `resume_${resumeId}.jpg`,
        folder: "resume",
      });

      resumeData.personal_info.image = uploadResponse.url;
    }

    const updatedResume = await Resume.findOneAndUpdate(
      { _id: resumeId, userId },
      { $set: resumeData },
      { new: true }
    );

    res.json({ message: "Resume Saved Successfully", updatedResume });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
