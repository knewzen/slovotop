<?php
declare(strict_types=1);

namespace App\GraphQL\Mutation\User;

use App\GraphQL\Serialize\UserSerialize;
use App\Models\User;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\SelectFields;

/**
 * Class DeleteUserMutation
 *
 * @package App\GraphQL\Mutation
 */
class DeleteUserMutation extends Mutation
{
    /**
     * @var array
     */
    protected $attributes = [
        'name'        => 'DeleteUserMutation',
        'description' => 'A mutation',
    ];

    /**
     * @return mixed
     */
    public function type()
    {
        return \GraphQL::type('UserType');
    }

    /**
     * @return array
     */
    public function args()
    {
        return [
            'items' => [
                'name' => 'items',
                'type' => Type::string(),
            ],
        ];
    }

    /**
     * @apiVersion    0.1.0
     * @apiGroup      User
     * @apiPermission auth
     * @api           {post} v1 User-Delete
     * @apiName       User-Delete
     * @apiParam {String{1,2,3...}} items items
     * @apiParamExample {json} Request-Example:
     * {"query":"mutation { DeleteUserMutation (items: "1,2,3") { id } }"}
     * @apiSuccess {Array} id ['id' => id ,'notify' => trans('data.notifyOK')]
     *
     * @param $root
     * @param $args
     * @param \Rebing\GraphQL\Support\SelectFields $fields
     * @param \GraphQL\Type\Definition\ResolveInfo $info
     *
     * @return array
     */
    public function resolve($root, $args, SelectFields $fields, ResolveInfo $info)
    {
        $items = explode(',', $args['items']);

        foreach ($items as $key) {
            $user = User::findOrfail($key);
            if (!$user->hasRole(1)) {
                $user->delete();
                $user->roles()->delete();
            }
        }

        return [
            'id'     => $user->id,
            'notify' => trans('data.notifyOK'),
        ];
    }
}