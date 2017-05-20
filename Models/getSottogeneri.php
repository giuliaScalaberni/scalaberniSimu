<?php
try{
		$connect=new PDO('mysql:dbname=etichetta;localhost','giuliascalaberni');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
    $stmt = $connect->prepare("SELECT * FROM sottogenere WHERE Genere_idGenere='".$_GET['idGenere']."'");
    if ($stmt->execute()) {
        echo json_encode($stmt->fetchAll());
    }
?>