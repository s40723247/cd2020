@echo off
set Disk=y
path=%PATH%;
  
taskkill /IM python.exe /F
taskkill /IM pythonw.exe /F
taskkill /IM scite.exe /F
  
REM 終止虛擬硬碟與目錄的對應
subst %Disk%: /D
REM 關閉 cmd 指令視窗
taskkill /IM cmd.exe /F
  
EXIT