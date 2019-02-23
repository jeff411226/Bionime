# bionime
華廣生技_Java試題

本項目採用 Spring Boot 開發，全程使用 RESTful 方式與後端交流。

運行環境步驟：
1. 安裝 Java JDK (8)
2. 安裝 MySQL 或 MariaDB 數據庫
3. 初始化資料庫<br>
  於 bionime/src/main/resources/sql/create.sql 執行 SQL
4. 運行環境<br>
  下載 HospitalStation.war <br>
  (1) 可直接透過命令行執行指令 java -jar HospitalStation.war 運行<br>
  瀏覽器網址：http://127.0.0.1/ <br>
  (2) 放到 Tomcat 環境中運行 (由於路徑關係，建議直接放到 Tomcat/webapps/ROOT 中
