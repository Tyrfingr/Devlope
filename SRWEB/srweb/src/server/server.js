// express 객체 생성
const express = require('express');

// express의 새 인스턴스 할당
const app = express();

// mssql DB가 연동된 라우터 모듈을 객체화
const { sql } = require('./db.js');

// 경로 설정, DB 값 호출
// 주의 : 모듈화된 DB 객체는 request().query()가 아닌 query() 사용
app.get('/', (req, res) => {
    sql.query('SELECT * FROM testTable', (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
        return;
    }
    res.json(result.recordset);
    });
  });
