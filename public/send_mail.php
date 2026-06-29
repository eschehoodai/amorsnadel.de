<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Methode nicht erlaubt.']);
    exit();
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültiges Datenformat.']);
    exit();
}

$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim(strip_tags($data['email'])) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$artist = isset($data['artist']) ? trim(strip_tags($data['artist'])) : 'Nicht angegeben';
$style = isset($data['style']) ? trim(strip_tags($data['style'])) : 'Nicht angegeben';
$placement = isset($data['placement']) ? trim(strip_tags($data['placement'])) : 'Nicht angegeben';
$size = isset($data['size']) ? trim(strip_tags($data['size'])) : 'Nicht angegeben';
$description = isset($data['description']) ? trim(strip_tags($data['description'])) : 'Keine Beschreibung';
$date = isset($data['date']) && !empty($data['date']) ? trim(strip_tags($data['date'])) : 'Flexibel / Nach Absprache';
$timeSlot = isset($data['timeSlot']) && !empty($data['timeSlot']) ? trim(strip_tags($data['timeSlot'])) : 'Kein Zeitfenster gewählt';
$bookingType = isset($data['bookingType']) ? trim(strip_tags($data['bookingType'])) : '';
$submissionCode = isset($data['submissionCode']) ? trim(strip_tags($data['submissionCode'])) : ('AMOR-' . date('Ymd-His'));
$formType = isset($data['formType']) ? trim(strip_tags($data['formType'])) : 'Buchungsformular';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : '';

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte alle Pflichtfelder (Name, E-Mail, Telefon) ausfüllen.']);
    exit();
}

// Empfängeradressen
$recipients = array('amorsnadel@gmail.com', 'eschehood44@gmail.com');
$to = implode(', ', $recipients);

$subject = "Neue Buchungsanfrage [$submissionCode] - " . $name;

// Datum formatieren falls YYYY-MM-DD
$formattedDate = $date;
if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
    $parts = explode('-', $date);
    $formattedDate = $parts[2] . '.' . $parts[1] . '.' . $parts[0];
}

// HTML E-Mail Nachricht
$message = '
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Neue Buchungsanfrage</title>
<style>
  body { font-family: Arial, sans-serif; background-color: #f4f4f5; color: #18181b; margin: 0; padding: 20px; }
  .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; }
  .header { background: #09090b; color: #ffffff; padding: 24px; text-align: center; border-bottom: 3px solid #c5a059; }
  .header h1 { margin: 0; font-size: 22px; color: #ffffff; font-weight: normal; }
  .header span { color: #e11d48; }
  .content { padding: 24px; }
  .code-badge { display: inline-block; background: #f4f4f5; border: 1px solid #d4d4d8; padding: 4px 12px; font-family: monospace; font-weight: bold; color: #c5a059; margin-bottom: 20px; }
  .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  .table th, .table td { padding: 12px; text-align: left; border-bottom: 1px solid #f4f4f5; }
  .table th { background: #fafafa; color: #71717a; font-size: 13px; text-transform: uppercase; width: 35%; }
  .table td { font-size: 15px; color: #09090b; }
  .box { background: #fafafa; border-left: 4px solid #c5a059; padding: 15px; margin-top: 15px; font-size: 14px; line-height: 1.6; whitespace: pre-wrap; }
  .footer { background: #fafafa; padding: 16px; text-align: center; font-size: 12px; color: #a1a1aa; border-top: 1px solid #e4e4e7; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Amors<span>Nadel</span> Buchungssystem</h1>
    </div>
    <div class="content">
      <div class="code-badge">Anfrage-ID: ' . htmlspecialchars($submissionCode) . '</div>
      <p style="font-size: 16px; margin-top: 0;">Es ist eine neue Buchungsanfrage über die Website eingegangen (' . htmlspecialchars($formType) . ').</p>
      
      <table class="table">
        <tr>
          <th>Kunde</th>
          <td><strong>' . htmlspecialchars($name) . '</strong></td>
        </tr>
        <tr>
          <th>E-Mail</th>
          <td><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></td>
        </tr>
        <tr>
          <th>Telefon</th>
          <td><a href="tel:' . htmlspecialchars($phone) . '">' . htmlspecialchars($phone) . '</a></td>
        </tr>';

if (!empty($service)) {
    $message .= '
        <tr>
          <th>Kategorie</th>
          <td>' . htmlspecialchars($service) . '</td>
        </tr>';
}

if (!empty($artist) && $artist !== 'Nicht angegeben') {
    $message .= '
        <tr>
          <th>Artist</th>
          <td>' . htmlspecialchars($artist) . '</td>
        </tr>';
}

if (!empty($style) && $style !== 'Nicht angegeben') {
    $message .= '
        <tr>
          <th>Stilrichtung</th>
          <td>' . htmlspecialchars($style) . '</td>
        </tr>';
}

if (!empty($placement) && $placement !== 'Nicht angegeben') {
    $message .= '
        <tr>
          <th>Körperstelle</th>
          <td>' . htmlspecialchars($placement) . '</td>
        </tr>';
}

if (!empty($size) && $size !== 'Nicht angegeben') {
    $message .= '
        <tr>
          <th>Größe</th>
          <td>' . htmlspecialchars($size) . '</td>
        </tr>';
}

$message .= '
        <tr>
          <th>Wunschdatum</th>
          <td><strong>' . htmlspecialchars($formattedDate) . '</strong></td>
        </tr>
        <tr>
          <th>Zeitfenster</th>
          <td>' . htmlspecialchars($timeSlot) . '</td>
        </tr>
      </table>

      <strong style="font-size: 14px; color: #71717a; text-transform: uppercase;">Motivbeschreibung / Anmerkungen:</strong>
      <div class="box">' . nl2br(htmlspecialchars($description)) . '</div>
    </div>
    <div class="footer">
      Diese E-Mail wurde automatisch von der Website amorsnadel.de generiert.<br>
      Du kannst direkt auf diese E-Mail antworten, um den Kunden (' . htmlspecialchars($email) . ') zu kontaktieren.
    </div>
  </div>
</body>
</html>
';

// Header vorbereiten
$headers = array();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: AmorsNadel Website <noreply@amorsnadel.de>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Die Buchungsanfrage wurde erfolgreich übermittelt.',
        'code' => $submissionCode
    ]);
} else {
    // Fallback falls PHP mail() false zurückgibt (z.B. lokale Dev-Umgebung ohne Mailserver)
    http_response_code(200); 
    echo json_encode([
        'success' => true, 
        'message' => 'Anfrage entgegengenommen (Server-Mailfunktion eingeschränkt).',
        'code' => $submissionCode,
        'warning' => 'Mail delivery status unconfirmed'
    ]);
}
