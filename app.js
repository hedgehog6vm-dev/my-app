// ボタンと音声ファイルの対応表
const audiolist_hawk = [
  { label: "ちん毛", file: "sounds/hawk/hawk1_ちん毛.mp3"},
  { label: "だめだ", file: "sounds/hawk/hawk2_だめだ.mp3"},
  { label: "トムハンクス", file: "sounds/hawk/hawk3_トムハンクス.mp3"},
  { label: "親分", file: "sounds/hawk/hawk4_親分.mp3"},
  { label: "ひよっこ", file: "sounds/hawk/hawk5_ひよっこ.mp3"},
  { label: "あぁん？", file: "sounds/hawk/hawk6_あぁん？.mp3"},
  { label: "ちん毛", file: "sounds/hawk/hawk7_ちん毛2.mp3"},
  { label: "具だろ！", file: "sounds/hawk/hawk8_具だろ！.mp3"}
];

const audiolist_garth = [
  { label: "地獄へ行こか", file: "sounds/garth/garth1_地獄へ行こか.mp3"}
];

const audiolist_yoshiki = [
  { label: "断捨離", file: "sounds/yoshiki/yoshiki1_断捨離.mp3"},
  { label: "元気出しなよ", file: "sounds/yoshiki/yoshiki2_元気出しなよ.mp3"}
];

const audiolist_uta = [
  { label: "コノヤロー1", file: "sounds/uta/uta1_コノヤロー1.mp3"},
  { label: "コノヤロー2", file: "sounds/uta/uta2_コノヤロー2.mp3"},
  { label: "虐待", file: "sounds/uta/uta3_虐待.mp3"},
  { label: "ブス", file: "sounds/uta/uta4_ブス.mp3"}
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
  //container.appendChild(button);
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
  //container.appendChild(button);
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
  //container.appendChild(button);
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
  //container.appendChild(button);
});


///////////////////////////////////

const categories = [
  {
    title: "ホーク",
    sounds: audiolist_hawk
  },
  {
    title: "柳下",
    sounds: audiolist_garth
  },
  {
    title: "ヨシキ",
    sounds: audiolist_yoshiki
  },
  {
    title: "宇多丸",
    sounds: audiolist_uta
  }
];

const pages = document.getElementById("pages");

categories.forEach(category => {

  const page = document.createElement("div");
  page.className = "page";

  const title = document.createElement("h2");
  title.textContent = category.title;

  const grid = document.createElement("div");
  grid.className = "button-grid";

  category.sounds.forEach(item => {

    const button = document.createElement("button");

    button.textContent = item.label;

    button.addEventListener("click", () => {
      const audio = new Audio(item.file);
      audio.play();
    });

    grid.appendChild(button);
  });

  page.appendChild(title);
  page.appendChild(grid);

  pages.appendChild(page);
});