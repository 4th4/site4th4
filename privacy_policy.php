<?php
   $myfile = fopen("res/policy.txt", "r")
   or die("Unable to open file!");

   echo fread($myfile,filesize("res/policy.txt"));
   fclose($myfile);