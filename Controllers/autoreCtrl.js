 $(document).ready(function(){
     
 $('#btnInsert').click(function(){
        $.post('../Models/putAutore.php',{nome: $("#nomeAut").val()},function(ris){
        	
		      alert(ris);
		      $("#nomeAut").val('');
			
          
        });
    });
 });