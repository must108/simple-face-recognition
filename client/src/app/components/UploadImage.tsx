import { FaCheck } from "react-icons/fa";

interface UploadImageProps {
    func: (e: any) => void,
    file: any
}

export default function UploadImage({
    func,
    file
} : UploadImageProps) {
    return (
        <div className="flex justify-center
        items-center flex-row">
          <input className="hidden"
          id="imageFile" 
          type="file" accept="image/*" 
          onChange={func} />
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
    );
}