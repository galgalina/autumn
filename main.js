$(document).ready(function() {
    $("#firstLeaf").click(function(){
      $(this).hide( "explode", {pieces: 25 }, 2000 );
      $(this).show( "explode", {pieces: 25}, 500 ).css( "background", "url('images/leaf1-let.png') no-repeat" );
    });


    $("#secondLeaf").click(function(){
      $(this).hide( "explode", {pieces: 16 }, 2000 );
      $(this).show( "explode", {pieces: 16}, 500 ).css( "background", "url('images/leaf2-let.png') no-repeat" );
    });


    $("#thirdLeaf").click(function(){
      $(this).hide( "explode", {pieces: 16 }, 2000 );
      $(this).show( "explode", {pieces: 16}, 500 ).css( "background", "url('images/leaf3-let.png') no-repeat" );
    });


    $("#fourthLeaf").click(function(){
      $(this).hide( "explode", {pieces: 16 }, 2000 );
      $(this).show( "explode", {pieces: 16}, 500 ).css( "background", "url('images/leaf4-let.png') no-repeat" );
    });


    $("#fifthLeaf").click(function(){
      $(this).hide( "explode", {pieces: 16 }, 2000 );
      $(this).show( "explode", {pieces: 16}, 500 ).css( "background", "url('images/leaf5-let.png') no-repeat" );
    });


    $("#sixthLeaf").click(function(){
      $(this).hide( "explode", {pieces: 16 }, 2000 );
      $(this).show( "explode", {pieces: 16}, 500 ).css( "background", "url('images/leaf6-let.png') no-repeat" );
    });

});