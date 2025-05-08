import dspy
from formatter.resume_template import ResumeTemplate

class FormatResume(dspy.Module):
    def __init__(self):
        super().__init__()
        self.generator = dspy.Predict(ResumeTemplate)

    def forward(self, content):
        return self.generator(content=content)