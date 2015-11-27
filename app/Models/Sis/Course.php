<?php

namespace App\Models\Sis;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{

    protected $table    = "courses";
    protected $fillable = array('name', 'section_name', 'code', 'status');

}
