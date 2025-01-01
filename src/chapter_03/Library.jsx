import React from "react";
import Book from "./book";

// Library 코드는, 총 3개의 Book 컴포넌트를 랜더링하는 중..
function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300}></Book>
      <Book name="처음 만난 AWS" numOfPage={400}></Book>
      <Book name="처음 만난 리액트" numOfPage={500}></Book>
    </div>
  );
}

export default Library;
