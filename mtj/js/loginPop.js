$(document).ready(function () {
      $(".login-active").click(function () {
        $(".login-form").modal();
      });
      $(".reset-password").click(function(){
        $(".forgot-password").fadeIn();
      });
      $(".reset-btn").click(function(){
        $(".forgot-password").fadeOut();
      });
      $("#top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

  // $(".modal-backdrop").click(function(){
  //       $(".forgot-password").fadeIn();
  //     });


    })
