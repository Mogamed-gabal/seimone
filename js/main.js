

function changeNavbarBg()
{
  let aboutOfi=$('#about').offset().top;
  $(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    if(wScroll > aboutOfi-75)
    {
      $('nav').css('backgroundColor','black');
      $('#up').fadeIn(500)
    }else
    {
      $('nav').css('backgroundColor','transparent');
      $('#up').fadeOut(1000)
    }
    
  })
}
$('#up').click(function(){
  $('html,body').animate({scrollTop:0},500)
})

changeNavbarBg()
$('nav a').click(function(e)
{
  let sectionLink=$(linkHref).offset().top;
  $('html,body').animate({scrollTop:sectionLink},2000)
})
$('ul li').click(function(e){
  $(e.target).parent().css('border-bottom','solid 2px white');
  $(e.target).parent().siblings().css('border-bottom','none');
})
function setColorBox()
{
  let colors=$('.color-item')
  colors.eq(0).css('background-color','green')
colors.eq(1).css('background-color','blue')
colors.eq(2).css('background-color','red')
colors.eq(3).css('background-color','orange')
colors.eq(4).css('background-color','grey');
colors.click((e)=>
{
  let color=$(e.target).css('backgroundColor');
  $('h3').css('color',color)
})
$('#color-box i').click(function()
{
  $('#color-box').animate({right:'-200px'},10)
})

}
setColorBox()