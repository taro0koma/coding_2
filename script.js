
// ❶  横一列を描画する !
const area1 = document.getElementById('mark_1');
let row1 = [];
for (let i = 0; i < 5; i++) {
  row1 = row1 + '■';
}
area1.innerHTML = row1;

// ❷ 四角形を描画する !
const area2 = document.getElementById('mark_2');
let row2 = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    row2 = row2 + '■';
  }
  row2 = row2 + '<br>';
}
area2.innerHTML = row2;

// ❸ 四角形の中心を区切って描画する !
const area3 = document.getElementById('mark_3');
let row3 = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j == 2) {
      row3 = row3 + '□';
    } else {
      row3 = row3 + '■';
    }
  }
  row3 = row3 + '<br>';
}
area3.innerHTML = row3;

// ❹ 直角三角形を作る
const area4 = document.getElementById('mark_4');
let row4 = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i + 1; j++) {
    row4 = row4 + '■';
  }
  row4 = row4 + '<br>';
}
area4.innerHTML = row4;

// ❺ 三角形を作る
const area5 = document.getElementById('mark_5');
let row5 = [];
for (let i = 0; i < 5; i++) {
  row5 = row5 + '　'.repeat(5 - i);
  for (let j = 0; j < i + 1; j++) {
    row5 = row5 + '■';
  }
  row5 = row5 + '■'.repeat(i);
  row5 = row5 + '<br>';
}
area5.innerHTML = row5;

// ❻ ３段目で区切った三角形を描画する !
const area6 = document.getElementById('mark_6');
let square = '■';
let row6 = [];
for (let i = 0; i < 5; i++) {
  row6 = row6 + '　'.repeat(5 - i);
  if (i === 2) square = '□'; else { square = '■' };
  for (let j = 0; j < i + 1; j++) {
    row6 = row6 + square;
  }
  row6 = row6 + square.repeat(i);
  row6 = row6 + '<br>';
}
area6.innerHTML = row6;


// ❼ ピクロス風に描画する !
const area7 = document.getElementById('mark_7');
const pattern = [
  ['■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■'],
  ['■', '■', '□', '■', '□', '■', '■', '■', '□', '■', '■', '■'],
  ['■', '■', '□', '■', '□', '■', '□', '□', '□', '□', '□', '■'],
  ['■', '■', '□', '■', '□', '■', '■', '□', '□', '□', '■', '■'],
  ['■', '□', '□', '□', '□', '□', '■', '■', '□', '■', '■', '■'],
  ['■', '□', '■', '□', '■', '□', '■', '■', '□', '■', '■', '■'],
  ['■', '□', '□', '■', '□', '□', '■', '□', '□', '□', '■', '■'],
  ['■', '■', '■', '■', '■', '■', '■', '■', '□', '■', '■', '■']
];
let row7 = [];


for (let i = 0; i < pattern.length; i++) {
  row7 = row7 + '<span class="fade-in">';
  for (let j = 0; j < pattern[i].length; j++) {
    row7 = row7 + pattern[i][j];
  }
  row7 = row7 + '<br></span>';
  area7.innerHTML = row7;
}

// ❽ おまけ
const area8 = document.getElementById('mark_8');
const pattern8 = [
  ['■', '■', '■', '■', '■', '□', '□', '■', '■', '■', '■', '■', '■','■', '■', '■', '■', '■', '□', '□', '■', '■', '■', '■', '■', '■', '■'],
  ['■', '■', '□', '■', '□', '□', '□', '■', '□', '□', '□', '□', '□','■', '■', '□', '■', '□', '□', '□', '■', '□', '□', '□', '□', '□', '■'],
  ['■', '■', '□', '■', '□', '■', '■', '■', '□', '■', '■', '■', '□','■', '■', '□', '■', '□', '■', '■', '■', '□', '■', '■', '■', '□', '■'],
  ['■', '□', '□', '□', '□', '□', '■', '■', '□', '■', '■', '■', '□','■', '□', '□', '□', '□', '□', '■', '■', '□', '■', '■', '■', '□', '■'],
  ['■', '■', '□', '■', '□', '■', '■', '■', '■', '■', '■', '■', '□','■', '■', '□', '■', '□', '■', '■', '■', '■', '■', '■', '■', '□', '■'],
  ['■', '■', '■', '■', '□', '■', '■', '■', '■', '■', '■', '■', '□','■', '■', '■', '■', '□', '■', '■', '■', '■', '■', '■', '■', '□', '■'],
  ['■', '■', '■', '□', '□', '■', '■', '■', '■', '■', '■', '□', '■','■', '■', '■', '□', '□', '■', '■', '■', '■', '■', '■', '□', '■', '■'],
  ['■', '■', '□', '■', '■', '■', '■', '■', '■', '■', '□', '■', '■','■', '■', '□', '■', '■', '■', '■', '■', '■', '■', '□', '■', '■', '■']
];
let row8 = [];

for (let i = 0; i < pattern8.length; i++) {
  row8 = row8 + '<span class="fade-in2">';
  for (let j = 0; j < pattern8[i].length; j++) {
    row8 = row8 + '<span>' + pattern8[i][j] + '</span>';
  }
  row8 = row8 + '<br></span>';
  area8.innerHTML = row8;
}