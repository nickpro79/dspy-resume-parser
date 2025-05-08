import dspy

class ResumeTemplate(dspy.Signature):
    """Convert raw resume content into structured template. Missing fields should say 'Not Available'. Give a concise summary of each section, except experience which should be detailed."""
    
    content = dspy.InputField(desc="Raw resume text")
    
    name = dspy.OutputField(desc="Candidate's name")
    email = dspy.OutputField(desc="Email address")
    phone = dspy.OutputField(desc="Phone number")
    summary = dspy.OutputField(desc="Summary")
    education = dspy.OutputField(desc="Education details")
    skills = dspy.OutputField(desc="List of technical or soft skills")
    
    experience = dspy.OutputField(
        desc=(
            "Detailed professional experience including role, company, duration, key responsibilities, "
            "achievements, tools used, and impact in bullet-point form if possible."
        )
    )
    
    projects = dspy.OutputField(desc="Notable projects with brief description")
    
