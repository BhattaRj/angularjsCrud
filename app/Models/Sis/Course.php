<?php

namespace App\Models\Sis;

use App\Models\BaseModel;

class Course extends BaseModel
{

    protected $table    = "courses";
    protected $fillable = array('name', 'section_name', 'code', 'status');

}
