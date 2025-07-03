// ?name=wss&age=28
const mapFromSearch=(url)=>{
   let map = {};
   // 清除 ?
   let location =new URL(url);
  // let prueSearch = location.search.substring(1);
   let prueSearch = location.search.replace('?','');
   console.log('prueSearch',prueSearch);
   // 切割参数对数组.
   let searchMaps = prueSearch.split('&');
   // ["name=wss","age=28"]
   // 参数对分为name value;
   searchMaps.forEach(searchMap => {
   // searchMap;
   console.log('searchMap',searchMap);
   const [name,value] = searchMap.split('=');
   map[decodeURIComponent(name)] = decodeURIComponent(value);
  });
  console.log(map);
  return map;
}

const infoMap=mapFromSearch('https://naotu.baidu.com/file/2521f358b1af7a205ef9370f3b2137bd?name=wss&age=28&sex=%E7%94%B7');