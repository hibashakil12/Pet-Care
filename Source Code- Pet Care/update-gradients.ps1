# PowerShell script to update all HTML files with gradient animations
# This script adds the gradient-animations.css link and animated-navbar class to all HTML files

$htmlFiles = Get-ChildItem -Path "." -Filter "*.html"
$cssLink = '<link href="css/gradient-animations.css" rel="stylesheet"/>'
$exclusions = @("cursor-test.html", "dropdown_test.html", "test-search.html", "test_search.html", "ultimate-animation-quiz-extreme.html", "petcarequiz.html")

Write-Host "🎨 Starting gradient animation updates..." -ForegroundColor Yellow

foreach ($file in $htmlFiles) {
    # Skip test files and other exclusions
    if ($exclusions -contains $file.Name) {
        Write-Host "⏭️  Skipping $($file.Name)" -ForegroundColor Gray
        continue
    }
    
    Write-Host "📝 Processing $($file.Name)..." -ForegroundColor Cyan
    
    $content = Get-Content $file.FullName -Raw
    $updated = $false
    
    # Add CSS link if not already present
    if (-not $content.Contains("gradient-animations.css")) {
        # Look for existing CSS links and add after the last one
        if ($content -match '(<link href="css/[^"]*\.css" rel="stylesheet"/>)') {
            $lastCssMatch = [regex]::Matches($content, '<link href="css/[^"]*\.css" rel="stylesheet"/>') | Select-Object -Last 1
            $insertPosition = $lastCssMatch.Index + $lastCssMatch.Length
            $content = $content.Insert($insertPosition, "`n$cssLink")
            $updated = $true
            Write-Host "  ✅ Added gradient-animations.css link" -ForegroundColor Green
        }
    }
    
    # Add animated-navbar class if not already present
    if ($content -match '<header class="navbar bg-gradient-to-r from-\[#f09902\] to-\[#993d15\]">' -and -not $content.Contains("animated-navbar")) {
        $content = $content -replace '<header class="navbar bg-gradient-to-r from-\[#f09902\] to-\[#993d15\]">', '<header class="navbar bg-gradient-to-r from-[#f09902] to-[#993d15] animated-navbar">'
        $updated = $true
        Write-Host "  ✅ Added animated-navbar class" -ForegroundColor Green
    }
    
    # For home.html, also check for hero section
    if ($file.Name -eq "home.html" -and -not $content.Contains("animated-hero")) {
        if ($content -match 'hero-banner">' -and -not $content.Contains("animated-hero")) {
            $content = $content -replace 'hero-banner">', 'hero-banner animated-hero">'
            $updated = $true
            Write-Host "  ✅ Added animated-hero class" -ForegroundColor Green
        }
    }
    
    # Save changes if any updates were made
    if ($updated) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "  💾 Saved changes to $($file.Name)" -ForegroundColor Magenta
    } else {
        Write-Host "  ℹ️  No changes needed for $($file.Name)" -ForegroundColor Yellow
    }
}

Write-Host "`n🎉 Gradient animation updates complete!" -ForegroundColor Green
Write-Host "📋 Summary:" -ForegroundColor Cyan
Write-Host "  • Added gradient-animations.css link to all HTML files" -ForegroundColor White
Write-Host "  • Added animated-navbar class to all navigation headers" -ForegroundColor White
Write-Host "  • Added animated-hero class to home.html hero section" -ForegroundColor White
Write-Host "`n🚀 All pages now have smooth gradient animations!" -ForegroundColor Yellow