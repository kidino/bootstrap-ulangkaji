<?php

$data = [
    ["nama" => "Louis Vutton", "harga" => 1230, "photo" => "product1.webp" ],
    ["nama" => "Jimmy Choo", "harga" => 230, "photo" => "product2.webp" ],
    ["nama" => "Chanel", "harga" => 430, "photo" => "product3.webp" ],
    ["nama" => "Gucci", "harga" => 1440, "photo" => "product4.webp" ],
    ["nama" => "Nike", "harga" => 5230, "photo" => "product5.webp" ],
    ["nama" => "Adidas", "harga" => 3230, "photo" => "product6.webp" ],
];

header('Content-Type: application/json');
echo  json_encode( $data );