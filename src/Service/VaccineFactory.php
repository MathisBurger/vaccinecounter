<?php

namespace App\Service;

use App\Entity\VaccineEntity;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;

class VaccineFactory
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Creates a new vaccine entry in the database.
     *
     * @param string $vaccine The type of vaccine
     *
     * @return VaccineEntity the whole database entry
     */
    public function createVaccine(string $vaccine): VaccineEntity
    {
        $entity = (new VaccineEntity())
            ->setCreatedAt(new DateTime())
            ->setVaccine($vaccine);

        $this->entityManager->persist($entity);
        $this->entityManager->flush();

        return $entity;
    }
}
