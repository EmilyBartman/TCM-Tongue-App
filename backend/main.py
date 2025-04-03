# main.py (FastAPI backend)
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/process")
async def process_image(image: UploadFile = File(...)):
    contents = await image.read()
    np_arr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    return {
        "tongue_color": "pale red",
        "shape": "swollen",
        "coating": "thick white",
        "prediction": "Qi Deficiency (TCM) / Fatigue (Western)"
    }

# requirements.txt
fastapi
uvicorn
python-multipart
opencv-python
