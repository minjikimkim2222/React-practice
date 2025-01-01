import React from "react";
import Comment from "./Comment";

// CommmentList 컴포넌트에, 직접 만든 Comment 컴포넌트 삽입 -- comments 컴포넌트 분리 전
// function CommentList(props) {
//   return (
//     <div>
//       <Comment name="minjiki2" comment="첫 댓글!" />
//       <Comment name="asdfbs" comment="늦었다.." />
//     </div>
//   );
// }

// CommentList 컴포넌트를 comments (별도의 객체)로 분리
const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "유재석",
    comment: "리액트 재미있어요~!",
  },
  {
    name: "강민경",
    comment: "저도 리액트 배워보고 싶어요!!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
