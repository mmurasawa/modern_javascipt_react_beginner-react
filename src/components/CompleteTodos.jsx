import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          // ループでレンダリングするとき key を設定しないとVirtual-Dom との差分を検知してくれない
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>もどす</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
