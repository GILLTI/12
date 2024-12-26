SELECT * FROM user_tab_privs_recd;
SELECT *FROM  TEST_VIEW;

INSERT INTO hr.EMPLOYEES()


CREATE TABLE TBL_MEMBER(
	MEN_ID NUMBER PRIMARY KEY,
	MEN_NAME VARCHAR2(100)
	); -- 권한 없음 -> 부여해줘야한다
	
	--세션 생성 권한	
	GRANT CREATE SESSION TO 계정명;
	--테이블/ VIEW/ 시퀀스/ 사용자 생성 권한
	GRANT CREATE TABLE/ CREATE VIEW / CREATE USER TO 계정명;
	--특정 권한만 부여
	GRANT SELECT INSERT , DELETE, UPDATE ON 계정명. 테이블명 TO 계정명;