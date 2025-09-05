@echo off
setlocal enabledelayedexpansion

:: Output file name
set "OUTPUT=sample.txt"

:: Remove old output if it exists
if exist "%OUTPUT%" del "%OUTPUT%"

echo ===== Combining project files into %OUTPUT% =====

:: Recursively iterate all files
for /r %%F in (*) do (
    set "file=%%~fF"
    set "ext=%%~xF"

    :: Skip node_modules and .git folders by path
    if "!file:\node_modules\=!"=="!file!" if "!file:\.git\=!"=="!file!" (

        :: Skip images and archives (add more if you like)
        if /I not "!ext!"==".png" if /I not "!ext!"==".jpg" if /I not "!ext!"==".jpeg" if /I not "!ext!"==".gif" if /I not "!ext!"==".svg" if /I not "!ext!"==".ico" if /I not "!ext!"==".webp" if /I not "!ext!"==".bmp" if /I not "!ext!"==".tif" if /I not "!ext!"==".tiff" if /I not "!ext!"==".psd" if /I not "!ext!"==".ai" if /I not "!ext!"==".pdf" if /I not "!ext!"==".zip" if /I not "!ext!"==".7z" if /I not "!ext!"==".rar" (

            >>"%OUTPUT%" echo.
            >>"%OUTPUT%" echo ===================== START FILE =====================
            >>"%OUTPUT%" echo File: %%~pnxF
            >>"%OUTPUT%" echo -----------------------------------------------------
            type "%%~fF" >> "%OUTPUT%"
            >>"%OUTPUT%" echo.
            >>"%OUTPUT%" echo ====================== END FILE ======================
            >>"%OUTPUT%" echo.

        )
    )
)

echo ===== Done! Combined code saved in %OUTPUT% =====
endlocal
