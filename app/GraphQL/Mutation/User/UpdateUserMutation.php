<?php
declare(strict_types=1);

namespace App\GraphQL\Mutation\User;

use App\GraphQL\Serialize\UserSerialize;
use App\Models\User;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Illuminate\Validation\Rule;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\SelectFields;

/**
 * Class UpdateUserMutation
 *
 * @package App\GraphQL\Mutation
 */
class UpdateUserMutation extends Mutation
{
    /**
     * @var array
     */
    protected $attributes = [
        'name'        => 'UpdateUserMutation',
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
            'id'       => [
                'name' => 'id',
                'type' => Type::ID(),
            ],
            'name'     => [
                'name'  => 'name',
                'type'  => Type::string(),
                'rules' => ['required'],
            ],
            'surname'  => [
                'name' => 'surname',
                'type' => Type::string(),
            ],
            'email'    => [
                'name'  => 'email',
                'type'  => Type::string(),
                'rules' => ['required'],
            ],
            'role'     => [
                'name'  => 'role',
                'type'  => Type::string(),
                'rules' => ['required'],
            ],
            'password' => [
                'name' => 'password',
                'type' => Type::string(),
            ],
            'confirm'  => [
                'name' => 'confirm',
                'type' => Type::int(),
            ],
        ];
    }

    /**
     * @apiVersion    0.1.0
     * @apiGroup      Mutation
     * @apiPermission admin
     * @api           {post} v1 UpdateUserMutation
     * @apiName       UpdateUserMutation
     * @apiParam {Integer{required,1..}} id ID
     * @apiParam {String{required}} name name
     * @apiParam {String} surname surname
     * @apiParam {String{required,email,unique}} email email
     * @apiParam {String{required}} role role (1,2,3)
     * @apiParam {String} password password
     * @apiParam {String} confirm confirm
     * @apiParamExample {json} Request-Example:
     * {"query":"mutation { UpdateUserMutation (id: 1,name:"name",surname:"surname",email:"email",role: "1,2",confirm:
     * 1,password: "password" ) { id } }"}
     * @apiSuccess {Object} user [User]
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
        $user = User::findOrfail($args['id']);

        $user->name    = $args['name'];
        $user->surname = $args['surname'] ?? '';
        $user->email   = $this->validMail($args);
        $user->confirm = $user->hasRole(1) ? 1 : $args['confirm'];

        if ($args['password']) {
            $user->password = bcrypt($args['password']);
        }

        $user->save();

        $user->roles()->delete();
        $user->roles()->createMany($this->cleanRole($args['role']));

        return UserSerialize::serialize($user);

    }

    /**
     * clean role for createMany
     *
     * @param $roles
     *
     * @return array
     */
    private function cleanRole($roles): array
    {
        $rolls = array_unique(explode(',', $roles));

        if ( ! in_array(1, $rolls)) {
            foreach ($rolls as $val) {
                $array[]['role_id'] = $val;
            }

            return $array;
        }

        return [['role_id' => 1]];
    }

    /**
     * valid mail
     *
     * @param array $args
     *
     * @return mixed
     */
    private function validMail(array $args)
    {
        $validator = \Validator::make($args, [
            'email' => Rule::unique('users')->ignore($args['id']),
        ]);
        if ($validator->fails()) {
            return User::find($args['id'])->email;
        }

        return $args['email'];
    }
}