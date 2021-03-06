<?php
declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskCommentSaveValidation;
use App\Http\Requests\TaskSaveValidation;
use App\Http\Resources\Comments\Comment as CommentResource;
use App\Http\Resources\Task\TaskList;
use App\Models\Comment;
use App\Models\Task;
use App\Http\Resources\Task\Task as TaskResource;
use App\Models\TaskStage;
use Carbon\Carbon;
use Illuminate\Http\Request;

/**
 * Class TaskController
 * @package App\Http\Controllers\Api
 */
class TaskController extends Controller
{
    /**
     * @param Request $request
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getTasks(Request $request)
    {
        $task = Task::query();

        if (!\Auth::user()->isAdmin()) {
            $task->whereHas('stage', function ($query) {
                $query->whereHas('roles', function ($q) {
                    $q->whereIn('role_id', \Auth::user()->getRoles())->where('access', '>', 0);
                });
            });
        }

        if (isset($request->name)) {
            $task->where('name', 'like', '%' . $request->name . '%');
        }
        if (isset($request->project)) {
            $project = $request->project;
            $task->whereHas('project', function ($query) use ($project) {
                $query->where('name', 'like', '%' . $project . '%');
            });
        }
        if (isset($request->author)) {
            $author = $request->author;
            $task->whereHas('user', function ($query) use ($author) {
                $query->where('name', 'like', '%' . $author . '%');
            });
        }
        if (isset($request->owner)) {
            $owner = $request->owner;
            $task->whereHas('user', function ($query) use ($owner) {
                $query->where('name', 'like', '%' . $owner . '%');
            });
        }

        return TaskList::collection($task->get());
    }

    /**
     * @param Request $request
     *
     * @return TaskResource
     */
    public function getTask(Request $request)
    {
        $task = Task::query();

        if (!\Auth::user()->isAdmin()) {
            $task->whereHas('stage', function ($query) {
                $query->whereHas('roles', function ($q) {
                    $q->whereIn('role_id', \Auth::user()->getRoles())->where('access', '>', 0);
                });
            });
        }

        return new TaskResource($task->find($request->id));
    }

    /**
     * @param TaskSaveValidation $request
     *
     * @return array
     */
    public function saveTask(TaskSaveValidation $request)
    {
        $task = Task::findOrNew($request->id);

        $task->name = $request->name;
        $task->user_id = $request->user_id;
        $task->project_id = $request->project;
        $task->status_id = $request->status;
        $task->stage_id = $this->getStage($request->stage, $request->stageDirection);
        $task->subject_id = $request->subject;
        $task->price = $request->price;
        $task->title = $request->title;
        $task->desc = $request->desc;
        $task->words = $request->words;
        $task->more_data = $request->moreData;
        $task->task = $request->task;
        $task->text_body = $request->textBody;
        $task->text_preview = $request->textPreview;
        $task->text_url = $request->textUrl;
        $task->text_min = $request->textMin;
        $task->text_max = $request->textMax;
        $task->text_unique = $request->textUnique;

        $task->save();

        return ['success' => trans('data.notifyOK'), 'id' => $task->id];
    }

    /**
     * @param $stage
     * @param $stageDirection
     *
     * @return mixed
     */
    private function getStage($stage, $stageDirection)  //TODO
    {
        if ($stageDirection == 1 && $stage) {
            return TaskStage::where('priority', '>', $stage)->orderBy('priority', 'asc')->first()->id;
        }
        if ($stageDirection == 2 && $stage) {
            return TaskStage::where('priority', '<', $stage)->orderBy('priority', 'desc')->first()->id;
        }
        if ($stageDirection == 0 && $stage) {
            return $stage;
        }

        return TaskStage::orderBy('priority', 'asc')->first()->id;
    }

    /**
     * @param Request $request
     *
     * @return array
     */
    public function deleteTask(Request $request)
    {
        foreach ($request->items as $item) {
            $task = Task::find($item['id']);
            $task->comments()->delete();
            $task->delete();
        }

        return ['success' => trans('data.notifyOK')];
    }

    /**
     * @param Request $request
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getTaskComments(Request $request)
    {
        $task = Task::with('comments.user')->find($request->id);

        return CommentResource::collection($task->comments);
    }

    /**
     * @param TaskCommentSaveValidation $request
     *
     * @return array
     */
    public function saveTaskComment(TaskCommentSaveValidation $request)
    {
        $comment = new Comment(['body' => $request->comment, 'user_id' => $request->user]);

        $task = Task::find($request->task);
        $task->comments()->save($comment);

        return ['success' => trans('data.notifyOK')];
    }
}