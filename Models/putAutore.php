<?php
	try{
		$connect=new PDO('mysql:dbname=etichetta;localhost','giuliascalaberni');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
    $stmt = $connect->prepare("INSERT INTO autore (nome) VALUES (:aut)");
    $stmt->bindValue(':aut', $_POST['nome']);
    if ($stmt->execute()) {
        echo "Nuovo autore inserito";
    }
    else
        print_r($stmt->errorInfo());

?>