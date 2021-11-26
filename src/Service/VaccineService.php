<?php

namespace App\Service;

use App\Entity\VaccineEntity;
use App\Repository\VaccineRepository;

class VaccineService {

    private VaccineRepository $vaccineRepository;

    public function __construct(VaccineRepository $vaccineRepository)
    {
        $this->vaccineRepository = $vaccineRepository;    
    }

    /**
     * Returns the total number of vaccines in the database
     * 
     * @return int The total number of vaccines
     */
    public function getTotalNumberOfVaccines(): int
    {
        return count($this->vaccineRepository->findAll());
    }

    /**
     * Fetches all vaccines from the system and returns them.
     * 
     * @return array All vaccines in the system
     */
    public function getAllVaccines(): array
    {
        return $this->vaccineRepository->findAll();
    }
}