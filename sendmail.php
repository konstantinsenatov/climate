<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('Пользователь');
	//Кому отправить
	$mail->addAddress('kostyasenatov@gmail.com');
	//Тема письма
	$mail->Subject = 'Вопрос"';

	//Тело письма
	$body = '<h1>Хочу задать вопрос!</h1>';
	
	if(trim(!empty($_POST['question-name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['question-name'].'</p>';
	}
	if(trim(!empty($_POST['question-phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['question-phone'].'</p>';
	}
	if(trim(!empty($_POST['question-message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['question-message'].'</p>';
	}
	
	//Прикрепить файл
	if (!empty($_FILES['question-file']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/" . $_FILES['question-file']['name']; 
		//грузим файл
		if (copy($_FILES['question-file']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Файл</strong>';
			$mail->addAttachment($fileAttach);
		}
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>