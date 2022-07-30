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

  // HTMLの構造に沿って各要素を設定
  wrapDiv.appendChild(InnerDiv);

  // 未完了リストに追加
  document.getElementById("incompleted-list").appendChild(wrapDiv);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
