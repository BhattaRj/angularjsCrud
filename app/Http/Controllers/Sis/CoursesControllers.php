<?php
namespace App\Http\Controllers\Sis;

use App\Http\Controllers\Controller;
use App\Models\Sis\Course;
use Illuminate\Http\Request;

class CoursesControllers extends Controller
{
    protected $course;

    public function __construct(Course $course)
    {
        $this->course = $course;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //$result['data'] = $this->course->all();
        $query = $this->course;

        if ($request->has('currentPage')) {
            $this->current_page = $request->input('currentPage');
        }

        $skip            = ($this->current_page - 1) * $this->per_page;
        $result['total'] = $query->get()->count();
        $result['data']  = $query->skip($skip)->take($this->per_page)->get();

        return $result;
    }

    // $query = $this->model->with('company', 'skills', 'jobType','viewsCount')->where('status', '1')->orderBy('created_at', 'desc');

    // if ($request->has('currentPage')) {
    //     $this->current_page = $request->input('currentPage');
    // }

    // if ($request->has('keyword')) {
    //     $query->where('title', 'like', '%' . $request->input('keyword') . '%');
    // }

    // if ($request->has('job_skill_cat_id')) {
    //     $query->where('job_skill_cat_id', $request->input('job_skill_cat_id'));
    // }

    // if ($request->has('level')) {
    //     $query->where('job_type_id', $request->input('level'));
    // }

    // if ($request->has('budget')) {
    //     $budget = json_decode($request->input('budget'));
    //     $query->whereBetween('budget', [$budget->minBudget, $budget->maxBudget]);
    // }

    // if ($request->has('job_type_id')) {
    //     $query->where('job_type_id', $request->input('job_type_id'));
    // }

    // $skip            = ($this->current_page - 1) * $this->per_page;
    // $result['total'] = $query->get()->count();
    // $result['data']  = $query->skip($skip)->take($this->per_page)->get();

    // return $result;

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $result['data']    = $this->course->create($request->input('data'));
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
        $result['data']    = $this->course->findById($id);
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

        /**
         * Validate and update the flat recored.
         * Sync with facilites_flat povit table.
         */
        $result['data']    = $this->course->updateModel($request->input('data'), $id);
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
        $this->course->remove($id) ? $result['success'] = true : $result['success'] = false;
        return $result;
    }
}
