<?php

namespace App\Controller;

use App\Entity\Note;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/api", name: "api_main")]

class NoteController extends AbstractController
{
    #[Route('/notes', name: 'notes_index', methods: ["GET"])]
    public function index(EntityManagerInterface $em): Response
    {
        $notes = $em->getRepository(Note::class)->findAll();
        $data = [];
        
        foreach($notes as $note) {
            $data[] = [
                "id" => $note->getId(),
                "title" => $note->getTitle(),
                "note" => $note->getNote(),
                "date" => $note->getDate()
            ];
        }
        return $this->json($data);
    }

    #[Route('/notes', name: 'note_add', methods: ["POST"])]
    public function new(Request $request, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $note = new Note();
        $note->setTitle($request->request->get("title"));
        $note->setNote($request->request->get("note"));
        $note->setDate(new \DateTime("now"));

        $em->persist($note);
        $em->flush();

        return $this->json(["id" => $note->getId(), "title" => $note->getTitle(), "note" => $note->getNote(), "date" => $note->getDate()]);
    }

    #[Route('/notes/{id}', name: 'note_delete', methods: ["DELETE"])]
    public function delete(int $id, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();

        $note = $em->getRepository(Note::class)->find($id);
        if (!$note) {
            return $this->json("No project found for id ".$id, 404);
        }

        $em->remove($note);
        $em->flush();

        return $this->json("Deleted project with id ".$id);
    }

    #[Route('/notes/{id}', name: 'note_edit', methods: ["PUT"])]
    public function edit(Request $request, int $id, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();

        $note = $em->getRepository(Note::class)->find($id);
        if (!$note) {
            return $this->json("No project found for id ".$id, 404);
        }

        $content = json_decode($request->getContent());
        // $note->setTitle($content->title);
        $note->setNote($content->note);
        $em->flush();

        $data = [
            "title" => $note->getTitle(),
            "note" => $note->getName(),
            "date" => $note->getDate()
        ];

        return $this->json($data);
    }
}
