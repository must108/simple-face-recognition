
export default function SelectColor({
    func,
} : { func: (e: any) => void }) {
    return (
        <select name="colors" id="colors" defaultValue={"green"}
        className="bg-slate-900 border-2 border-gray-700 
        rounded-md px-3 py-1"
        onChange={func}>
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
    );
}