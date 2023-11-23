// mssql 객체 생성
const sql = require('mssql');

// DB 연결 설정
const config = {
  user: '~',
  password: '~',
  server: '~',
  database: '~',
  encrypt : false, // IP address access
  trustServerCertificate: true // Trust self-signed certificate
};

// DB 연결
sql.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

// DB 모듈화
module.exports = { sql };
