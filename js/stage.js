
      //  Global Variables
      var tshirt = "front";
      var img_data;
      var getid = 1;
      var selectedid = "txt0";
      var font_array = [
"'Fahkwang', sans-serif",
"'Roboto', sans-serif",
"'Major Mono Display', monospace",
"'ZCOOL KuaiLe', cursive",
"'Montserrat', sans-serif",
"'Oswald', sans-serif",
"'Raleway', sans-serif",
"'Merriweather', serif",
"'Ubuntu', sans-serif",
"'Open Sans Condensed', sans-serif",
"'Inconsolata', monospace",
"'Anton', sans-serif",
"'Indie Flower', cursive",
"'Lobster', cursive",
"'Pacifico', cursive",
"'Abril Fatface', cursive",
"'Shadows Into Light', cursive",
"'Dancing Script', cursive",
"'Acme', sans-serif",
"'Bree Serif', serif",
"'Righteous', cursive",
"'Gloria Hallelujah', cursive",
"'Permanent Marker', cursive",
"'Crete Round', serif",
"'Merienda', cursive",
"'Courgette', cursive",
"'Satisfy', cursive",
"'Concert One', cursive",
"'Great Vibes', cursive",
"'Kaushan Script', cursive",
"'Alfa Slab One', cursive",
"'Special Elite', cursive",
"'Luckiest Guy', cursive",
"'Sacramento', cursive",
"'Tangerine', cursive",
"'Baloo Thambi', cursive",
"'Gochi Hand', cursive",
"'Boogaloo', cursive",
"'Monoton', cursive",
"'Carter One', cursive",
"'Allerta Stencil', sans-serif",
"'Shrikhand', cursive",
"'Damion', cursive",
"'Parisienne', cursive",
"'Caveat Brush', cursive",
"'Black Ops One', cursive",
"'Fredericka the Great', cursive",
"'Rancho', cursive",
"'Squada One', cursive",
"'Raleway Dots', cursive"
      ]




      function update(jscolor)
      {
        document.getElementById('stage-front').style.backgroundColor = '#' + jscolor;
        document.getElementById('stage-back').style.backgroundColor = '#' + jscolor;
      }
      
    $(document).ready(function(){
      


      //  *** Flip tshirt front and  Back Code 

      $("#card").flip({ trigger: 'manual' });
          // front code event
      $('#frontbtn').click(function(){
         $("#card").flip(false);
         tshirt = "front";
         $(this).addClass("btn-info")
         $(this).removeClass("btn-outline-info");
         $("#backbtn").removeClass("btn-info");
         $("#backbtn").addClass("btn-outline-info");
      });
          // back code event
      $('#backbtn').click(function(){
         $("#card").flip(true);
         tshirt = "back";
         $(this).addClass("btn-info")
         $(this).removeClass("btn-outline-info");
         $("#frontbtn").removeClass("btn-info");
         $("#frontbtn").addClass("btn-outline-info");

        
      });

        // enable & disable the file properties background image
      $('#bgimgchk').click(function(){
        //console.log($('#bgimgchk:checked').length);
        
        if( $('#bgimgchk:checked').length == 1){
            $('#bgimgfile').attr("disabled",false).focus();
            bg_pattan('#bgimgfile'); 

        }else
        {
          $('#bgimgfile').attr("disabled",true).focus();
          $('#stage-front').css('background-image','');
          $('#stage-back').css('background-image','');
        }
      });
      
      $('#bgimgfile').change(function(){
          //console.log(true); 
          bg_pattan('#bgimgfile'); 
      });
     
     function bg_pattan(inputfile)
     {
          var file_v    = document.querySelector(inputfile).files[0];
          var reader  = new FileReader();

          reader.onloadend = function () {
            //console.log(reader.result);
            if(inputfile == "#bgimgfile")
              {
                img_data = reader.result;
                $('#stage-front').css('background-image','url('+img_data+')');
                $('#stage-back').css('background-image','url('+img_data+')');
              }
            
          }
          if (file_v) {
            reader.readAsDataURL(file_v);
          } else {   
            img_data = "";      
          }
     }
    
    // change background color if selected
    //  $('.color-box-selected').change(function(){
    //     var color_code = $(this).css("background-color");
    //     //console.log(color_code);
    //  });

     $('.color-box').click(function(){
        $('.color-box-selected').css("background-color",$(this).css("background-color"));
        $('#stage-front').css('background-color',$(this).css("background-color"));
        $('#stage-back').css('background-color',$(this).css("background-color"));
     });



     // **** onclick delete the selected item  ****
     $("#delete_item_btn").click(function(){
        $("#"+selectedid).remove();
     });


     //  ***  Create Dublicate of selected item  ***
     $("#copy_btn").click(function(){
       console.log($("#"+selectedid).children()[0].outerHTML);
        $("#edit-box-"+tshirt).append('<div id="txt'+getid+'" class="my-text" style="z-index:0">'+$("#"+selectedid).children()[0].outerHTML+'</div>');
        $(".my-text").draggable({containment:"parent"});
        $(".my-text").resizable({
          handles:"n,e,s,w,se,ne,sw,nw"
        });

        removestyle(selectedid);
        selectedid = "txt"+getid;
        applystyle(selectedid);
        showtextpan(selectedid);

        $(".my-text").click(function(){          
          removestyle(selectedid);
          selectedid = this.id;
          applystyle(selectedid);
          showtextpan(selectedid);
        });

        getid++;
     });

     //  ** Stage area edit start**
     $('#edit-box-front').width($('#stage-front').width());
     $('#edit-box-front').height($('#stage-front').height()- 50);
     $('#edit-box-back').width($('#stage-back').width());
     $('#edit-box-back').height($('#stage-back').height() -51);


     // default text-box style
     $(".my-text").draggable({containment:"parent"});
     $(".my-text").resizable({
      handles:"n,e,s,w,se,ne,sw,nw"
     });
      $(".my-text").click(function(){          
        removestyle(selectedid);
        selectedid = this.id;
        applystyle(selectedid);
        showtextpan(selectedid);
      });


     $('#add_text_box_btn').click(function(){

        $("#edit-box-"+tshirt).append('<div id="txt'+getid+'" class="my-text" style="z-index:0"><p>Your Text</p></div>');
        $(".my-text").draggable({containment:"parent"});
        $(".my-text").resizable({
          handles:"n,e,s,w,se,ne,sw,nw"
        });
        
        removestyle(selectedid);
        selectedid = "txt"+getid;
        applystyle(selectedid);
        showtextpan(selectedid);

        $(".my-text").click(function(){          
          removestyle(selectedid);
          selectedid = this.id;
          applystyle(selectedid);
          showtextpan(selectedid);
        });

        getid++;
     });


     // edit text   ****
      $("#textpantxt").keyup(function(e){       
          $("#"+selectedid+" p").html($("#textpantxt").val());
      });

      // font text ****
      $("#fontpantxt").change(function(){
        var selectedfont = $(this).children("option:selected").val();
        $("#"+selectedid+" p").css("font-family",font_array[selectedfont].toString());
      }); 

      // font text ****
      $("#sizepantxt").keyup(function(e){
        var selectedsize = $("#sizepantxt").val()+"px";
        $("#"+selectedid+" p").css("font-size",selectedsize);
      }); 


      //onclick add_img_box_btn
      
      var fileselector = document.createElement("input");
        fileselector.setAttribute('type','file');
        fileselector.setAttribute("accept","image/*");

      $("#add_img_box_btn").click(function(){
        fileselector.click();
        
        
      });

      $(fileselector).change(function(){
        var reader = new FileReader();
        var file = $(fileselector)[0].files[0];
        var imgdata = "1.jpg";

        console.log(file);
        reader.onloadend = function () {
            imgdata = reader.result;

            // create img box 
            var imgbox = '<div id="txt'+getid+'" class="my-text" style="z-index:0"><img src="'+imgdata+'" height="100%" width="100%"></div>';
            $("#edit-box-"+tshirt).append(imgbox);
            $("#txt"+getid).css("padding","0px");
            $("#txt"+getid).width(100);
            $("#txt"+getid).height(100);
            $("#txt"+getid).draggable({containment:"parent"});
            $("#txt"+getid).resizable({
              handles:"n,e,s,w,se,ne,sw,nw"
            });

            removestyle(selectedid);
            selectedid = "txt"+getid;
            applystyle(selectedid);
            showtextpan(selectedid);

            $(".my-text").click(function(){          
              removestyle(selectedid);
              selectedid = this.id;
              applystyle(selectedid);
              showtextpan(selectedid);
            });

            getid++;
        }

        if (file) {
          reader.readAsDataURL(file);
        } else {
          console.log("hd");
        }
       
      });

      $("#saveimg").click(function(){
           // console.log("save success");
            
            removestyle(selectedid);
            html2canvas(document.getElementById("edit-box-front")).then(function(canvas) {
                document.body.appendChild(canvas);
                
            });
 
      });



    });
    


    function removestyle(txtboxid)
      {
        var helper;
        for(var i=0;i<getid;i++)
        {
           helper = "#txt"+i; 
          $(helper).css("border","0px");
          $(helper+" div").css("display","");
          $(helper).css("cursor","pointer");
          $(helper).draggable( 'disable' );
          $(helper).resizable( "disable" );
        }
          
      }

      function applystyle(txtboxid)
      {
          $("#"+txtboxid).css("border","1px dashed #555");
          $("#"+txtboxid).css("cursor","move");
          $("#"+txtboxid).draggable( 'enable' );
          $( "#"+txtboxid).resizable( "enable" );
      }

      function showtextpan(selectedtext){
        
        // set text box
        $("#textpantxt").val($("#"+selectedtext).text());

        // set font box
        


       // $("#"+selectedtext).css("font-family","'ZCOOL KuaiLe', cursive");
          console.log($("#"+selectedtext+" p").css("font-family"));


      }
      
      
      function converttoimg()
      {
          
      }