Add-Type -AssemblyName System.Drawing
function Export-Crop($source, $name, $x, $y, $width, $height) {
    $image = [System.Drawing.Bitmap]::new((Join-Path $PSScriptRoot $source))
    $rectangle = [System.Drawing.Rectangle]::new($x, $y, $width, $height)
    $crop = $image.Clone($rectangle, $image.PixelFormat)
    $crop.Save((Join-Path $PSScriptRoot "../public/images/$name.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    $image.Dispose()
}
Export-Crop 'canva.png' 'portrait' 303 361 297 337
Export-Crop 'page4.png' 'tiger' 34 48 279 279
Export-Crop 'page4.png' 'tiger-print' 292 361 308 268
Export-Crop 'page4.png' 'rocattoo' 58 725 219 282
Export-Crop 'page4.png' 'rocattoo-shirt' 295 1036 305 336
Export-Crop 'page4.png' 'pop-ice' 60 1405 458 195
Export-Crop 'page4.png' 'references' 65 1771 482 231
Export-Crop 'page4.png' 'adventure' 25 2060 272 303
Export-Crop 'page4.png' 'moromoko' 147 2390 149 282
Export-Crop 'page4.png' 'packaging' 77 2820 452 223
Export-Crop 'page4.png' 'boncabe' 48 3090 305 250
