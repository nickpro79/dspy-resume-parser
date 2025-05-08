from fastapi import APIRouter, File, UploadFile, Depends
from fastapi.responses import JSONResponse
import pdfplumber
from utils.openai_setup import *  
from formatter.models import FormatResume 
from auth.auth_bearer import JWTBearer

router = APIRouter()

@router.post("/upload",dependencies=[Depends(JWTBearer())])
async def upload_pdf(file: UploadFile = File(...)):
    with open(f"temp_{file.filename}", "wb") as buffer:
        content = await file.read()
        buffer.write(content)

    try:
        with pdfplumber.open(f"temp_{file.filename}") as pdf:
            text = ""
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"

        formatter = FormatResume()
        result = formatter(text)

        return JSONResponse(content={
            "filename": file.filename,
            "formatted_resume": {
                "name": result.name,
                "email": result.email,
                "phone": result.phone,
                "summary": result.summary,
                "education": result.education,
                "skills": result.skills,
                "experience": result.experience,
                "projects": result.projects
            }
        })

    except Exception as e:
        print("Error while processing PDF:", e)
        return JSONResponse(content={"error": str(e)}, status_code=400)