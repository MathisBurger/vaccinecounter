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

    /**
     * Updates the given CountEntity with the new inHouse value
     * 
     * @param CountEntity $entity The initial entity
     * @param ?bool $inHouse the new inHouse value
     */
    public function updateInHouse(CountEntity $entity, ?bool $inHouse): CountEntity
    {
        $entity = $entity->setInHouse($inHouse);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();
        return $entity;
    }
}