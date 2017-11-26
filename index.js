const members = ["th", "dh", "br", "ps", "bs"];
let index = 0;

function step(n) {
  index = (index + n) % members.length;
  if (index === -1) id = members.length - 1;
  switchTo(index);
}

function switchTo(id) {
  const member = members[id];
  index = id;

  $('.info').addClass("hidden");
  $(`#${member}`).removeClass("hidden");
  $('#indicator').removeClass().addClass(`m${id}`);
}

function onload() {
  switchTo(0);
  $('.infos').css('height', $('#th p').height() + 100);
  $(window).scroll(function(){
    const y = -$(this).scrollTop();
    $('.eye').css('transform', `translate3d(0 ,${y}px, 0)`); 
  });
}

function scrollDown() {
  const height = $(window).height();
  $('html, body').stop()
    .animate({ scrollTop: height }, 800, 'swing')
}
