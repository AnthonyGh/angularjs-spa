app.service('scriptService', function() {
     this.scriptNote = function() {

        /*Pour chaque tooltip */
        $(".tooltip").each(function(index) {
            /*je commence l'index à 1 */
            index = index + 1;
            /*pour l'attribut id, je le récupère et je lui ajouter l'index */
            $(this).attr("id", this.id + index);
            /*j'affiche l'index en html */
            $(this).html("<sup>["+index+"]</sup>");
        });





        $(".tooltiptext").each(function(index) {
            index = index + 1;
            $(this).attr("id", this.id + index);
            var note = $(this).html();
            $(this).html("<span class='croix'>x</span>["+index+"] " + note);
        });


        /*Boite modal bootstrap */
        $('#myModal').on('shown.bs.modal', function () {
          $('#myInput').trigger('focus')
        })


        /*ScrollTOp fade + smooth */
        $(document).ready(function(){
        
            $('#scroll').hide();

            $(function(){
                $(window).scroll(function(){
                   if ($(this).scrollTop() > 200){
                       $('#scroll').fadeIn();
                   }else{
                       $('#scroll').fadeOut();
                   }
                });
            });

             $('#scroll').click(function(){
                $('body,html').animate({
                   scrollTop: 0
                }, 300);
                return false;
             });

            });




        $("#note0").click(function(){
              $("#notetext0").fadeToggle(500);
        });
        
        $("#note1").click(function(){
              $("#notetext1").fadeToggle(500);
        });
    
        $("#note2").click(function(){
              $("#notetext2").fadeToggle(500);
        });
    
        $("#note3").click(function(){
              $("#notetext3").fadeToggle(500);
        });
    
        $("#note4").click(function(){
              $("#notetext4").fadeToggle(500);
        });
    
        $("#note5").click(function(){
              $("#notetext5").fadeToggle(500);
        });
    
        $("#note6").click(function(){
              $("#notetext6").fadeToggle(500);
        });
    
        $("#note7").click(function(){
              $("#notetext7").fadeToggle(500);
        });
    
        $("#note8").click(function(){
              $("#notetext8").fadeToggle(500);
        });
    
        $("#note9").click(function(){
              $("#notetext9").fadeToggle(500);
        });
    
        $("#note10").click(function(){
              $("#notetext10").fadeToggle(500);
        });
    
        $("#note11").click(function(){
              $("#notetext11").fadeToggle(500);
        });
    
        $("#note12").click(function(){
              $("#notetext12").fadeToggle(500);
        });
    
        $("#note13").click(function(){
              $("#notetext13").fadeToggle(500);
        });
    
        $("#note14").click(function(){
              $("#notetext14").fadeToggle(500);
        });
    
        $("#note15").click(function(){
              $("#notetext15").fadeToggle(500);
        });
    
        $("#note16").click(function(){
              $("#notetext16").fadeToggle(500);
        });
        
        $(".croix").click(function(){
        
              $("#notetext0").fadeOut(500);
              $("#notetext1").fadeOut(500);
              $("#notetext2").fadeOut(500);
              $("#notetext3").fadeOut(500);
              $("#notetext4").fadeOut(500);
              $("#notetext5").fadeOut(500);
              $("#notetext6").fadeOut(500);
              $("#notetext7").fadeOut(500);
              $("#notetext8").fadeOut(500);
              $("#notetext9").fadeOut(500);
              $("#notetext10").fadeOut(500);
              $("#notetext11").fadeOut(500);
              $("#notetext12").fadeOut(500);
              $("#notetext13").fadeOut(500);
              $("#notetext14").fadeOut(500);
              $("#notetext15").fadeOut(500);
              $("#notetext16").fadeOut(500);
        });


        
     };
 });