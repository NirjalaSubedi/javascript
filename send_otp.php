<?php
$otp = $_POST['otp'];
$mobile = $_POST['mobile'];

$apiKey = urlencode('your_textlocal_api_key');
$sender = urlencode('TXTLCL');
$message = urlencode("Your OTP is: $otp");

$data = "apikey=$apiKey&numbers=$mobile&sender=$sender&message=$message";

$ch = curl_init('https://api.textlocal.in/send/');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo "OTP sent to $mobile";
?>