// Book이라는 이름의 React 컴포넌트 이름

import React from "react";

// 아래 문자열 감싸는 것을 백틱(`)으로 해야 인식함;;
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h1>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다!`}</h1>
    </div>
  );
}
export default Book;
