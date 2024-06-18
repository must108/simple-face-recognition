from flask import Flask, request, send_file, jsonify, redirect
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'bmp', 'tiff', 'heic', 'hevc'}
os.makedirs(UPLOAD_FOLDER, exist_ok = True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods = ['POST'])
def upload_file():
    print(request.files)
    if 'file' not in request.files:
        return jsonify({ 'error': 'No file part' }), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({ 'error': 'No selected file' }), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)
        return send_file(file_path, mimetype=f'image/{filename.rsplit(".", 1)[1].lower()}')
    else:
        return jsonify({ 'error': 'File type not allowed' }), 400

if __name__ == '__main__':
    app.run(debug = True)