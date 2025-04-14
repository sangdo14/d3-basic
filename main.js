const dataset = [100, 200, 300, 400, 500];
const bgColors = ['red', 'green', 'blue', 'pink', 'aqua'];
const svg = document.querySelector('svg');
// dataset 자료를 기반으로 js에서 svg프레임의 너비, 높이 동적 설정
svg.style.width = 550 + 'px';
svg.style.height = 30 * dataset.length + 20 + 'px';

// 데이터 입력시 text 요소는 y축을 기준으로 위쪽에 글이 배치됨
// 반면 rect같은 box요소는 y축을 기준으로 아래쪽에 배치됨
d3.select("svg")      // 그림을 그릴 svg 캔버스 불러옴
  .selectAll("rect")  // 앞으로 생성할 여러가지 <?> 요소 준비
  .data(dataset)      // 데이터 가져오기
  .enter()            // 셋팅 완료
  .append("rect")     // 위의 준비과정을 해당 요소에 렌더링
  .attr("x", 0)       // i는 0부터 시작. 
  .attr("y", (d, i) => i * 30 + 10) // x를 기준으로 svg 위치 값 지정
  .attr("width", (d)=>d)    //rect 출력
  .attr("height",25)        //rect 출력
  .attr("fill", (d, i) => bgColors[i]);


d3.select("svg")            // 그림을 그릴 svg 캔버스 불러옴
  .selectAll("text")        // 앞으로 생성할 여러가지 <?> 요소 준비
  .data(dataset)            // 데이터 가져오기
  .enter()                  // 셋팅 완료
  .append("text")           // 위의 준비과정을 해당 요소에 렌더링
  .attr("x", (d)=>d + 10)   // i는 0부터 시작. 
  .attr("y", (d, i) => i * 30 + 30) // x를 기준으로 svg 위치 값 지정
  .text((d)=>d)             //text 출력
  .attr("font-size", "20px")
  .attr("fill", "red");

  // .attr("x", 0) // x를 기준으로 svg 위치 값 지정
    // .attr("y", (d, i) => i * 30 + 10) // i는 0부터 시작. 

  // .attr("x", (d, i) => i * 40 + 10) // x를 기준으로 svg 위치 값 지정
  // .attr("y", 50) // i는 0부터 시작. 

    // .text(d => d) // 인자와 return 값, 매개변수 명은 자유롭게 지정 가능