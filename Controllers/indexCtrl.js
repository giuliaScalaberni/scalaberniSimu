$(document).ready(function(){
                  
    //popolo select generi   
    $.getJSON("../Models/getGeneri.php",function(res) {
        if (res) {
            var select=$("#generi");
            $.each(res,function(k,v){
                var option=$('<option value='+v['idGenere']+'>'+v['nome']+'</option>');
				select.append(option);
            });
									
        }
                	    
    });
    
    //se genere cambia, listo sottogenere
    $('#generi').on('change', function(res){
        $.getJSON('../Models/getSottogeneri.php', {idGenere: $("#generi").val()},function(ris){
            var sotto=$("#sottogeneri");
            sotto.empty();
            sotto.append('<option value="null" selected>--Seleziona sottogenere--</option>');
            $.each(ris, function(k, v){
               var list=$('<option value='+v['idSottogenere']+'>'+v['nome']+'</option>');
               sotto.append(list);
            });
        });
    });
    
  $('#sottogeneri').on('change', function(res){
        $.getJSON('../Models/getArtisti.php',function(ris){
            var artisti=$("#artisti");
            artisti.empty();
            artisti.append('<option value="null" selected>--Seleziona artista--</option>');
            $.each(ris, function(k, v){
               var list=$('<option value='+v['idArtista']+'>'+v['nome']+'</option>');
               artisti.append(list);
            });
        });
    });
});
