<?php
echo "PHP version: " . phpversion() . "\n";
echo "Extensions:\n";
print_r(get_loaded_extensions());
echo "\nTesting mysqli_connect:\n";

$conn = @mysqli_connect("localhost", "root", "", "test");
if ($conn) {
    echo "✅ Connection successful!";
} else {
    echo "❌ Connection failed: " . mysqli_connect_error();
}
?>