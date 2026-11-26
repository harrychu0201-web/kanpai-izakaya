# 家具 3D 模型

來源：Kenney Furniture Kit（www.kenney.nl），授權 CC0 1.0（公有領域，可商用、不用標示）。

這些 .glb 由 `kmodels.js` 匯入，`build.sh` 用 `--loader:.glb=binary` 直接打包進 `img/home3d-<hash>.js`，
所以不用另外上傳檔案，也不會被 service worker 的圖片快取卡在舊版。

要換回程式畫的家具：把 `kmodels.js` 裡 `MAP` 對應的那一行刪掉再重建即可（`build(k)` 找不到模型會自動用原本的）。
