<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JRS AUTO CORP</title>
</head>
    <body>
        <p>Message from {{ $contact->name }}</p>
        <p>Email: {{ $contact->email }}</p>
        <p>{{ $contact->message }}</p>
    </body>
</html>