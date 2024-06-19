/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { FaCheck } from 'react-icons/fa';

export default function Home() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [possibleError, setPossibleError] = useState('');
  const [color, setColor] = useState("green");
 
  useEffect(() => {
    setTimeout(() => {
      setPossibleError('');
    }, 2500)
  }, [possibleError]);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      setPossibleError('no file selected!');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', file!);
    formData.append('color', color);
    console.log('formdata: ', formData);

    const res = await fetch(
      'https://facial-recognition-69bf04706b18.herokuapp.com/upload', {
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
      text-white p-4 overflow-hidden"> 
        {
          imageUrl ?
          null
          :
            <>
              <div className="w-[390px]">
                <h1
                className="font-bold
                text-3xl sm:text-4xl mb-8 text-center"
                >facial detection tool</h1>
                <p className="text-xs sm:text-sm text-center
                pb-3"
                >
                  upload an image and this tool
                  will identify all faces in the 
                  picture. &#40;and will draw
                  a funny box around it&#41;.
                </p>
                <p className="text-xs sm:text-sm text-center
                pb-3">
                  this software is not 100% accurate, 
                  so don&apos;t be surprised if it highlights
                  random things.
                </p>
                <p className="text-xs sm:text-sm text-center
                pb-8">
                  your images are never stored and 
                  can&apos;t be viewed by <br />
                  anyone else!
                </p>
            </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center
          justify-center text-center space-y-4">
            <div className="flex justify-center
            items-center flex-row">
              <input className="hidden"
              id="imageFile" 
              type="file" accept="image/*" 
              onChange={handleFileChange} />
              <label htmlFor="imageFile"
              className="bg-slate-900 hover:bg-blue-700
              text-white px-2 py-1 rounded font-bold
              transition delay-50 border-2 border-gray-700
              hover:border-transparent">
                select image...
              </label>
              <div className="ml-3">
                { file ?
                  <FaCheck color="green"/>
                  :
                  null
                }
              </div>
            </div>
            <div>
              <label htmlFor="colors"
              className="font-bold p-4">
                box color:
              </label>
              <select name="colors" id="colors" defaultValue={"green"}
              className="bg-slate-900 border-2 border-gray-700 
              rounded-md px-3 py-1"
              onChange={handleColorChange}>
                <option className="font-bold" value="red">red</option>
                <option className="font-bold" value="green">green</option>
                <option className="font-bold" value="blue">blue</option>
                <option className="font-bold" value="black">black</option>
                <option className="font-bold" value="gray">gray</option>
                <option className="font-bold" value="pink">pink</option>
                <option className="font-bold" value="purple">purple</option>
                <option className="font-bold" value="light_blue">light blue</option>
                <option className="font-bold" value="orange">orange</option>
              </select>
            </div>
              <div className="flex flex-col items-center space-y-0">
                <button type="submit"
                className="bg-blue-700 hover:bg-blue-900
                text-white px-3 py-1 rounded font-bold
                transition delay-50"
                >
                  upload
                </button>
                <p className="
                text-[0.65rem] leading-4
                mt-0
                text-slate-700"
                >
                  built by <span
                  className="underline cursor-pointer"
                  >
                    <a href="https://github.com/must108"
                    target="_blank">must</a>
                  </span>
                  </p>
              </div>
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
