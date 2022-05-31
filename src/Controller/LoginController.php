<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    #[Route('/api/login', name: 'app_login')]
    public function login(): Response
    {
        return $this->json("login controller: login");
    }

    #[Route('/api/logout', name: 'app_logout')]
    public function logout(): Response
    {
        return $this->json("login controller: logout");
    }
}
