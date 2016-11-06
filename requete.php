<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=applicontact;charset=utf8','root','root');


    $sql = "SELECT * FROM categorie";

    $reponse = $bdd->query($sql);
    $tablereponse = array();

    while($donnees=$reponse->fetch(PDO::FETCH_OBJ)){
        $tablereponse[]=$donnees;
    }
    echo json_encode($tablereponse);
}

catch(Exception $e) {
    die('Erreur connexion base de données : ' . $e->getMessage());
}


?>

