<?php

namespace App\Http;

class Helper {
    public static function sortCars($q, $options=[])
    {
        // Sort
        if (!empty(request('sortBy'))) {
            $order = request('sortBy');
            $field = null;

            if ($order === "lowest-price") {
                $field = "price";
                $order = "ASC";
            }
            if ($order === "highest-price") {
                $field = "price";
                $order = "DESC";
            }
            if ($order === "newest") {
                $field = "date_published";
                $order = "ASC";
            }

            if (!is_null($field)) return $q->orderBy($field, $order); 
        }
        
        return $q;
    }
}