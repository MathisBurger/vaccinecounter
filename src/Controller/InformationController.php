<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class InformationController extends AbstractController {

    /**
     * Returns the basic information about the server and
     * the project.
     * 
     * @return array The general project information
     */
    private function getInformation(): array {
        return [
            'version' => $_ENV['APP_VERSION'],
            'mode' => $_ENV['APP_ENV'],
            'debug' => $_ENV['APP_DEBUG']
        ];
    }

    /**
     * Returns the general server and project information 
     * as a json array.
     * 
     * @return Response The general json response
     */
    public function getAsJSON(): Response {
        return new JsonResponse($this->getInformation());
    }
}