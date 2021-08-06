:: this is an script to auto run Python pyinstaller
:: drag the .py file on this bat to run script
@echo off
set str=%~n1%~x1
echo Reading File %str% Done
pyinstaller -F -w %str%
echo done
pause
