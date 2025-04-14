const dataset = [100, 150, 80, 180, 120, 30, 300, 280, 200];

render(100, 10, 200, 1000);
window.addEventListener('resize', () => render(100, 10, 0, 1000));

function render(initPos=100, barPadding=10, interval=0, speed=1000){
  const svg = d3.select('svg');
  const svgWid = svg.node().getBoundingClientRect().width;
  const svgHt = svg.node().getBoundingClientRect().height;
  const barWid = (svgWid - initPos*2) / dataset.length  ;
  // const initPos = 100;
  // const barPadding = 10;
  // const interval = 200;
  // const speed = 1000;

/************************************************* */
// 세로로 표시하기
const Percent = d3
  .scaleLinear() // 비율화 준비
  .domain([0, d3.max(dataset)]) // 데이터를 비율화. (최소, 최대)
  .range([0, svgHt - 30]); // 데이터가 출력된 프레임을 비율화

  //기존에 그렸던 것을 초기화
  svg.selectAll('text').remove();
  svg.selectAll('rect').remove();

  svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', svgHt)
    .attr('x', (d,i)=> i*barWid + initPos)
    .attr('height', 0) //Percent 함수를 이용하여 각 수치 값을 전달시 자동으로 제일 큰 수치 값을 기준으로 백분율화
    .attr('width', barWid - barPadding)
    .attr('fill', 'pink')
    .transition()
    .delay((d, i) => i* interval)
    .duration(speed)
    .attr('y', (d) => svgHt - Percent(d))
    .attr('height', (d)=>Percent(d));

    svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('x', (d,i) => i*barWid + initPos + (barWid - barPadding)/2)
    .attr('y', (d)=> svgHt - Percent(d) + 20)
    .attr('text-anchor', 'middle')
    .text((d)=>d)             //text 출력
    .attr("font-size", "15px")
    .attr('fill', 'transparent')
    .transition()
    .delay((d, i) => i* interval + speed)
    .duration(speed)
    .attr('fill', 'black');
}

/************************************************* */
// 우측 정렬된 것처럼 표시하기
  // const Percent = d3
  //   .scaleLinear() // 비율화 준비
  //   .domain([0, d3.max(dataset)]) // 데이터를 비율화. (최소, 최대)
  //   .range([0, svgWid]); // 데이터가 출력된 프레임을 비율화

  // //기존에 그렸던 것을 초기화
  // svg.selectAll('text').remove();
  // svg.selectAll('rect').remove();

  // // 갱신된 값으로 그리기
  // svg
  //   .selectAll('rect')
  //   .data(dataset)
  //   .enter()
  //   .append('rect')
  //   .attr('x', (d) => svgWid - Percent(d))
  //   .attr('y', (d,i)=> i*25 + 10)
  //   .attr('width', (d) => Percent(d)) //Percent 함수를 이용하여 각 수치 값을 전달시 자동으로 제일 큰 수치 값을 기준으로 백분율화
  //   .attr('height', 20)
  //   .attr('fill', 'pink');

  // svg
  //   .selectAll('text')
  //   .data(dataset)
  //   .enter()
  //   .append('text')
  //   .attr('x', (d) => svgWid - Percent(d) + 5)
  //   .attr('y', (d,i)=> i*25 + 26)
  //   .text((d)=>d)             //text 출력
  //   .attr("font-size", "15px")
  // }

/************************************************* */
// Percent에 대입되는 값은 백분화 해주는 함수
// const Percent = d3
//   .scaleLinear() // 비율화 준비
//   .domain([0, d3.max(dataset)]) // 데이터를 비율화. (최소, 최대)
//   .range([0, svgWid]); // 데이터가 출력된 프레임을 비율화

//   svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', 0)
//     .attr('y', (d,i)=> i*25 + 10)
//     .attr('width', (d) => Percent(d)) //Percent 함수를 이용하여 각 수치 값을 전달시 자동으로 제일 큰 수치 값을 기준으로 백분율화
//     .attr('height', 20)
//     .attr('fill', 'pink');

// svg
//   .selectAll('text')
//   .data(dataset)
//   .enter()
//   .append('text')
//   .attr('x', (d) => Percent(d) - 5)
//   .attr('y', (d,i)=> i*25 + 25)
//   .attr('text-anchor','end')
//   .text((d)=>d)             //text 출력
//   .attr("font-size", "15px");
  // }


/*********** 차트 그리기 ***************/
// const dataset = [100, 200, 300, 400, 500];
// const bgColors = ['red', 'green', 'blue', 'pink', 'aqua'];
// const svg = document.querySelector('svg');
// // dataset 자료를 기반으로 js에서 svg프레임의 너비, 높이 동적 설정
// svg.style.width = 550 + 'px';
// svg.style.height = 30 * dataset.length + 20 + 'px';

// // 데이터 입력시 text 요소는 y축을 기준으로 위쪽에 글이 배치됨
// // 반면 rect같은 box요소는 y축을 기준으로 아래쪽에 배치됨
// d3.select("svg")      // 그림을 그릴 svg 캔버스 불러옴
//   .selectAll("rect")  // 앞으로 생성할 여러가지 <?> 요소 준비
//   .data(dataset)      // 데이터 가져오기
//   .enter()            // 셋팅 완료
//   .append("rect")     // 위의 준비과정을 해당 요소에 렌더링
//   .attr("x", 0)       // i는 0부터 시작. 
//   .attr("y", (d, i) => i * 30 + 10) // x를 기준으로 svg 위치 값 지정
//   .attr("width", (d)=>d)    //rect 출력
//   .attr("height",25)        //rect 출력
//   .attr("fill", (d, i) => bgColors[i]);

// d3.select("svg")            // 그림을 그릴 svg 캔버스 불러옴
//   .selectAll("text")        // 앞으로 생성할 여러가지 <?> 요소 준비
//   .data(dataset)            // 데이터 가져오기
//   .enter()                  // 셋팅 완료
//   .append("text")           // 위의 준비과정을 해당 요소에 렌더링
//   .attr("x", (d)=>d + 10)   // i는 0부터 시작. 
//   .attr("y", (d, i) => i * 30 + 30) // x를 기준으로 svg 위치 값 지정
//   .text((d)=>d)             //text 출력
//   .attr("font-size", "20px")
//   .attr("fill", "red");