<?php

namespace App\Controller;

use App\Service\CountFactory;
use App\Service\CountService;
use App\Validator\CountValidator;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CountController extends AbstractController
{
    private CountService $countService;
    private CountFactory $countFactory;
    private CountValidator $countValidator;

    public function __construct(
        CountService $countService,
        CountFactory $countFactory,
        CountValidator $countValidator
    ) {
        $this->countService = $countService;
        $this->countFactory = $countFactory;
        $this->countValidator = $countValidator;
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

    /**
     * Creates a new count in the database, with
     * the inHouse value depending on weather the customer
     * is in the house or not.
     */
    public function createCount(Request $request): Response
    {
        if (!$this->countValidator->validateCreateCount($request->getContent())) {
            return new JsonResponse([
                'timestamp' => new DateTime(),
                'message' => 'failed to create count',
                'ok' => false,
            ]);
        }
        $req = json_decode($request->getContent(), false);
        $this->countFactory->createCount($req->inHouse);

        return new JsonResponse([
            'timestamp' => new DateTime(),
            'message' => 'successfully created new count',
            'ok' => true,
        ]);
    }

    /**
     * Updates the oldest count and sets the inHouse value
     * to false.
     */
    public function removeOldestActiveCount(): Response
    {
        $count = $this->countService->getOldestCount();
        $newCount = $this->countFactory->updateInHouse($count, false);

        return new JsonResponse([
            'timestamp' => new DateTime(),
            'message' => 'successfully removed count',
            'new_count' => $newCount,
        ]);
    }

    /**
     * Returns all counts from the database.
     */
    public function getAllCounts(): Response
    {
        return new JsonResponse([
            'timestamp' => new DateTime(),
            'message' => 'successfully fetched all counts',
            'counts' => $this->countService->getAllCounts(),
        ]);
    }
}
