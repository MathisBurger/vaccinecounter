<?php

namespace App\Service;

use App\Entity\CountEntity;
use App\Repository\CountRepository;

class CountService {

    private CountRepository $countRepository;
    private SerializingService $serializingService;

    public function __construct(CountRepository $countRepository, SerializingService $serializingService)
    {
        $this->countRepository = $countRepository;
        $this->serializingService = $serializingService;
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
        return $this->countRepository->findBy(['inHouse' => true], ['id' => 'DESC'])[0] ?? null;
    }

    /**
     * Returns the oldest active count entity
     * 
     * @return CountEntity|null the oldest active count entity
     */
    public function getOldestCount(): ?CountEntity
    {
        return $this->countRepository->findBy(['inHouse' => true], ['id' => 'ASC'])[0] ?? null;
    }

    /**
     * Returns all counts that are given in the database
     * 
     * @return array ALl counts in the database
     */
    public function getAllCounts(): array
    {
        $counts = $this->countRepository->findAll();
        $normalizedCounts = [];
        foreach ($counts as $count) {
            $normalizedCounts[] = $this->serializingService->normalize($count);
        }
        return $normalizedCounts;
    }
}