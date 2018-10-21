    <?php
    $file = fopen("policy.txt", 'r');
    echo fread($file,filesize("policy.txt"));
    fclose($file);



