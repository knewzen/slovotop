<?php
declare(strict_types=1);

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

/**
 * Class TaskStageType
 *
 * @package App\GraphQL\Type
 */
class TaskStageType extends GraphQLType
{
    /**
     * @var array
     */
    protected $attributes = [
        'name'        => 'TaskStageType',
        'description' => 'A type',
    ];

    /**
     * @return array
     */
    public function fields()
    {
        return [
            'id'         => [
                'type'        => Type::nonNull(Type::id()),
                'description' => 'TaskStageType ID',
            ],
            'name'       => [
                'type'        => Type::string(),
                'description' => 'TaskStageType name',
            ],
            'priority'      => [
                'type'        => Type::string(),
                'description' => 'TaskStageType priority',
            ],
            'created_at' => [
                'type'        => Type::string(),
                'description' => 'TaskStageType created_at',
            ],
            'updated_at' => [
                'type'        => Type::string(),
                'description' => 'TaskStageType updated_at',
            ],
            'notify'     => [
                'type'        => Type::string(),
                'description' => 'notify',
                'selectable'  => false,
            ],
        ];
    }
}