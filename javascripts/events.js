$(document).ready(function(){

  // Ações do usuário que mostram e/ou escondem o logotipo.
  // Por padrão, mostra no topo e fim da página.
  // Remova ou reescreva de acordo com o projeto.

  $(window).scroll(function(){

    var nav = $("nav");
    var scroll = $(window).scrollTop();

    // Mostra o nav quando a página está no topo
    if(scroll == 0){
      nav.fadeIn();
    //Mostra a nav quando a página chega no fim
    } else if (scroll == $(document).height() - $(window).height()) {
      nav.fadeIn();
    //Esconde a nav
    } else {
      nav.fadeOut();
    }

  });


   $(".ancora").click(function(event){
   event.preventDefault();
   var dest=0;
   if($(this.hash).offset().top > $(document).height()-$(window).height()){
     dest=$(document).height()-$(window).height();
   }else{
     dest=$(this.hash).offset().top;
   }
   $('html,body').animate({scrollTop:dest}, 2000,'swing');
 });



$("#click").click(function() {
      $('html, body').animate({
         scrollTop: $("#conteudo").offset().top
     }, 2000);
    });

    $("#click1").click(function() {
      $('html, body').animate({
         scrollTop: $("#conteudo1").offset().top
     }, 2000);
    });

    $("#click2").click(function() {
      $('html, body').animate({
         scrollTop: $("#conteudo2").offset().top
     }, 2000);
    });
    $("#click3").click(function() {
      $('html, body').animate({
         scrollTop: $("#conteudo3").offset().top
     }, 2000);
    });
    $("#click4").click(function() {
      $('html, body').animate({
         scrollTop: $("#conteudo4").offset().top
     }, 2000);
      });
      
    $(".botao_respostas").click(function() {
      $("#conteudo5").show();
      $('html, body').animate({
         scrollTop: $("#conteudo5").offset().top
     }, 2000);
    });

     $(".botao_escolha1").click(function(){
          $(this).css({"background-color": "#27365D;", "color": "white"});
          $(".botao_escolha2").css({"background-color": "white", "color": "black"})
          $(".3conjuntos").show();
          $(".2conjuntos").hide();
         });
     $(".botao_escolha2").click(function(){
          $(this).css({"background-color": "#27365D;", "color": "white"})
          $(".botao_escolha1").css({"background-color": "white", "color": "black"})
          $(".2conjuntos").show();
          $(".3conjuntos").hide();
         });

     $(".voltar").click(function(){
      var id2 = $(this).attr('id').substr(1,3);
      console.log(id2)
  
            $(".definicao").hide();
            $(".elementos_relacionados" + id2).show();

         });
     

     $(".avancar").click(function(){
      var id = $(this).attr('id');
      console.log(id)
  
            $(".definicao").hide();
            $(".elementos_relacionados" + id).show();

         });

       $('.toggle').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
    console.log($this)
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

        $(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {

      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});

$(".botao40").click(function() {
    if ($('.carousel-inner .carousel-item:nth-child(0)').hasClass('active')) {
          $('.texto').hide();
          $('.um').show();
       }
    if ($('.carousel-inner .carousel-item:nth-child(1)').hasClass('active')) {
          $('.botao30').show();
          $('.carousel-control-prev').show();
          $('.texto').hide();
          $('.dois').show();
       }
    if ($('.carousel-inner .carousel-item:nth-child(2)').hasClass('active')) {
          $('.texto').hide();
          $('.tres').show();
       }
       if ($('.carousel-inner .carousel-item:nth-child(3)').hasClass('active')) {
          $('.texto').hide();
          $('.quatro').show();
       }
       if ($('.carousel-inner .carousel-item:nth-child(4)').hasClass('active')) {
          $('.texto').hide();
          $('.cinco').show();
          $('.botao40').hide();
          $('.carousel-control-next').hide();
       }
        });

  $(".botao30").click(function() {
    if ($('.carousel-inner .carousel-item:nth-child(2)').hasClass('active')) {
          $('.texto').hide();
          $('.um').show();
          $('.botao30').hide();
          $('.carousel-control-prev').hide();
       }
    if ($('.carousel-inner .carousel-item:nth-child(3)').hasClass('active')) {
          $('.texto').hide();
          $('.dois').show();
       }
    if ($('.carousel-inner .carousel-item:nth-child(4)').hasClass('active')) {
          $('.texto').hide();
          $('.tres').show();
       }
       if ($('.carousel-inner .carousel-item:nth-child(5)').hasClass('active')) {
          $('.texto').hide();
          $('.quatro').show();
          $('.botao40').show();
          $('.carousel-control-next').show();
       }
       if ($('.carousel-inner .carousel-item:nth-child(6)').hasClass('active')) {
          $('.texto').hide();
          $('.cinco').show();
       }
        });

   $(".botao_respostas2").click(function() {
      window.print();
    });
 
})
