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
    $('#generi').on('change', function(){
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
    
  //se genere cambia, listo sottogenere
    $('#btnArtisti').click(function(){
        $.getJSON('../Models/getArt.php', function(ris){
            var i=0;
             var table=$('<br> <table id="tableArt" style="border:solid 2px; border-color:green" class="table"><tbody></tbody></table>');
                table.append('<thead style="border:solid 2px; border-color:green"><tr><th>Nome</th><th>BIO</th><th>Anni</th><th></th></tr></thead>');
                $.each(ris,function(k,v){
					i++;
                    var row=$('<tr id="row"+'+v["idArtista"]+'><td>'+v['nome']+'</td><td>'+v['biografia']+'</td><td>'+v['anni_attività']+'</td><td> <button type="button" onClick="open(this.id)" id='+v["idArtista"]+'  class="trash btn btn-default"><span class="glyphicon glyphicon-search"></span></button></td></tr>');
                  	table.append(row);
                });
							if (i==0){
								$("#contentArtisti").empty();
								$("#contentArtisti").append("<label>NOTHING INSERTED BY YOU!</label>");
								
							}
							else{
								$("#contentArtisti").empty();
                                $("#contentArtisti").append(table);
							
								}
          
        });
    });
});
