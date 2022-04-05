
 //  Global Variables
      var tshirt = "front";
      var boldsty = true;
      var italicsty = true;
      var underlinesty = true;
      var overlinesty = true;
      var img_data;
      var getid = 1;
      var imgsrc_front= "",imgsrc_back = "";
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
      ];
      
      
    function update(jscolor)
      {
        document.getElementById('stage-front').style.backgroundColor = '#' + jscolor;
        document.getElementById('stage-back').style.backgroundColor = '#' + jscolor;
      }

    function fontcolorupdate(jscolor)
    {
      document.getElementById(selectedid).getElementsByTagName("p")[0].style.color = '#'+jscolor;
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
         
         
         
         console.log(tshirt);
      });
          // back code event
      $('#backbtn').click(function(){
          
        
         $("#card").flip(true);
         tshirt = "back";
         $(this).addClass("btn-info")
         $(this).removeClass("btn-outline-info");
         $("#frontbtn").removeClass("btn-info");
         $("#frontbtn").addClass("btn-outline-info");
        
        console.log(tshirt);
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
            if(inputfile === "#bgimgfile")
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
     $('#edit-box-front').height($('#stage-front').height());
     $('#edit-box-back').width($('#stage-back').width());
     $('#edit-box-back').height($('#stage-back').height());


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
      $("#sizepantxt").on("keyup change",function(e){
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
            getid++;
            applystyle(selectedid);
            showtextpan(selectedid);


            $(".my-text").click(function(){          
              removestyle(selectedid);
              selectedid = this.id;
              applystyle(selectedid);
              showtextpan(selectedid);
            });

            
        }

        if (file) {
          reader.readAsDataURL(file);
        } else {
          console.log("hd");
        }
       
      });
      
      
      //  toggle for bold effect
      $("#boldstyle").click(function(){
          if(boldsty){
              $("#"+selectedid).css("font-weight","bold");
              $(this).css("background-color","#595858");
              $(this).css("color","#fff");
              boldsty = false;
          }else
          { 
              $("#"+selectedid).css("font-weight","normal");
              $(this).css("background-color","#6c757d");
              $(this).css("color","#fff");
              boldsty = true;
          }
      });
      
      
      //  toggle for italic effect
      $("#italicstyle").click(function(){
          if(italicsty){
              $("#"+selectedid).css("font-style","italic");
              $(this).css("background-color","#595858");
              $(this).css("color","#fff");
              italicsty = false;
          }else
          { 
              $("#"+selectedid).css("font-style","normal");
              $(this).css("background-color","#6c757d");
              $(this).css("color","#fff");
              italicsty = true;
          }
      });
      
      
       //  toggle for underline effect
      $("#underlinestyle").click(function(){
          if(underlinesty){
              $("#"+selectedid+" p").css("text-decoration","underline");
              $(this).css("background-color","#595858");
              $(this).css("color","#fff");
              underlinesty = false;
          }else
          { 
              $("#"+selectedid+" p").css("text-decoration","none");
              $(this).css("background-color","#6c757d");
              $(this).css("color","#fff");
              underlinesty = true;
          }
      });
      
      //  toggle for overline effect
      $("#overlinestyle").click(function(){
          if(overlinesty){
              $("#"+selectedid).css("text-decoration","line-through");
              $(this).css("background-color","#595858");
              $(this).css("color","#fff");
              overlinesty = false;
          }else
          { 
              $("#"+selectedid).css("text-decoration","none");
              $(this).css("background-color","#6c757d");
              $(this).css("color","#fff");
              overlinesty = true;
          }
      });
      
     //:::::::: Save Image Front
      $("#saveimgfront").click(function(){

          
         $("#card").flip(false);
         tshirt = "front";
         $(this).addClass("btn-info")
         $(this).removeClass("btn-outline-info");
         $("#backbtn").removeClass("btn-info");
         $("#backbtn").addClass("btn-outline-info");
         
          removestyle(selectedid);

          html2canvas(document.getElementById("front-face")).then(function(canvas){
            imgsrc_front = Canvas2Image.convertToJPEG(canvas,530,630).src;
            $("#myimagefront").attr("src",imgsrc_front);
          });
      });


      //  :::::::: Save Image Back
      $("#saveimgback").click(function(){

        $("#card").flip(true);
        tshirt = "back";
        $(this).addClass("btn-info")
        $(this).removeClass("btn-outline-info");
        $("#frontbtn").removeClass("btn-info");
        $("#frontbtn").addClass("btn-outline-info");

        removestyle(selectedid);

          html2canvas(document.getElementById("back-face")).then(function(canvas){
            imgsrc_back = Canvas2Image.convertToJPEG(canvas,530,630).src;
            $("#myimageback").attr("src",imgsrc_back);
          });
      });
      

     

      //  ::::::::: Product Selection :::::::::
      var prices = [200,250,150,450,400,300,250];
      var price_tamp = 200;

      $("#productselected button").click(function(){
        console.log($(this).val());

        $("#stage-front").attr("src","../img/stagehelper/product_type_"+$(this).val()+"_front.png");
        $("#stage-back").attr("src","../img/stagehelper/product_type_"+$(this).val()+"_back.png");
      
        var qty = $("#qtytxt").val();
        var product_price =prices[ $(this).val()-1];
        price_tamp = product_price;
        $("#pricetxt").html("Rs. "+(product_price*qty)+" /-");
          
      });





      $("#qtytxt").change(function()
      {
         var qty = $("#qtytxt").val();
         
        $("#pricetxt").html("Rs. "+(price_tamp*qty)+" /-");
      
      });


    $("#resetbtn").click(function(){
      $("#edit-box-front").html('<div id="txt0" class="my-text" style="z-index:0"><p>Your Text</p></div>');
      $("#edit-box-back").html('');
      $("#stage-front").css("background-image","");
      $("#stage-back").css("background-image","");
      $("#stage-front").css("background-color","#fff");
      $("#stage-back").css("background-color","#fff");

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


    });
      
    $("#nav-background div img").click(function(){
     
      $('#stage-front').css('background-image','url('+$(this).attr("src")+')');
      $('#stage-back').css('background-image','url('+$(this).attr("src")+')');

    });
    $("#nav-tamplete div img").click(function(){
     
      

      // create img box 
      var imgbox = '<div id="txt'+getid+'" class="my-text" style="z-index:0"><img src="'+$(this).attr("src")+'" height="100%" width="100%"></div>';
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
      getid++;

      applystyle(selectedid);
      showtextpan(selectedid);

      $(".my-text").click(function(){  
        console.log("hello");        
        removestyle(selectedid);
        selectedid = this.id;
        applystyle(selectedid);
        showtextpan(selectedid);
      });

      

    });



      
  }); // end jquery
      
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
        
        if($("#"+selectedid).children()[0].tagName == "P")
        {
            
            // set text box
            $("#textpantxt").val($("#"+selectedtext).text());
            
            
            
            // set font box
            var str = $("#"+selectedtext+" p").css("font-family");
            font_array.forEach(function(element,inx){
              
              if(element.split(",")[0] == str.split(",")[0] ||
              element.split(",")[0] == "'"+str.split(",")[0]+"'")
              {
                $("#fontpantxt").val(inx);
              }
            });
            
            // set size
            var str = $("#"+selectedtext+" p").css("font-size").toString();
            $("#sizepantxt").val(str.slice(0,str.length-2));
            
            // set style
            // over line
            if($("#"+selectedid).css("text-decoration").split(" ")[0] == "line-through")
            {
              $("#overlinestyle").css("background-color","#595858");
              $("#overlinestyle").css("color","#fff");
              overlinesty = false;
            }else{
              $("#overlinestyle").css("background-color","#6c757d");
              $("#overlinestyle").css("color","#fff");
              overlinesty = true;
            }
            
            // underline
            if($("#"+selectedid+" p").css("text-decoration").split(" ")[0] == "underline")
            {
              $("#underlinestyle").css("background-color","#595858");
              $("#underlinestyle").css("color","#fff");
              underlinesty = false;
            }else{
              $("#underlinestyle").css("background-color","#6c757d");
              $("#underlinestyle").css("color","#fff");
              underlinesty = true;
            }
            
            // italic
            if($("#"+selectedid).css("font-style") == "italic")
            {
              $("#italicstyle").css("background-color","#595858");
              $("#italicstyle").css("color","#fff");
              italicsty = false;
            }else{
              $("#italicstyle").css("background-color","#6c757d");
              $("#italicstyle").css("color","#fff");
              italicsty = true;
            }
            
            // bold
            if($("#"+selectedid).css("font-weight") == "700")
            {
              $("#boldstyle").css("background-color","#595858");
              $("#boldstyle").css("color","#fff");
              boldsty = false;
            }else{
              $("#boldstyle").css("background-color","#6c757d");
              $("#boldstyle").css("color","#fff");
              boldsty = true;
            }
            
            
            //  set font color
            
            $("#textcolor").css("background-color",$("#"+selectedid+" p").css("color"));
            

          
        }
          
          
          
          
          
          // $("#"+selectedtext).css("font-family","'ZCOOL KuaiLe', cursive");
          //  console.log($("#"+selectedtext+" p").css("font-family"));
        }
        
        function datasave(imgurl,modes)
        {
          var url = "http://localhost:8080/eShritmaker_3/imgdata";
          var url2 = "http://localhost:8080/eShritmaker_3/imgdata1";
          $.post(url,
          {
              imgmode:modes,
              imgdataurl: imgurl
          },
            function(data,status){
              alert("Data: " + data + "\nStatus: " + status);
             
             //document.appendChild("<img src='"+data+"' >");
            });
          
          $(location).attr("href",url2);
      }
