window.addEventListener('load',function(){

  const mynavi = this.document.querySelector("#navmenu ul"); // 배열형 데이터

  let mytag = '';

  for( x  in navidata){
  mytag += `<li> <a href="${x.d1href}"__target="${x.d1href}">${navidata[x].d1text}</a> </li>`;
  }

      // mynavi.innerHTML = mytag;

  // 확인 요소검사

})