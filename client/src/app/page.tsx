/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { FaCheck } from 'react-icons/fa';
import SelectColor from "./components/SelectColor";
import BuiltBy from "./components/BuiltBy";
import Description from "./components/Description";
import UploadButton from "./components/UploadButton";
import UploadImage from "./components/UploadImage";

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
      process.env.NEXT_PUBLIC_POST_LINK!, {
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
      text-white p-4 overflow-hidden"
      data-testid='home-elem'
      > 
        {
          imageUrl ?
          null
          :
            <>
              <Description />
          <form onSubmit={handleSubmit} className="flex flex-col items-center
          justify-center text-center space-y-4">
              <UploadImage func={handleFileChange} file={file} />
            <div>
              <label htmlFor="colors"
              className="font-bold p-4">
                box color:
              </label>
                <SelectColor func={handleColorChange} />
            </div>
              <div className="flex flex-col items-center space-y-0">
                <UploadButton />
                <BuiltBy />
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
