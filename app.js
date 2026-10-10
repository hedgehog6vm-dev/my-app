// ボタンと音声ファイルの対応表
const audiolist_hawk = [
  { label: "ちん毛", file: "sounds/hawk/hawk1_ちん毛.mp3"},
  { label: "だめだ", file: "sounds/hawk/hawk2_だめだ.mp3"}
];

const audiolist_garth = [
  { label: "地獄へ行こか", file: "sounds/garth/garth1_地獄へ行こか.mp3"}
];

const audiolist_yoshiki = [
  { label: "断捨離", file: "sounds/yoshiki/yoshiki1_断捨離.mp3"}
];

const audiolist_uta = [
  { label: "コノヤロー1", file: "sounds/uta/uta1_コノヤロー1.mp3"},
  { label: "コノヤロー2", file: "sounds/uta/uta2_コノヤロー2.mp3"}
];

//ボタンを格納する場所
const container = document.getElementById("audioButtons");

//ループでボタンを自動生成（ホーク）
audiolist_hawk.forEach(item =>{
  const button =
  document.createElement("button");
  button.textContent = item.label;

  //クリック時の処理を定義
  button.addEventListener("click", () =>{
    const audio = new Audio(item.file);
    audio.play();
  });

  //ページにボタンを追加
  container.appendChild(button);
});

//ループでボタンを自動生成（柳下）
audiolist_garth.forEach(item =>{
  const button =
  document.createElement("button");
  button.textContent = item.label;

  //クリック時の処理を定義
  button.addEventListener("click", () =>{
    const audio = new Audio(item.file);
    audio.play();
  });

  //ページにボタンを追加
  container.appendChild(button);
});

//ループでボタンを自動生成（ヨシキ）
audiolist_yoshiki.forEach(item =>{
  const button =
  document.createElement("button");
  button.textContent = item.label;

  //クリック時の処理を定義
  button.addEventListener("click", () =>{
    const audio = new Audio(item.file);
    audio.play();
  });

  //ページにボタンを追加
  container.appendChild(button);
});

//ループでボタンを自動生成（宇多丸）
audiolist_uta.forEach(item =>{
  const button =
  document.createElement("button");
  button.textContent = item.label;

  //クリック時の処理を定義
  button.addEventListener("click", () =>{
    const audio = new Audio(item.file);
    audio.play();
  });

  //ページにボタンを追加
  container.appendChild(button);
});