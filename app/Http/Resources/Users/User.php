<?php
declare(strict_types=1);

namespace App\Http\Resources\Users;

use Illuminate\Http\Resources\Json\Resource;

/**
 * Class User
 * @package App\Http\Resources\Users
 */
class User extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'email'      => $this->email,
            'confirm'    => $this->confirm,
            'tasksCount' => $this->tasks()->count(),
            'lastLogin'  => $this->lastLogin ? $this->lastLogin->updated_at->format('d-m-Y H:m:s') : null,
            'roles'      => $this->transformRoles($this->roles),
            'created_at' => $this->created_at->format('d-m-Y H:m:s'),
            'up_price'   => $this->up_price,
            'note'       => $this->note,
        ];
    }

    /**
     * @param $roles
     *
     * @return mixed
     */
    private function transformRoles($roles)
    {
        return $roles->transform(function ($item) {
            return [
                'id'   => $item->role->id,
                'name' => $item->role->name,
            ];
        });
    }
}
