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

        // Create role permissions
        Permission::create(['name' => 'create roles']);
        Permission::create(['name' => 'read roles']);
        Permission::create(['name' => 'edit roles']);
        Permission::create(['name' => 'delete roles']);

        // Create cars permissions
        Permission::create(['name' => 'create cars']);
        Permission::create(['name' => 'read cars']);
        Permission::create(['name' => 'edit cars']);
        Permission::create(['name' => 'delete cars']);
        Permission::create(['name' => 'publish cars']);
        Permission::create(['name' => 'unpublish cars']);

        // Create contact permissions
        Permission::create(['name' => 'read contacts']);
        Permission::create(['name' => 'reply contacts']);
        Permission::create(['name' => 'delete contacts']);

        // Create loan applications permissions
        Permission::create(['name' => 'create applications']);
        Permission::create(['name' => 'read applications']);
        Permission::create(['name' => 'edit applications']);
        Permission::create(['name' => 'delete applications']);
        Permission::create(['name' => 'approve applications']);
        Permission::create(['name' => 'deny applications']);

        // create admin role 
        $admin = Role::create(['name' => 'admin']);

        // Assign role permissions to admin
        $admin->givePermissionTo('create roles');
        $admin->givePermissionTo('read roles');
        $admin->givePermissionTo('edit roles');
        $admin->givePermissionTo('delete roles');

        // Assign car permissions to admin
        $admin->givePermissionTo('create cars');
        $admin->givePermissionTo('read cars');
        $admin->givePermissionTo('edit cars');
        $admin->givePermissionTo('delete cars');
        $admin->givePermissionTo('publish cars');
        $admin->givePermissionTo('unpublish cars');

        // Assign contact permissions to admin
        $admin->givePermissionTo('read contacts');
        $admin->givePermissionTo('reply contacts');
        $admin->givePermissionTo('delete contacts');

        // Assign loan applications permissions to admin
        $admin->givePermissionTo('create applications');
        $admin->givePermissionTo('read applications');
        $admin->givePermissionTo('edit applications');
        $admin->givePermissionTo('delete applications');
        $admin->givePermissionTo('approve applications');
        $admin->givePermissionTo('deny applications');

        // create admin user
        $adminUser = \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@jrs.com',
        ]);
        
        $adminUser->assignRole($admin);
    }
}
