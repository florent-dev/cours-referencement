<?php

$login_normal = "user";
$login_admin = "admin";
$password = "ajax";

session_start();

// S'il s'agit d'une déconnexion
if ( isset($_POST['deconnexion']) ) {
    unset($_SESSION['user']);
    session_unset();
    session_destroy();
    return;
}

// On regarde si l'utilisateur est déjà connecté
if ( isset($_SESSION['user']) ) {
    echo $_SESSION['user'];
    return;
}

// On obtient les données du formulaire de connexion
if ( isset($_POST['login']) && isset($_POST['password']) ) {

    if ( !empty($_POST['login']) && !empty($_POST['password']) ) {

        if ($_POST['login'] == $login_normal && $_POST['password'] == $password) {
            $_SESSION['user'] = $login_normal;
            echo $_SESSION['user'];
            return;
        } else if ($_POST['login'] == $login_admin && $_POST['password'] == $password) {
            $_SESSION['user'] = $login_admin;
            echo $_SESSION['user'];
            return;
        }

    }

    echo 'ERR_CONNEXION';
}