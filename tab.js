// 버튼0누르면
//     모든버튼에 붙은 orange클래스 제거
//     버튼0에 orange클래스추가
//     모든div에 붙은 show 클래스명 ㅈ거
//     div0에 show 클래스명 추가

$('.tab-button')
  .eq(0)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
  });

$('.tab-button')
  .eq(1)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
  });

$('.tab-button')
  .eq(2)
  .on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
  });
