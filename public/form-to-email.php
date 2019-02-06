<?php

if(isset($_POST['submitButton'])){

if ($_POST["name"]==""||$_POST["email"]==""||$_POST["message"]==""){
  echo "Please fill out all the fields.";
}else{


$email=$_POST['email'];

$email=filter_var($email, FILTER_SANITIZE_EMAIL);

$email=filter_val($email, FILTER_VALIDATE_EMAIL);
if(!$email){
  echo "Invalid Sender's Email";
}
else{
  $subject = "jw.net: New Form Submission";
  $message = $_POST['message'];
  $headers = 'From'. $email . "rn";
  $message = wordwrap($message, 70);

  mail("jonathan.washington@gmail.com", $subject, $message, $headers);

  echo "Your message has been sent successfully! Thanks for taking the time."
}
}

// $name = $_POST['name'];
// $visitor_email = $_POST['email'];
// $message = $_POST['message'];

// if(empty($name)||empty($visitor_email))
// {
//   echo "Please enter your name and email.";
// }
//
// $email_from = "jonathan.washington@gmail.com";
// $email_subject = "jw.net: New Form Submission";
// $email_body = "You have received a new message from $name.\n".
// "email address: $visitor_email\n";
// "message: \n $message";
//
// $to = "jonathan.washington@gmail.com";
// $headers = "From: $email_from \r\n";
// mail($to, $email_subject, $email_body, $headers);
}

?>
