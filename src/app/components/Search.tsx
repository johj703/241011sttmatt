import axios from "axios";
import { useState } from "react";

interface TodoFormProps {
  onAddTodo: (newTodo: { title: string; contents: string }) => void;
}

const SearchBar = ({ onAddTodo }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmit = () => {
    const newTodo = { title, contents };
    axios
      .post(`http://localhost:4000/todos`, { ...newTodo, isDone: false })
      .then((response) => {
        onAddTodo(response.data);
        setTitle("");
        setContents("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex">
      <div className="flex">
        <p>제목</p>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex">
        <p>내용</p>
        <input
          type="text"
          placeholder="contents"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>추가하기</button>
    </div>
  );
};

export default SearchBar;
