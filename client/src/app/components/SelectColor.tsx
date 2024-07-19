
export default function SelectColor({
    func,
} : { func: (e: any) => void }) {
    return (
        <select name="colors" id="colors" defaultValue={"green"}
        className="bg-slate-900 border-2 border-gray-700 
        rounded-md px-3 py-1"
        data-testid="choose-color"
        onChange={func}>
          <option data-testid="option1" className="font-bold" value="red">red</option>
          <option data-testid="option2" className="font-bold" value="green">green</option>
          <option data-testid="option3" className="font-bold" value="blue">blue</option>
          <option data-testid="option4" className="font-bold" value="black">black</option>
          <option data-testid="option5" className="font-bold" value="gray">gray</option>
          <option data-testid="option6" className="font-bold" value="pink">pink</option>
          <option data-testid="option7" className="font-bold" value="purple">purple</option>
          <option data-testid="option8" className="font-bold" value="light_blue">light blue</option>
          <option data-testid="option9" className="font-bold" value="orange">orange</option>
        </select>
    );
}