const fs = require('fs');
const zlib = require('zlib');
//압축시켜줌
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./ex.text','utf-8');
//chunk  외부소스로부터 데이터를 한번에 한 chunk씩 가져옴
const writeStream = fs.createWriteStream('ex2.text.gz');
//pipe 입력을 출력으로 리다이렉트 해주는 컨셉!
readStream.pipe(gzip).pipe(writeStream);

//readStream.on('data',(chunk)=>{
    //console.log(chunk);
//    writeStream.write(chunk);
//});

// 왜 stream을 쓸까?
//readFile로 파일을 읽어올 경우 largefile을 불러올때 오류 발생 - 파일 전체를 버퍼링해서 파일 전부를 메모리로 올려놓는다 이것은 매우 비효율적이다.
//stream은 클라이언트가 큰 파일을 요청했을 때, 이것을 한번에 한 청크씩 스트림으로 흘려 보냅니다. 
//이것은 모든 것을 메모리에 버퍼로 잡지 않는다는 것을 의미하고 메모리 사용은 25MB까지만 증가한다.


