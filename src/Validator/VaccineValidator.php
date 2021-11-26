<?php

namespace App\Validator;

use App\Entity\VaccineEntity;
use Symfony\Component\HttpFoundation\Request;

class VaccineValidator {

    /**
     * Validates the given request
     */
    public function validateRequest(Request $request): bool
    {
        $data = json_decode($request->getContent(), true);
        return ($data['vaccine'] ?? null) !== null;
    }

    /**
     * Checks if there is a valid type given.
     */
    public function validateVaccineType(string $type): bool
    {
        $arr = [
            VaccineEntity::VACCINE_ASTRA,
            VaccineEntity::VACCINE_BIONTECH,
        ];
        return in_array($type, $arr);
    }
}