import dspy
import os

from dotenv import load_dotenv
load_dotenv()

lm = dspy.LM(
    "azure/gpt-4o", 
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
    api_base=os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_version=os.getenv("AZURE_API_VERSION"),
)

dspy.settings.configure(lm=lm)
