<?php

namespace App\Entity;

use App\Repository\VaccineRepository;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="vaccines")
 */
class VaccineEntity {

    const VACCINE_BIONTECH = 'BIONTECH';
    const VACCINE_ASTRA = 'ASTRACENECA';

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?DateTimeInterface $createdAt;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private ?string $vaccine;

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

    public function getVaccine(): ?string
    {
        return $this->vaccine;
    }

    public function setVaccine(?string $vaccine): self
    {
        $this->vaccine = $vaccine;
        return $this;
    }
}