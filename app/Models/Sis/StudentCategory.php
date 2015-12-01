<?php

namespace App\Models\Sis;

use App\Models\BaseModel;

class StudentCategory extends BaseModel
{
    protected $table    = "student_categories";
    protected $fillable = ['name', 'code', 'description'];
}
