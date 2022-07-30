import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const InputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //外側のdiv生成
  const wrapDiv = document.createElement("div");
  wrapDiv.className = "todo-list";

  // 内側の要素を作成
  const InnerDiv = document.createElement("div");
  InnerDiv.className = "todo-name";
  InnerDiv.innerText = InputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親要素を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incompleted-list").removeChild(deleteTarget);
  });

  wrapDiv.appendChild(InnerDiv);
  wrapDiv.appendChild(completeButton);
  wrapDiv.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incompleted-list").appendChild(wrapDiv);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
