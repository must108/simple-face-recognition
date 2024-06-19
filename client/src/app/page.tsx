/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [possibleError, setPossibleError] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setPossibleError('');
    }, 2500)
  }, [possibleError]);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      setPossibleError('no file selected!');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', file!);

    const res = await fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } else {
      const error = await res.json();
      setPossibleError(error.error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center
      justify-center h-[100vh] bg-slate-900
      text-white"> 
        {
          imageUrl ?
          null
          :
            <>
              <div className="w-[400px]">
                <h1
                className="font-bold
                text-4xl mb-8 text-center"
                >facial recognition tool</h1>
                <p className="text-sm text-center
                pb-3"
                >
                  upload an image and this tool
                  will identify all faces in the 
                  picture. &#40;and will draw
                  a funny box around it&#41;
                </p>
                <p className="text-sm text-center
                pb-8">
                  this software is not 100% accurate, 
                  so don&apos;t be surprised if it highlights
                  random things!
                </p>
            </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center
          justify-center text-center space-y-4">
            <input type="file" accept="image/*" onChange={handleFileChange}/>
              <button type="submit"
              className="bg-blue-700 hover:bg-blue-900
              text-white px-3 py-1 rounded font-bold
              transition delay-50"
              >
                upload
              </button>
            </form>
          </>
        }
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
        {possibleError ? 
        <p className="text-red-500 mt-4"
        >
          {possibleError}</p>
        :
        null
        }
      </div>

    </>
  );
}
