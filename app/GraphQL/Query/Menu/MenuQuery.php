<?php
declare(strict_types=1);

namespace App\GraphQL\Query\Menu;

use App\GraphQL\Serialize\MenuSerialize;
use App\Models\Menu;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\SelectFields;
use Rebing\GraphQL\Support\Query;

/**
 * Class MenuQuery
 *
 * @package App\GraphQL\Query\Menu
 */
class MenuQuery extends Query
{
    /**
     * @var array
     */
    protected $attributes = [
        'name'        => 'MenuQuery',
        'description' => 'A query',
    ];

    /**
     * @var
     */
    private $role_id;

    /**
     * @return \GraphQL\Type\Definition\ListOfType
     */
    public function type()
    {
        return Type::listOf(\GraphQL::type('MenuType'));
    }

    /**
     * @return array
     */
    public function args()
    {
        return [
            'id'      => [
                'name' => 'id',
                'type' => Type::id(),
            ],
            'role_id' => [
                'name' => 'role_id',
                'type' => Type::id(),
            ],
        ];
    }

    /**
     * @apiVersion    0.1.0
     * @apiGroup      Menu
     * @apiPermission auth
     * @api           {post} v1 Menu-Query
     * @apiName       Menu-Query
     * @apiParam {Integer} id
     * @apiParam {Integer} role_id role_id
     * @apiParamExample {json} Request-Example:
     * {"query":"{ MenuQuery ( id:1,role_id:1 ) { id,name...}"}
     * @apiSuccess {Integer} id ID
     * @apiSuccess {String} name name
     * @apiSuccess {Integer} slug slug
     * @apiSuccess {Integer} refer refer
     * @apiSuccess {Timestamp} created_at created_at
     * @apiSuccess {Timestamp} updated_at updated_at
     * @apiExample {json} Example usage:
     * {"query":"{ MenuQuery { id,name,slug,refer,created_at,updated_at } }"}
     *
     * @param $root
     * @param $args
     * @param \Rebing\GraphQL\Support\SelectFields $fields
     * @param \GraphQL\Type\Definition\ResolveInfo $info
     *
     * @return \Illuminate\Support\Collection
     */
    public function resolve($root, $args, SelectFields $fields, ResolveInfo $info)
    {
        $query = Menu::query()->where('refer', 1);

        if (isset($args['role_id'])) {
            /*$this->role_id = $args['role_id'];

            $query->with([
                'accessMenu' => function ($query) {
                    $query->where('role_id', $this->role_id);
                },
            ]);*/
        }

        if (isset($args['id'])) {
            $query->where('id', $args['id']);
        }

        return MenuSerialize::collection($query->get());
    }
}