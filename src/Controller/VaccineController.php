<?php

namespace App\Controller;

use App\Service\VaccineFactory;
use App\Service\VaccineService;
use App\Validator\VaccineValidator;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class VaccineController extends AbstractController {

    private VaccineService $vaccineService;
    private VaccineFactory $vaccineFactory;
    private VaccineValidator $vaccineValidator;

    public function __construct(
        VaccineService $vaccineService, 
        VaccineFactory $vaccineFactory,
        VaccineValidator $vaccineValidator
    ) {
        $this->vaccineService = $vaccineService;
        $this->vaccineFactory = $vaccineFactory;
        $this->vaccineValidator = $vaccineValidator;
    }

    /**
     * Returns the total number of vaccines
     */
    public function getNumberOfVaccines(): Response
    {
        return new JsonResponse([
            'timestamp' => new DateTime(),
            'message' => 'successfully fetched number of vaccines',
            'count' => $this->vaccineService->getTotalNumberOfVaccines(),
        ]);
    }

    /**
     * Fetches all vaccines from the database
     */
    public function getAllVaccines(): Response
    {
        return new JsonResponse([
            'timestamp' => new DateTime(),
            'message' => 'successfully queried all vaccines',
            'vaccines' => $this->vaccineService->getAllVaccines(),
        ]);
    }

    /**
     * Creates a new vaccine
     */
    public function createVaccine(Request $request): Response
    {
        if (!$this->vaccineValidator->validateRequest($request)) {
            return new JsonResponse([
                'ok' => false,
                'timestamp' => new DateTime(),
                'message' => 'invalid request'
            ]);
        }
        $data = json_decode($request->getContent(), false);
        if (!$this->vaccineValidator->validateVaccineType($data->vaccine)) {
            return new JsonResponse([
                'ok' => false,
                'timestamp' => new DateTime(),
                'message' => 'The given vaccine type is invalid'
            ]);
        }
        $this->vaccineFactory->createVaccine($data->vaccine);
        return new JsonResponse([
            'ok' => true,
            'timestamp' => new DateTime(),
            'message' => 'successfully created new vaccine',
        ]);
    }
}