<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use App\Entity\CountEntity;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CountEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method CountEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method CountEntity[]    findAll()
 * @method CountEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CountRepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CountEntity::class);
    }
}