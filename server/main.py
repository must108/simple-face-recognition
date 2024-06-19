# written by mustaeen ahmed :)

from flask import Flask, request, send_file, jsonify, redirect
from flask_cors import CORS
import os
import cv2
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'uploads')
EDITED_FOLDER = os.path.join(os.path.dirname(__file__), 'edited')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'bmp', 'tiff', 'heic', 'hevc'}
os.makedirs(UPLOAD_FOLDER, exist_ok = True)
os.makedirs(EDITED_FOLDER, exist_ok = True)

colors_dict = {
    "red": (0, 0, 255),
    "green": (0, 255, 0),
    "blue": (255, 0, 0),
    "black": (0, 0, 0),
    "gray": (96, 96, 96),
    "pink": (178, 102, 255),
    "purple": (255, 102, 178),
    "light_blue": (255, 128, 0),
    "orange": (75, 156, 211),
}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods = ['POST'])
def upload_file():
    print(request.files)
    color = request.form.get('color')
    print(color)

    if color not in colors_dict:
        return jsonify({ 'error': 'invalid/null color!' }), 400
    cascade_color = colors_dict[color]
    
    if 'file' not in request.files:
        return jsonify({ 'error': 'server-side error! (this is for devs)' }), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({ 'error': 'you did not select a file!' }), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        edited_path = os.path.join(EDITED_FOLDER, filename)
        file.save(file_path)

        image = cv2.imread(file_path)
        rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        cascade_path = os.path.join(os.path.dirname(__file__), 
                                    'haarcascade_frontalface_default.xml')
        detector = cv2.CascadeClassifier(cascade_path)
        rects = detector.detectMultiScale(rgb, 
                    scaleFactor=1.3, minNeighbors=2, minSize=(75, 75))
        
        for(i, (x, y, w, h)) in enumerate(rects):
            cv2.rectangle(image, (x, y), (x + w, y + h), cascade_color, 2)
            cv2.putText(image, "Face #{}".format(i + 1), (x, y - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.55, cascade_color, 2)
            
        cv2.imwrite(edited_path, image)

        return send_file(edited_path, mimetype=f'image/{filename.rsplit(".", 1)[1].lower()}')
    else:
        return jsonify({ 'error': 'file type not allowed!' }), 400

if __name__ == '__main__':
    app.run(debug = True)