<?php

$errors = [];

if (!empty($_POST)) {
   $Fname = $_POST['Fname'];
   $Lname = $_POST['Lname'];
   $email = $_POST['email'];
   $message = $_POST['comments'];

   if (empty($Fname)) {
       $errors[] = 'First Name is empty';
   }
   if (empty($Lname)) {
    $errors[] = 'Last Name is empty';
}

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } 

   if (empty($message)) {
       $errors[] = 'Message is empty';
   }
}

if (empty($errors)) {
    $toEmail = 'abdulkaleem254@gmail.com';
    $emailSubject = 'New email from your contant form';
    $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

    $bodyParagraphs = ["Name: {$Fname}{$Lname}", "Email: {$email}", "Message:", $message];
    $body = join(PHP_EOL, $bodyParagraphs);

    if (mail($toEmail, $emailSubject, $body, $headers)) {
        header('Location: index.html');
    } else {
        $errorMessage = 'Oops, something went wrong. Please try again later';
    }
} else {
    $allErrors = join('<br/>', $errors);
    $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
}
}

?>
