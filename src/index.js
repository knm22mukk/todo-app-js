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
    //　押された完了ボタンの親要素を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //　完了リストに追加する要素の取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    // 完了リストを生成
    const completeTodo = document.createElement("div");
    completeTodo.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 各要素を必要な場所に設定
    addTarget.appendChild(completeTodo);
    addTarget.appendChild(backButton);

    //　完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親要素を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  wrapDiv.appendChild(InnerDiv);
  wrapDiv.appendChild(completeButton);
  wrapDiv.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incompleted-list").appendChild(wrapDiv);
}; //未完了リストから指定の要素を削除

const deleteFromIncompleteList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
