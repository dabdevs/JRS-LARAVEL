<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarModel extends Model
{
    protected $fillable = ["name"];
    
    /**
     * Get the Manufacturer that owns the model
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Manufacturer()
    {
        return $this->belongsTo(CarModel::class);
    }
}
