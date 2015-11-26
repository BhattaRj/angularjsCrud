<?php
namespace App\Http\Controllers\Sis;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{

    /**
     * Return the index page for Student Information System.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('sis/index');
    }
}
