<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

abstract class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Variable to store items per page for pagination.
     * @var integer
     */
    protected $per_page = 10;

    /**
     * Default page no. for pagination.
     * @var integer
     */
    protected $current_page = 1;

}
