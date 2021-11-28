<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ReactController extends AbstractController
{
    /**
     * Redirects all unregistered routes to the default
     * react webrouting.
     */
    public function navigate(?string $reactRouting): Response
    {
        return $this->render('base.html.twig');
    }
}
