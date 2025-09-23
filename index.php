<?php
// Fungsi untuk mendapatkan ukuran folder secara rekursif
function getFolderSize($folder) {
    $size = 0;
    foreach (scandir($folder) as $file) {
        if ($file !== '.' && $file !== '..') {
            $path = "$folder/$file";
            $size += is_file($path) ? filesize($path) : getFolderSize($path);
        }
    }
    return $size;
}

// Fungsi untuk memformat ukuran file
function formatSize($size) {
    $units = ['B', 'KB', 'MB', 'GB', 'TB'];
    $power = $size > 0 ? floor(log($size, 1024)) : 0;
    return number_format($size / pow(1024, $power), 2) . ' ' . $units[$power];
}

// Fungsi untuk mendapatkan tanggal terakhir diubah
function getLastModified($folder) {
    $latestTime = 0;
    foreach (scandir($folder) as $file) {
        if ($file !== '.' && $file !== '..') {
            $path = "$folder/$file";
            $latestTime = max($latestTime, filemtime($path));
        }
    }
    date_default_timezone_set('Asia/Jakarta'); // Set zona waktu ke Indonesia

    return $latestTime;
}
?>


<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo basename(getcwd()); ?></title>
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            background-color: #212121;
            color: #B4B4B4;
            text-align: center;
        }
        ul {
            list-style: none;
            padding: 0;
            max-width: 350px;
            margin: 0 auto;
            background: #333;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 10px;
            max-height: 450px;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #555 #333;
        }
        ul::-webkit-scrollbar {
            width: 8px;
        }
        ul::-webkit-scrollbar-thumb {
            background: #555;
            border-radius: 4px;
        }
        ul::-webkit-scrollbar-track {
            background: #333;
        }
        li {
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            transition: 0.3s;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        li a {
            text-decoration: none;
            color: #B4B4B4;
            font-weight: 500;
            text-transform: uppercase;
            text-align: left;
            flex-grow: 1;
        }
        .info {
            font-size: 9px;
            color: #B4B4B4;
        }
        li:hover {
            background: rgb(141, 141, 141);
            color: #121212;
        }
        li:hover a, li:hover .info {
            color: #121212;
        }
        h5 a {
            text-decoration: none;
            color: #B4B4B4;
        }
        h5:hover a {
            color: rgb(62, 60, 60);
        }
    </style>
</head>
<body>
    <h1 style='text-transform: uppercase; margin-top: 40px;'>
        <?php echo basename(getcwd()); ?>
    </h1>
    <h5><a href="javascript:history.back()">Back</a></h5>
    <ul>
        <?php
        $dir = ".";
        $folders = array_filter(scandir($dir), function($item) use ($dir) {
            return is_dir($dir . "/" . $item) && $item != "." && $item != "..";
        });
        
        // Ambil tanggal terakhir diubah untuk setiap folder
        $folderData = [];
        foreach ($folders as $folder) {
            $folderData[$folder] = getLastModified($folder);
        }
        
        // Urutkan folder berdasarkan tanggal terakhir diubah (terbaru ke terlama)
        arsort($folderData);


        foreach ($folderData as $folder => $timestamp) {
            $displayName = strlen($folder) > 15 ? substr($folder, 0, 15) . "..." : $folder;
            echo "<li onclick=\"window.location.href='$folder'\">
                    <a href='$folder'>$displayName</a>
                    <span class='info'>". date("d-M-y H:i", $timestamp) . "</span>
                  </li>";
        }
        
        ?>
    </ul>
</body>
</html>

<!-- <span class='info'>"  . formatSize(getFolderSize($folder)) . "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp". date("d-M-y H:i", $timestamp) . "</span> -->

