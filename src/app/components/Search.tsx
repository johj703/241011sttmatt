import { useState } from "react";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const addTodos = () => {};
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
      <button onClick={addTodos}>추가하기</button>
    </div>
  );
};

export default SearchBar;
