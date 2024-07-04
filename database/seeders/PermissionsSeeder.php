<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'create roles']);
        Permission::create(['name' => 'read roles']);
        Permission::create(['name' => 'edit roles']);
        Permission::create(['name' => 'delete roles']);

        Permission::create(['name' => 'create cars']);
        Permission::create(['name' => 'read cars']);
        Permission::create(['name' => 'edit cars']);
        Permission::create(['name' => 'delete cars']);
        Permission::create(['name' => 'publish cars']);
        Permission::create(['name' => 'unpublish cars']);

        // create admin role 
        $admin = Role::create(['name' => 'admin']);

        // Assign permissions
        $admin->givePermissionTo('create roles');
        $admin->givePermissionTo('read roles');
        $admin->givePermissionTo('edit roles');
        $admin->givePermissionTo('delete roles');

        $admin->givePermissionTo('create cars');
        $admin->givePermissionTo('read cars');
        $admin->givePermissionTo('edit cars');
        $admin->givePermissionTo('delete cars');
        $admin->givePermissionTo('publish cars');
        $admin->givePermissionTo('unpublish cars');

        // create admin user
        $adminUser = \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@jrs.com',
        ]);
        
        $adminUser->assignRole($admin);
    }
}
