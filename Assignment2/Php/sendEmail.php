<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // path to PHPMailer autoloader

// Check if all fields are filled
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);
    try {

        $mail->SMTPDebug = 2;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'sudhanshu.asawa@sigmainfo.net';
        $mail->Password = 'Sudhanshu@123';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setfrom('sudhanshu.asawa@sigmainfo.net', 'Admin');
        $mail->addAddress('sudhanshu.asawa@sigmainfo.net', '@Sudhanshu');

        //Content
        $mail->Subject = 'Mail From ' .$name;
        $mail->Body = $message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
else{
    echo 'Message could not be sent no data.';
}




?>
