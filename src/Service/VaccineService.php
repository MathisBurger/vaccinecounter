<?php

namespace App\Service;

use App\Repository\VaccineRepository;

class VaccineService
{
    private VaccineRepository $vaccineRepository;
    private SerializingService $serializingService;

    public function __construct(VaccineRepository $vaccineRepository, SerializingService $serializingService)
    {
        $this->vaccineRepository = $vaccineRepository;
        $this->serializingService = $serializingService;
    }

    /**
     * Returns the total number of vaccines in the database.
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
        $vaccines = $this->vaccineRepository->findAll();
        $normalizedVaccines = [];
        foreach ($vaccines as $vaccine) {
            $normalizedVaccines[] = $this->serializingService->normalize($vaccine);
        }

        return $normalizedVaccines;
    }
}
