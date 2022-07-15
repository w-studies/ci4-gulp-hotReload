<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        echo '<pre>$_POST: ';
        print_r($_POST);
        echo '</pre>';

        echo '<pre>$_GET: ';
        print_r($_GET);
        echo '</pre>';


        return view('welcome_message');
    }
}
