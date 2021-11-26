<?php

namespace App\Service;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class SerializingService {

    private Serializer $serializer;

    public function __construct()
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $this->serializer = new Serializer($normalizers, $encoders);
    }

    /**
     * Normalizes an object to be sent via JSON.
     * 
     * @param mixed $object The initial object that should be normalized
     * @return mixed normalized object 
     */
    public function normalize(mixed $object): mixed {
        return $this->serializer->normalize($object, null);
    }
}