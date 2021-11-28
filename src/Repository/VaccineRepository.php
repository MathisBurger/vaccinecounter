<?php

namespace App\Repository;

use App\Entity\VaccineEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method VaccineEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method VaccineEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method VaccineEntity[]    findAll()
 * @method VaccineEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VaccineRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VaccineEntity::class);
    }
}
