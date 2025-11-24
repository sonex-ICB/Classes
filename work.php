<?php
  $randomNumber = rand(1, 100);

  echo "Guess a number between 1 and 100:<br>";
  echo $guess = (int) readline("Enter your guess: ");

//   while ($guess != $randomNumber) {
//     if ($guess > $randomNumber) {
//       echo "Too high! Try again:<br>";
//     } else {
//       echo "Too low! Try again:<br>";
//     }
//     $guess = (int) readline("Enter your guess: ");
//   }

  echo " Congratulations! You guessed the correct number: " . $randomNumber;
?>