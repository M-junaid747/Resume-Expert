from openai import OpenAI
import pandas as pd
import ast
import json

# Initialize OpenAI client (no proxies argument)
client = OpenAI(api_key="****************************************************************************")

# Load the course dataset
COURSE_CSV_PATH = "app/data/Coursera.csv"
courses_df = pd.read_csv(COURSE_CSV_PATH)

def ask_openai(prompt: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
    )
    return response.choices[0].message.content

def extract_skills(text: str, type_: str) -> list:
    """Ask GPT to extract skills of a specific type (present, missing, recommended)"""
    prompt = f"""
You are a resume analyzer. Given this {type_} task, extract the list of skills from the text below:
{text}

Return the skills as a Python list like: ["skill1", "skill2", ...]
"""
    result = ask_openai(prompt)
    try:
        # Convert GPT's output into a Python list safely
        skills = ast.literal_eval(result.strip())
        return skills if isinstance(skills, list) else []
    except Exception as e:
        print(f"[!] Skill extraction failed: {e}")
        return []

def match_resume_with_jd(resume_text: str, jd_text: str):
    prompt = f"""
You are a resume and job description analyzer. Analyze the following resume and job description to extract:

1. Skills that are present in both (matched skills).
2. Skills that are in the job description but missing from the resume (missing skills).
3. 5–10 additional trending or complementary skills (recommended skills).

Resume:
{resume_text}

Job Description:
{jd_text}

Respond with a valid JSON object using this exact format. Do not include any explanation, text, or code block markers:

{{
  "skills_present": ["skill1", "skill2", ...],
  "skills_missing": ["skill3", "skill4", ...],
  "recommended_skills": ["skill5", "skill6", ...]
}}
"""
    try:
        result = ask_openai(prompt)
        print("[GPT Raw Output]:", result)
        insights = json.loads(result.strip())
    except Exception as e:
        print(f"[!] Parsing GPT output failed: {e}")
        return {"skills_present": [], "skills_missing": [], "recommended_skills": []}

    # Suggested Courses (from missing skills)
    suggested_courses = []
    for skill in insights.get("skills_missing", []):
        matches = courses_df[courses_df['Skills'].str.contains(skill, case=False, na=False)]
        for _, row in matches.iterrows():
            suggested_courses.append({
                "name": row["Course Name"],
                "university": row["University"],
                "link": row["Course URL"]
            })

    # Remove duplicates
    suggested_courses = [dict(t) for t in {tuple(d.items()) for d in suggested_courses}]

    return {
        **insights,
        "suggested_courses": suggested_courses
    }

