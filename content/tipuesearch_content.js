var tipuesearch = {"pages": [{'title': 'Week', 'text': 'Week1-5 \n Week6-9 \n Week10-14 \n Week15-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'week1-5', 'text': 'week 1 架設個人網站 \n 1.在自己的github內建立新倉儲cd2020 \n 2.git clone  https://github.com/s40723247/cd2020.git \n 3.git submodule add  https://github.com/mdecourse/cmsimde.git \n 4.到 cmsimde,輸入python -m pip install flask_cors \n 5.把cmsimde裡面up_dir資料夾內的東西複製到cd2020資料夾內 \n 6.到cd2020 打 python wsgi.py 開始編輯倉儲 \n \n week 2 線上直播會議&將可攜系統中的 python3.7.3 更新至 python3.8.2 版本 \n \n \n 將可攜系統中的 python3.7.3 更新至 python3.8.2 版本 \n step1 先在自己資料夾內新增一個cd2020，然後在cd2020內新增一個資料夾data，在data內再新增py382及 wscite432、portablegit 。 \n step2\xa0進入ptrhon 官網 \xa0 \n step3 到downloads內點選 Latest Python 3 Release - Python 3.8.2 \n step4\xa0滑到最下面，找到 Windows x86-64 executable installer \xa0 下載 \n step5\xa0開始下載，把pip選項取消，按next把檔案下載至資料夾py382 \n \n step6\xa0下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮到data下的wscite432 \n step7 建立start.bat及stop.bat \n start.bat: \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n stop.bat: \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n step8 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0到data下 \n step9\xa0下載PortableGit\xa0 64-bit Git for Windows Portable \xa0到\xa0 portablegit下 \n step10\xa0 安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下 \n step11 執行指令 ，將python3.8.2版本缺少的模組下載下來 \n \n python get - pip.py \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n   week3\xa0\xa0 CoppeliaSim User Manual 內容研究 \n \n /downloads/40723247CoppeliaSim User Manual-已轉檔.pdf \n \n', 'tags': '', 'url': 'week1-5.html'}, {'title': 'week6-9', 'text': '解釋如何使用OBS在YOUTUBE上開直播 \n 1.先設定一個場景 \n 2.來源的部分新增一個視訊擷取裝置(鏡頭)與顯示器擷取(螢幕畫面) \n 3.設定串流金鑰 (YOUTUBE開直播會給一個金鑰) \n 4.開始串流 \n 以下是教學影片 \n \n 線上遠距離教學被抽到的直播內容 :\xa0 \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Group meeting', 'text': '', 'tags': '', 'url': 'Group meeting.html'}, {'title': 'bg3 第一次小組會議', 'text': '第三組第一次會議 \n 會議流程: \n \n 直播會議,組員簽到 \n 討論工作分配\xa0 \n 問題提問 \n \n 作業一: \n \n 請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ \n \xa0描述如何為 Windows 10 64 位系統準備一個可移植的 Python 編程系 統，以允許在 Github 上維護 CMSiMDE 網站，Pelican 博客和 Reveal.js 演示文稿？ \n \xa0您需要從  \xa0 http://www.coppeliarobotics.com/helpFiles/index.html  了解什 麼來實現四輪機器人？ \n \n 注意事項: \n \n 作業一必須在 3/26 前完成，並上傳 pdf 檔到個人倉儲的 download 上。 \n \xa0每周務必上傳進度。 \n \xa0不會做的可以問會的同學或在 gitter 上發問。 \n \xa0請依每個人的作業一 pdf 檔、網站內容，進行互評 \n \n \n \n \n 第一次會議PDF \n', 'tags': '', 'url': 'bg3 第一次小組會議.html'}, {'title': 'bg3 第二次小組會議', 'text': '第三組第二次會議 \n 會議流程: 1.直播會議,組員簽到 2.討論工作分配 3.問題提問 \n 作業二: \n \n \xa0根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊 為了完成作業 \n \xa0的四輪機器人需要做些什麼? \n \xa0您需要從 https://cyberbotics.com/doc/guide/index 了解 什麼來實現四輪機器人？ \n \n 注意事項: \n \n 作業二必須在 4/23 前完成，並上傳 pdf 檔到個人倉儲的 download 上。 \n 每周務必上傳進度。 \n \xa0不會做的可以問會的同學或在 gitter 上發問。 \n 請依每個人的作業二pdf檔、網站內容，進行互評。 \n \n \n 第二次小組會議.pdf \n', 'tags': '', 'url': 'bg3 第二次小組會議.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': '', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'four-wheeled robot', 'text': '從  https://www.coppeliarobotics.com/helpFiles/index.html 龐大的資料中， 可以抓出幾個重點章節， BubbleRob tutorial 、 Line following BubbleRob tutorial 、 External controller tutorial 、 Simulation dialog 、 Simulation \n BubbleRob tutorial :  設計簡單的移動機器人 BubbleRob 時嘗試介紹很多 CoppeliaSim 功能。  \n Line following BubbleRob tutorial :  在本教程中，我們在擴展 BubbleRob 的 功能，以使他遵循基礎上的規則。   \n External controller tutorial :  研究在 CoppeliaSim 中，有好幾種方法可以控 制機器人或模擬   \n Simulation dialog & Simulation : 此教程主要在教如何設置 bubbleRob 機器 人，在上學期我們有實際操作過。 \n', 'tags': '', 'url': 'four-wheeled robot.html'}, {'title': 'Portable system', 'text': '將可攜系統中的 python3.7.3 更新至 python3.8.2 版本 \n step1 先在自己資料夾內新增一個 cd2020，然後在 cd2020 內新增一個資料 夾 data，在 data 內再新增 py382 及 wscite432、portablegit。 \n step2 進入  ptrhon  官網 \n step3 到  downloads  內點選  Latest Python 3 Release - Python 3.8.2 \n step4 滑到最下面，找到  Windows x86-64 executable installer \xa0下載 \n step5 開始下載，把 pip 選項取消，按 next 把檔案下載至資料夾 py382 \n step6 下載 SciTE 系統  full 64-bit download ，下載完後解壓縮到 data 下的 wscite432 \n step7 建立 start.bat 及 stop.bat \n step8 下載 MSYS2  msys2-x86_64-20190524.exe  到 data 下 \n step9 下載  PortableGit 64-bit Git for Windows Portable  到 portablegit 下 \n step10 安裝 pip，到  https://bootstrap.pypa.io/get-pip.py  頁面，另存新檔 到 data 下 \n step11 執行指令，將 python3.8.2 版本缺少的模組下載下來 python get-pip.py pip install flask bs4 lxml pelican markdown flask_cors leo \n \n', 'tags': '', 'url': 'Portable system.html'}, {'title': 'Efficient random grouping for this course', 'text': '先了解程式裡導入的模組和模組中的語法、迴圈:  request、ast.literal_eval、 random、for迴圈 \n Request模組  : 如果想要使用 Python 來下載網頁上的資料，最基本的作法就是 以 requests 模組建立適當的 HTTP 請求，透過 HTTP 請求從網頁伺服器下載指 定的資料，這種方式雖然步驟比較繁瑣，也需要一點通訊協定的基礎，但是絕大部 分的網路爬蟲或除錯問題都可以靠這個架構解決 \n 參考資料 :  https://blog.gtwang.org/programming/python-requests-module-tutorial/ \n ast.literal_eval  : 簡單點說 ast 模組就是幫助 Python 應用來處理抽象的語法解 析的。而該模組下的 literal_eval()函式：則會判斷需要計算的內容計算後是 不是合法的 python 型別，如果是則進行運算，否則就不進行運算。 \n 參考資料 :  https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/364629/ \n Random  : 要使用到隨機亂數抽取的功能就要使用到 random 套件  以下示範在已知的數字清單中亂數抽取一個數字 ， 例如 :  import random x=random.choice([1,3,5,7,9]) print(x) >>1 \n 參考資料 :\xa0 https://kk665403.pixnet.net/blog/post/403974404-%5Bpython%5D-python-ramdom%E9%9A%A8%E6%A9%9F%E4%BA%82%E6%95%B8%E7%B0%A1%E6%98%93%E7%94%A8%E6%B3%95 \n for 迴圈  : 在計算機科學是一種程式語言的疊代陳述，能夠讓程式碼反覆的執 行。它跟其他的迴圈，如 while 迴圈，最大的不同，是它擁有一個迴圈計數 器，或是迴圈變數。這使得 for 迴圈能夠知道在疊代過程中的執行順序。 \n 參考資料 :  https://zh.wikipedia.org/wiki/For%E8%BF%B4%E5%9C%88 \n', 'tags': '', 'url': 'Efficient random grouping for this course.html'}, {'title': 'Online teching', 'text': '2020/04/16 線上課程 \n 第一堂課 \n \n 第二堂課 \n \n 第四堂課 \n \n \n', 'tags': '', 'url': 'Online teching.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};