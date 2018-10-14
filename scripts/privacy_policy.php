    <?php
    $file = fopen("res/policy.txt", 'r');
    echo fread($file,filesize("res/policy.txt"));
    fclose($file);



