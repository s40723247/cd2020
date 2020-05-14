@echo off
set Disk=y
subst %Disk%: "data"
  
%Disk%:
  
set HomePath=%Disk%:\home
set HomeDrive=%Disk%:\home
set Home=%Disk%:\home
set USERPROFILE=%Disk%:\home
  
REM 將系統 Python 程式的 io 設為 utf-8
set PYTHONIOENCODING="utf-8"
  
#REM for putty
#Set GIT_HOME=%CDisk%:\portablegit\bin\
#Set GIT_SSH=%Disk%:\putty\plink.exe
  
set PYTHONPATH=%Disk%:\py382\DLLs;%Disk%:\py382\Lib;%Disk%:\py382\Lib\site-packages;
set PYTHONHOME=%Disk%:\py382
  
set path_python=%Disk%:\py382;%Disk%:\py382\Scripts;
set path_msys2=%Disk%:\msys64\mingw64\bin;
set path_git=%Disk%:\portablegit\bin;
set path_tcc=%Disk%:\tcc;
  
path=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;
  
start /MIN cmd.exe
start /MIN cmd.exe
start /MIN cmd.exe
start /MIN cmd.exe
  
start /MIN %Disk%:\wscite432\wscite\SciTE.exe
start /MIN %Disk%:\wscite432\wscite\SciTE.exe
  
Exit