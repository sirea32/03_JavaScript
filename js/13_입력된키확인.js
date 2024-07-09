
// 준비한 이미지 파일명을 저장할 배열
const images = ["1.png", "2.png", "3.png", "4.png"];







// /* 문서 전체에 keydown 이벤트 리스너 추가 */
// document.addEventListener("keydown", function(e){
//   // e : 이벤트 객체
//   // e.key : 입력한(누른) key
//   console.log(e.key);
// })



// const key = document.addEventListener("keydown", function(q){})
// const key = document.addEventListener("keydown", function(w){})
// const key = document.addEventListener("keydown", function(e){})
// const key = document.addEventListener("keydown", function(r){})

// for(let i=0; i<btn.length; i++){

//   // 각 버튼 요소 클릭시
//   btn[i].addEventListener("keydown", function(e.key){



//     // #result3의 배경색을 color 변수에 저장된 값으로 변경
//     btn.style.backgroundColor = "steelblue";
//   });
// }



// 클래스가 key인 요소를 모두 얻어와 배열형태로 저장
const keys = document.querySelectorAll(".key");
// 입력키 : Q W E R
// 인덱스 : 0 1 2 3 

/* 문서 전체에 keydown 이벤트 리스너 추가*/
// document.addEventListener("keydown", function(e){
//   // e : 이벤트 객체
//   // e.key : 입력한 key
//   // console.log(e.key);

//   switch(e.key){
//     case 'q' : keys[0].style.backgroundColor = "steelblue"; break;
//     case 'w' : keys[1].style.backgroundColor = "steelblue"; break;
//     case 'e' : keys[2].style.backgroundColor = "steelblue"; break;
//     case 'r' : keys[3].style.backgroundColor = "steelblue"; break;
//   }
// });

// switch 대신
  // if(e.key === 'q'){
  //   keys[0].style.backgroundColor = "steelblue";

  // } else if(e.key === 'w'){
  //   keys[1].style.backgroundColor = "steelblue";
  // }
// 이 있지만 손이 더 감... 무튼 위에보다 더 요약하면
// 밑에 처럼 된다 ↙
document.addEventListener("keydown", function(e){

  let index; // 인덱스를 저장할 변수

  // 문자열.toUpperCase() : 문자열을 대문자로 변환 
  // 문자열.toLowerCase() : 문자열을 소문자로 변환
  // switch(e.key.to~case()){ // 입력 키를 대/소문자로 변환 }
  switch(e.key){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return; // 다른 키 입력 시 종료
  }

  // 배경을 색만 넣기
  // keys[index].style.backgroundColor = "steelblue";

  // 배경을 이미지로 지정
  keys[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`;
  
  // 글자색 투명으로 변경
  // - rgba(red, green, blue, alpha)
  // - rgb 값은 0 ~ 255 / alpha(투명도) 0(투명) ~ 1(불투명)

  keys[index].style.color = "rgba(0, 0, 0, 0)";
  
});




/* 문서 전체에 keydown 이벤트 리스너 추가*/
// document.addEventListener("keyup", function(e){

//   switch(e.key){
//     case 'q':  keys[0].style.backgroundColor = "white"; break;
//     case 'w':  keys[1].style.backgroundColor = "white"; break;
//     case 'e':  keys[2].style.backgroundColor = "white"; break;
//     case 'r':  keys[3].style.backgroundColor = "white"; break;
//   }

// });

document.addEventListener("keyup", function(e){

  let index;

  switch(e.key){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default: return;
  }

  // keys[index].style.backgroundColor = "white";

  // 배경 이미지 제거
  keys[index].style.backgroundImage = "none";

  // 글자색 검정
  keys[index].style.color = "rgba(0,0,0,1)";  

});



/* 이미지가 마우스 따라 다니게 하기 */

// 숨겨놓은 이미지
const cursorImage = document.querySelector("#cursorImage");

// 문서 전체에 "mousemove"(마우스가 움직였을 때) 감지 추가
document.addEventListener("mousemove", function(e){

  // console.log(e);
  // e.pageX : 가로 방향 마우스 위치(왼쪽에서 떨어진 px)
  // e.pageY : 세로 방향 마우스 위치(위쪽에서 떨어진 px)

  cursorImage.style.left = `${e.pageX + 10}px`;
  cursorImage.style.top = `${e.pageY + 10}px`;
})