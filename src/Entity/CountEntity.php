<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CountRepository;
use DateTimeInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="counts")
 */
class CountEntity {

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;


    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?DateTimeInterface $createdAt = null;

    public function getId(): int 
    {
        return $this->id;
    }

    public function getCreatedAt(): ?DateTimeInterface 
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?DateTimeInterface $createdAt): self 
    {
        $this->createdAt = $createdAt;
        return $this;
    }
}