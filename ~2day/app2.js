const fs = require('fs');

//파일 생성

//파일이름, 내용
// fs.writeFile('example.text',"this is an example, 이것은 예제이다!",(err)=>{
//     if(err)
//     console.log(err);
//     else{
//     console.log('File successfully created');
//     //파일 내용을 출력하기 위함 
//     fs.readFile('example.text','utf-8',(err,file)=>{
//         if(err)
//             console.log(err);
//             else
//             console.log(file);
//     });
//     }
// });

//파일명 변경

// fs.rename('example.text','example2.text',(err)=>{
//    if(err)
//         console.log(err);
//     else
//         console.log('successfully renamed the file'); 
// });

//파일 내용 추가하기

// fs.appendFile('example2.text','Some data being appended!',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file');
// });

//파일 삭제

// fs.unlink('example2.text',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully deleted the file');
// });


// 폴더 만들기

// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else{
        //console.log('folder successfully created');
       
        // 폴더 삭제
        // fs.rmdir('tutorial',(err)=>{
        //     if(err)
        //         console.log(err);
        //     else(err)
        //         console.log('Scuccessfully deleted the folder');
        // });
        
        //else에 파일도 같이 만들어 줌
//         fs.writeFile('./tutorial/example.text','123',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('successfully created file');
//             }
//         });
//     }
// });

//파일삭제

// fs.unlink('./tutorial/example.text',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('deleted folder');
// });

//폴더 안에 파일이름 배열 형태로 출력

fs.readdir('ex',(err,files)=>{
    if(err)
        console.log(err);
    else{
        //console.log(files);
        //반복문으로 파일들 전부 삭제함.
        for(let file of files){
            //unlink 비동기식 파일삭제 
            fs.unlink('./ex/'+file,(err)=>{
                //넘어온 data를 다루는 콜백함수 호출하여 수행    
                if(err)
                    console.log(err);
                else{
                    console.log('successfully delete file');
                }
            })
        }
    }
});

