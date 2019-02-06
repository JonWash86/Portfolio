<?php
if(!isset($_POST['submit']))
{
  echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name)||empty($visitor_email))
{
  echo "Please enter your name and email.";
}

$email_from = "jonathan.washington@gmail.com";
$email_subject = "jw.net: New Form Submission";
$email_body = "You have received a new message from $name.\n".
"email address: $visitor_email\n".
"message: \n $message".

$to = "jonathan.washington@gmail.com";
$headers = "From: $email_from \r\n";
