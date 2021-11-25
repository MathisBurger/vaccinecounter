<?php

namespace App\Controller;

use App\Service\CountService;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class CountController extends AbstractController {

    private CountService $countService;

    public function __construct(CountService $countService)
    {
        $this->countService = $countService;
    }

    /**
     * Returns the number of counts and the latest
     * count in a json array.
     */
    public function getNumberOfCounts(): Response 
    {
        $response = [
            'timestamp' => new DateTime(),
            'counts' => $this->countService->countAllPeopleInHome(),
            'latestCount' => $this->countService->getLatestCount(),
        ];
        return new JsonResponse($response);
    }
}