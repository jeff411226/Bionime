# bionime
華廣生技_Java試題

本項目採用 Spring Boot 開發，全程使用 RESTful 方式與後端交流。

運行環境步驟：
1. 安裝 Java JDK (8)
2. 安裝 MySQL 或 MariaDB 數據庫
3. 建立數據庫(hospital)後再初始化資料庫<br>
  於 bionime/src/main/resources/sql/create.sql 執行 SQL
4. 運行環境<br>
  下載 HospitalStation.war 與 application.properties 參數配置檔<br>
  (1) 可直接透過命令行執行指令 java -jar HospitalStation.war 運行<br>
  將 application.properties 與 HospitalStation.war 放置同一目錄，修改 application.properties 連接數據庫的相關配置(數據庫名、連接帳密)<br>
  瀏覽器網址：http://127.0.0.1/ <br>
  (2) 放到 Tomcat 環境中運行 (由於路徑關係，建議直接放到 Tomcat/webapps/ROOT 中
  參數配置檔放置於解壓後的 HospitalStation\WEB-INF\classes 位置，修改 application.properties 連接數據庫的相關配置(數據庫名、連接帳密)<br>
