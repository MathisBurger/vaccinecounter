<?php

namespace App\Service;

use App\Entity\CountEntity;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;

class CountFactory {

    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $em)
    {
        $this->entityManager = $em;
    }

    /**
     * Creates a new count in the database
     * 
     * @return CountEntity the created entity
     */
    public function createCount(?bool $inHouse): CountEntity
    {
        $entity = (new CountEntity())
            ->setCreatedAt(new DateTime())
            ->setInHouse($inHouse);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();
        return $entity;
    }
}