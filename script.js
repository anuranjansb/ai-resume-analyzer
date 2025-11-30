// Skills for each role
const ROLE_SKILLS = {
    sde: [
        "data structures",
        "algorithms",
        "time complexity",
        "space complexity",
        "oop",
        "object oriented",
        "python",
        "java",
        "c++",
        "problem solving",
        "coding",
        "git",
        "github"
    ],
    web: [
        "html",
        "css",
        "javascript",
        "react",
        "frontend",
        "backend",
        "full stack",
        "node",
        "node.js",
        "rest api",
        "responsive",
        "bootstrap",
        "tailwind",
        "database",
        "mongodb",
        "sql"
    ],
    ml: [
        "machine learning",
        "deep learning",
        "neural networks",
        "pandas",
        "numpy",
        "python",
        "tensorflow",
        "pytorch",
        "sklearn",
        "regression",
        "classification",
        "clustering",
        "data preprocessing",
        "feature engineering"
    ]
};

function analyzeResume() {
    const role = document.getElementById("role").value;
    const resumeText = document.getElementById("resume").value.toLowerCase();

    const resultBlock = document.getElementById("result");
    const scoreLine = document.getElementById("scoreLine");
    const matchedList = document.getElementById("matchedSkills");
    const missingList = document.getElementById("missingSkills");
    const suggestions = document.getElementById("suggestions");

    if (!resumeText.trim()) {
        alert("Paste your resume first");
        return;
    }

    const requiredSkills = ROLE_SKILLS[role];

    const matched = [];
    const missing = [];

    requiredSkills.forEach(skill => {
        if (resumeText.includes(skill.toLowerCase())) {
            matched.push(skill);
        } else {
            missing.push(skill);
        }
    });

    const score = Math.round((matched.length / requiredSkills.length) * 100);

    matchedList.innerHTML = matched.map(s => `<li>${s}</li>`).join("");
    missingList.innerHTML = missing.map(s => `<li>${s}</li>`).join("");

    scoreLine.textContent = `Skill Match Score: ${score}/100`;

    if (score >= 80) {
        suggestions.textContent = "Strong match! Your resume is aligned with this role.";
    } else if (score >= 50) {
        suggestions.textContent = "Decent match. Improve missing skills to boost your score.";
    } else {
        suggestions.textContent = "Weak match. Add important missing skills and projects.";
    }

    resultBlock.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("analyzeBtn")
        .addEventListener("click", analyzeResume);
});
