<?php

namespace App\Http\Controllers\Sis;

use App\Http\Controllers\Controller;
use App\Models\Sis\StudentCategory;
use Illuminate\Http\Request;

class StudentCategoriesController extends Controller
{
    private $studentCategory;

    public function __construct(StudentCategory $studentCategory)
    {
        $this->studentCategory = $studentCategory;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = $this->studentCategory;

        if ($request->has('currentPage')) {
            $this->current_page = $request->input('currentPage');
        }

        $skip            = ($this->current_page - 1) * $this->per_page;
        $result['total'] = $query->get()->count();
        $result['data']  = $query->skip($skip)->take($this->per_page)->get();

        return $result;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $result['data']    = $this->studentCategory->create($request->input('data'));
        $result['success'] = true;
        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result['data']    = $this->studentCategory->findById($id);
        $result['success'] = true;
        return $result;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $result['data']    = $this->studentCategory->updateModel($request->input('data'), $id);
        $result['success'] = true;
        return $result;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->studentCategory->remove($id) ? $result['success'] = true : $result['success'] = false;
        return $result;
    }
}
