<?php
declare(strict_types=1);

namespace App\Http\Resources\Users;

use Illuminate\Http\Resources\Json\Resource;

/**
 * Class User
 * @package App\Http\Resources\Users
 */
class UserLittle extends Resource
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
            'id'   => $this->id,
            'name' => $this->name,
        ];
    }
}
