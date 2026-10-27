// ボタンと音声ファイルの対応表
const audiolist_hawk = [
  { label: "ちん毛", file: "sounds/hawk/hawk1_ちん毛.mp3"},
  { label: "だめだ", file: "sounds/hawk/hawk2_だめだ.mp3"},
  { label: "トムハンクスだよ！", file: "sounds/hawk/hawk3_トムハンクス.mp3"},
  { label: "ｵﾔﾌﾞﾝｶﾞﾀﾞﾏｯﾀｲﾅｲﾖ", file: "sounds/hawk/hawk4_親分.mp3"},
  { label: "ｱｲｶﾜﾗｽﾞﾋﾖｯｺﾀﾞﾅ", file: "sounds/hawk/hawk5_ひよっこ.mp3"},
  { label: "あぁん？", file: "sounds/hawk/hawk6_あぁん？.mp3"},
  { label: "ちん毛 単品", file: "sounds/hawk/hawk7_ちん毛2.mp3"},
  { label: "具だろぉ！", file: "sounds/hawk/hawk8_具だろ！.mp3"},
  { label: "ｺﾚﾃﾞﾊﾟﾝﾃﾞﾓｶｯﾃ", file: "sounds/hawk/hawk9_パンでも買って.mp3"},
  { label: "ノーガンズ", file: "sounds/hawk/hawk10_ノーガンズ.mp3"},
  { label: "誕生日大塚明夫", file: "sounds/hawk/hawk11_誕生日大塚明夫.mp3"},
  { label: "誕生日田中邦衛", file: "sounds/hawk/hawk12_誕生日田中邦衛.mp3"},
  { label: "肩が痛くってよォ", file: "sounds/hawk/hawk13_肩が痛くってよォ"},
  { label: "あそぉ", file: "sounds/hawk/hawk14_あそぉ.mp3"},
  { label: "フワフワのエケチャン", file: "sounds/hawk/hawk15_フワフワのエケチャン.mp3"},
  { label: "ヨロシク", file: "sounds/hawk/hawk16_ヨロシク.mp3"},
  { label: "モチモチ", file: "sounds/hawk/hawk17_モチモチ.mp3"},
  { label: "チイチャキ命", file: "sounds/hawk/hawk18_チイチャキ命.mp3"},
  { label: "ヨロシク2", file: "sounds/hawk/hawk19_ヨロシク2.mp3"},
  { label: "アパルトマン", file: "sounds/hawk/hawk20_アパルトマン.mp3"},
  { label: "バイオハザード", file: "sounds/hawk/hawk21_バイオハザード.mp3"},
  { label: "ｲﾔｱｧｧ", file: "sounds/hawk/hawk22_ｲﾔｱｧｧ.mp3"},
  { label: "観に行きなさいよ！", file: "sounds/hawk/hawk23_観に行きなさいよ！.mp3"},
  { label: "オスカーおじさんです", file: "sounds/hawk/hawk24_オスカーおじさんです.mp3"},
  { label: "たばこしか持ってねえよ！", file: "sounds/hawk/hawk25_たばこしか持ってねえよ！.mp3"},
  { label: "英語わかんねんだよ！", file: "sounds/hawk/hawk26_英語わかんねんだよ！.mp3"},
  { label: "ｺﾝﾅﾝﾃﾞﾏｼﾀｹﾄﾞｫ", file: "sounds/hawk/hawk27_ｺﾝﾅﾝﾃﾞﾏｼﾀｹﾄﾞｫ.mp3"}
];

const audiolist_garth = [
  { label: "地獄へ行こか", file: "sounds/garth/garth1_地獄へ行こか.mp3"},
  { label: "エケチャン", file: "sounds/garth/garth3_エケチャン.mp3"},
  { label: "違うだろ", file: "sounds/garth/garth4_違うだろ.mp3"},
  { label: "ウケすぎや", file: "sounds/garth/garth2_ウケすぎや.mp3"},
  { label: "逆張りだろ", file: "sounds/garth/garth5_逆張りだろ.mp3"},
  { label: "老害バンザイみたいな話だからね", file: "sounds/garth/garth6_老害バンザイみたいな話だからね.mp3"},
  { label: "でっけーな", file: "sounds/garth/garth7_でっけーな.mp3"}
];

const audiolist_yoshiki = [
  { label: "断捨離", file: "sounds/yoshiki/yoshiki1_断捨離.mp3"},
  { label: "元気出しなよ", file: "sounds/yoshiki/yoshiki2_元気出しなよ.mp3"},
  { label: "具材ヴィエ・ドラン", file: "sounds/yoshiki/yoshiki3_具材ヴィエ・ドラン.mp3"},
  { label: "元気出していこうよ", file: "sounds/yoshiki/yoshiki4_元気出していこうよ.mp3"},
  { label: "ミニラ", file: "sounds/yoshiki/yoshiki5_ミニラ.mp3"},
  { label: "ｳﾙｻｰｲ", file: "sounds/yoshiki/yoshiki6_ｳﾙｻｰｲ.mp3"}
];

const audiolist_uta = [
  { label: "コノヤロー1", file: "sounds/uta/uta1_コノヤロー1.mp3"},
  { label: "コノヤロー2", file: "sounds/uta/uta2_コノヤロー2.mp3"},
  { label: "ギャクターイ", file: "sounds/uta/uta3_虐待.mp3"},
  { label: "誰も言ってねぇだろ！", file: "sounds/uta/uta4_ブス.mp3"},
  { label: "子供みたいなこと言わないでよ", file: "sounds/uta/uta5_子供みたいなこと言わないでよ.mp3"},
  { label: "ろ、老害…笑", file: "sounds/uta/uta6_ろ、老害…笑.mp3"},
  { label: "出ました駄作！", file: "sounds/uta/uta7_出ました駄作！.mp3"}
];

//ボタンを格納する場所
const container = document.getElementById("audioButtons");

//ループでボタンを自動生成（ホーク）
audiolist_hawk.forEach(item =>{
  const button =
  document.createElement("button");
  button.textContent = item.label;

  //クリック時の処理を定義
  button.addEventListener("pointerdown", () =>{
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
  button.addEventListener("pointerdown", () =>{
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
  button.addEventListener("pointerdown", () =>{
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
  button.addEventListener("pointerdown", () =>{
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

function goToPage(index){

  document.querySelectorAll(".page").forEach(page=>{
    page.scrollTop = 0;
  });

  document.getElementById("pages").scrollTo({
    left: window.innerWidth * index,
    behavior: "smooth"
  });
}