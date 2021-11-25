<?php

namespace App\Service;

use App\Entity\CountEntity;
use App\Repository\CountRepository;

class CountService {

    private CountRepository $countRepository;

    public function __construct(CountRepository $countRepository)
    {
        $this->countRepository = $countRepository;
    }

    /**
     * Gets all counts from the database that are left
     * in the house and counts them;
     * 
     * @return int The number of counts that are in the house
     */
    public function countAllPeopleInHome(): int 
    {
        return count($this->countRepository->findBy(['inHouse' => true]));
    }

    /**
     * Fetches the latest entity from the database
     * and returns it.
     * 
     * @return CountEntity|null the latest count entity
     */
    public function getLatestCount(): ?CountEntity
    {
        return $this->countRepository->findBy([], ['id' => 'DESC'])[0] ?? null;
    }
}