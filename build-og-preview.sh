#!/usr/bin/env bash
set -eu

preview_tmp_dir="$(mktemp -d)"
before_card="$preview_tmp_dir/before.png"
after_card="$preview_tmp_dir/after.png"
base="$preview_tmp_dir/base.png"

convert assets/gallery/brazil-before.webp \
  -auto-orient -resize '194x304>' \
  -gravity center -background '#fffdf8' -extent 210x320 \
  -bordercolor '#18201b' -border 3 "$before_card"

convert assets/gallery/brazil-after.webp \
  -auto-orient -resize '244x404>' \
  -gravity center -background '#fffdf8' -extent 260x420 \
  -bordercolor '#18201b' -border 3 "$after_card"

convert -size 1200x630 xc:'#f6f1e7' \
  -fill '#18201b' -draw 'rectangle 0,0 645,630' \
  -fill '#9fc8c0' -draw 'rectangle 645,0 1200,630' \
  -fill '#e9b43a' -draw 'polygon 645,0 820,0 645,175' \
  -fill '#9f332d' -draw 'polygon 1200,630 1010,630 1200,440' \
  -stroke '#f6f1e7' -strokewidth 2 -fill 'none' \
  -draw 'line 48,42 594,42 line 48,588 594,588' \
  -stroke 'none' -fill '#e9b43a' -draw 'circle 82,94 82,65' \
  -font DejaVu-Sans-Bold -fill '#18201b' -pointsize 20 -gravity northwest \
  -draw "text 66,81 'NC'" \
  -fill '#fffdf8' -pointsize 23 -draw "text 125,78 'NOCAST STUDIO'" \
  -fill '#e9b43a' -pointsize 13 -draw "text 49,139 'AI PRODUCT IMAGERY FOR NEPAL'" \
  -fill '#fffdf8' -pointsize 54 -draw "text 47,185 'YOUR GARMENT.'" \
  -draw "text 47,252 'ON A MODEL.'" \
  -fill '#e9b43a' -pointsize 42 -draw "text 47,326 'READY TO SELL.'" \
  -font DejaVu-Sans -fill '#d8ded9' -pointsize 20 \
  -draw "text 49,405 'On-model product photos for'" \
  -draw "text 49,436 'Nepali fashion businesses.'" \
  -fill '#fffdf8' -stroke '#fffdf8' -strokewidth 1 \
  -draw 'roundrectangle 48,500 343,550 25,25' \
  -stroke 'none' -font DejaVu-Sans-Bold -fill '#18201b' -pointsize 15 \
  -draw "text 73,518 'FOR NEPALI BRANDS'" \
  "$base"

composite -geometry +662+171 "$before_card" "$base" "$preview_tmp_dir/step-one.png"
composite -geometry +914+94 "$after_card" "$preview_tmp_dir/step-one.png" "$preview_tmp_dir/step-two.png"

convert "$preview_tmp_dir/step-two.png" \
  -font DejaVu-Sans-Bold \
  -fill '#18201b' -pointsize 13 -draw "text 663,151 'YOUR PHOTO'" \
  -draw "text 914,74 'ON-MODEL RESULT'" \
  -fill '#e9b43a' -stroke '#18201b' -strokewidth 2 -draw 'circle 897,332 897,307' \
  -stroke '#18201b' -strokewidth 3 -draw 'line 884,332 906,332' \
  -stroke 'none' -fill '#18201b' -draw 'polygon 903,324 912,332 903,340' \
  -quality 92 assets/og-preview-v5.jpg

echo "Created assets/og-preview-v5.jpg"
