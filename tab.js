// 버튼0누르면
//     모든버튼에 붙은 orange클래스 제거
//     버튼0에 orange클래스추가
//     모든div에 붙은 show 클래스명 ㅈ거
//     div0에 show 클래스명 추가

for (let i = 0; i < $('.tab-button').length; i++) {
  $('.tab-button')
    .eq(i)
    .on('click', function () {
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    });
}
