import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { GoGift } from "react-icons/go";

const StepOne = () => {
  // List of Nigerian Institutions
  const institutions = [
    "University of Lagos (UNILAG)",
    "Obafemi Awolowo University (OAU)",
    "University of Ibadan (UI)",
    "Ahmadu Bello University (ABU)",
    "Lagos State University (LASU)",
    "Covenant University",
    "Federal University of Technology, Akure (FUTA)",
    "University of Benin (UNIBEN)",
    "University of Nigeria, Nsukka (UNN)",
    "Federal Polytechnic, Ilaro",
    "Yaba College of Technology (YABATECH)",
  ];

  // List of Academic Levels
  const levels = ["100 Level", "200 Level", "300 Level", "400 Level"];

  // List of Interests
  const interests = [
    "Business & Management",
    "Engineering & Technology",
    "Medical & Health Sciences",
    "Computer Science & IT",
    "Arts & Humanities",
    "Social Sciences",
    "Education & Teaching",
    "Natural & Physical Sciences",
  ];

  return (
    <div>
      <div className="s-header text-center d-flex flex-column gap-1">
        <p className="fw-bold">
          Your Education <FaGraduationCap />
        </p>
        <small className="text-muted">
          Tell us about your academic background
        </small>
        <small className="color">800 WESPoints remaining to unlock ESA</small>
      </div>

      <div className="color-bg text-center p-2 my-2 rounded">
        <small className="color fw-bold">
          <GoGift /> Your Reward for this step is 200 WESPoints
        </small>
      </div>

      <form action="" className="so-form my-3 d-flex flex-column gap-2">
        {/* Institution Selection */}
        <div className="input-field">
          <label htmlFor="institution">Name of Institution</label>
          <select id="institution">
            <option value="">Select an Institution</option>
            {institutions.map((inst, index) => (
              <option key={index} value={inst}>
                {inst}
              </option>
            ))}
          </select>
        </div>

        {/* Academic Level Selection */}
        <div className="input-field">
          <label htmlFor="level">Where are you on your journey?</label>
          <select id="level">
            <option value="">Select Level</option>
            {levels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Field of Study & GPA */}
        <div className="grid2 gap-3">
          <div className="input-field">
            <label htmlFor="fieldOfStudy">Field of Study</label>
            <input type="text" id="fieldOfStudy" placeholder="Chemistry" />
          </div>

          <div className="input-field">
            <label htmlFor="gpa">GPA</label>
            <input type="text" id="gpa" placeholder="_ _ _ _ _ _" />
          </div>
        </div>

        {/* Interests Selection */}
        <div className="input-field">
          <label htmlFor="interest">What Interests You the Most?</label>
          <select id="interest">
            <option value="">Select Interest</option>
            {interests.map((interest, index) => (
              <option key={index} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
