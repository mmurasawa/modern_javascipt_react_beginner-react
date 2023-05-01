import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete, disabled } = props;
  return (
    <div className="incomplete-area">
      <p className="title"> 未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          // ループでレンダリングするとき key を設定しないとVirtual-Dom との差分を検知してくれない
          // 押されたときにだけ動きたいなら () => で function を作る
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
