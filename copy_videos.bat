@echo off
REM Copy video files to public/videos folder with correct paths
setlocal enabledelayedexpansion

set "DEST=c:\Users\Jia Lu\OneDrive - Ngee Ann Polytechnic\Ngee ann poly\2026\Resume_Website\public\videos\"

echo Copying videos to %DEST%
echo.

REM Copy each video with correct paths
copy "c:\Users\Jia Lu\OneDrive - Ngee Ann Polytechnic\Ngee ann poly\2025\Sem1\IP\stld\STLD_ACursedWish_Walkthrough.mp4" "!DEST!" >nul 2>&1 && echo ✓ A Cursed Wish copied || echo ✗ A Cursed Wish FAILED

copy "c:\Users\Jia Lu\OneDrive - Ngee Ann Polytechnic\Ngee ann poly\2025\Sem2\IP\PatternOfThought_Playtest_VR.mkv" "!DEST!" >nul 2>&1 && echo ✓ Pattern of Thought copied || echo ✗ Pattern of Thought FAILED

copy "c:\Users\Jia Lu\OneDrive - Ngee Ann Polytechnic\Ngee ann poly\2024\Sem 2\AprilSonata.mp4" "!DEST!" >nul 2>&1 && echo ✓ April Sonata copied || echo ✗ April Sonata FAILED

copy "c:\Users\Jia Lu\Downloads\Heritagebites.mp4" "!DEST!" >nul 2>&1 && echo ✓ Heritage Bites copied || echo ✗ Heritage Bites FAILED

copy "c:\Users\Jia Lu\Downloads\Fireboy Watergirl.mp4" "!DEST!" >nul 2>&1 && echo ✓ Fireboy Watergirl copied || echo ✗ Fireboy Watergirl FAILED

copy "c:\Users\Jia Lu\OneDrive - Ngee Ann Polytechnic\Ngee ann poly\2025\Sem1\DUX\UIUX Fitness app.mp4" "!DEST!" >nul 2>&1 && echo ✓ Fitness app copied || echo ✗ Fitness app FAILED

copy "c:\Users\Jia Lu\OneDrive - Ngee Ann Polytechnic\Ngee ann poly\2024\Sem 2\GC\GC_ASG2_S10269187_Jialu\Recycling app.mp4" "!DEST!" >nul 2>&1 && echo ✓ Recycling app copied || echo ✗ Recycling app FAILED

echo.
echo Done! Refresh your browser at http://localhost:5173
pause
