<?php

namespace App\Validator;

class CountValidator
{
    /**
     * Checks if the request is valid and returns
     * the state as boolean.
     *
     * @return bool if the request is valid
     */
    public function validateCreateCount(string $json): bool
    {
        $params = json_decode($json, true);

        return ($params['inHouse'] ?? null) !== null;
    }
}
