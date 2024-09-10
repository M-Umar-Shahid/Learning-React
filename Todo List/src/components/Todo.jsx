import PropTypes from "prop-types";
import { MdCropDin } from "react-icons/md";

function Todo(props) {
  return (
    <div
      className={`flex p-8 justify-between text-center ${
        props.borderBottom ? "border-b-2 border-black" : ""
      }`}
    >
      <div className="flex gap-3">
        <MdCropDin className="size-6 cursor-pointer" />
        <span className="font-mono font-semibold text-lg">{props.text}</span>
      </div>
      <div className="flex gap-3">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
          Edit
        </button>
        <button
          onClick={() => props.onDelete(props.id)}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
          data={props.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  borderBottom: PropTypes.bool,
  onDelete: PropTypes.func,
};
export default Todo;
