<?php 
//Load the file
$contents = file_get_contents('WinLossComp.json');

//Decode the JSON data into a PHP array.
$source = json_decode($contents, true);

//Modify the counter variable.

//print_r($source['records']);
//echo $source['records'][0]['Level'];

$input = $_GET;
//print_r($input);
$contentsDecoded["records"] = [];
$count = 0;
foreach($source['records'] as $i => $field) {
  $field['Level'] .' - '. $field['Win'] .' - '.$field['Loss']. '<br />';

  if ($input['Level'] == $field['Level']) {
    $field['Win'] = $input['Win'];
	$field['Loss'] = $input['Loss'];
  }
  //echo $count++;
  $contentsDecoded["records"] = $contentsDecoded["records"] . $field ;
  //print_r($contentsDecoded);
}
print_r($contentsDecoded);
//Encode the array back into a JSON string.
$json = json_encode($contentsDecoded);
 
//Save the file.
file_put_contents('WinLossComp.json', $json);
?>