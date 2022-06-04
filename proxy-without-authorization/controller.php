<?php
include("./proxy.php");

//setup the Proxy with the right credentials
$mySwapiProxy = new Proxy('https://api.opensea.io/api/v1/');
//get the data
$result = $mySwapiProxy->getData('collection/doodles-official');
//print the data to the frontend.
print_r($result);
