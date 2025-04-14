const dataset = [10, 20, 30, 40, 50];

d3.select("svg") // 그림을 그릴 svg 캔버스 불러옴
  .selectAll("text") // 앞으로 생성할 여러가지 <text> 요소 준비
  .data(dataset) // 데이터 가져오기
  .enter() // 셋팅 완료
  .append("text") // 위의 준비과정을 해당 요소에 렌더링
  .text(d => d) // 인자와 return 값, 매개변수 명은 자유롭게 지정 가능
  // .attr("x", 10) // x를 기준으로 svg 위치 값 지정
  // .attr("y", (d, i) => i * 40 + 25) // i는 0부터 시작. 
  .attr("x", (d, i) => i * 40 + 10) // x를 기준으로 svg 위치 값 지정
  .attr("y", 50) // i는 0부터 시작. 
  .attr("font-size", "15px")
  .attr("fill", "green");

