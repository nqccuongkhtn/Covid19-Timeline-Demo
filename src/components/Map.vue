<template>
    <div id="map"></div>
</template>
<script>
import {ref,watch} from 'vue';
import {useState} from '@/state.js';
import {toGeo} from '@/mapGeoMapperTest.js';
import {getCountry} from '@/countries.js'
import {getArrowText} from '@/arrow.js'
export default {
    setup() {
         const map = ref({});
    const info = ref({});
    const circles = ref([]);
            const loadMap = () => {   
              //hàm paintCircles chạy trước nên feature mới có... đã test qua console log nhưng chưa rõ lý do-> watch được kích hoạt
            map.value = new google.maps.Map(document.getElementById("map"), {
                zoom: 2,
                center: { lat: 3, lng: 38 },
                styles:nighMapStyle,
            });
             console.log(map.value); //hàm pain chạy r mới tới feature
            
             map.value.data.setStyle(feature => { /// đừng nhầm map.value vs state... thằng feature ban đầu này ở đâu ra nhỉ  => chờ pain chạy xong nó mới chạy
                console.log(`feature vô sau ${0}`,feature);
             var magnitude = feature.getProperty('mag');//getProperty  chưa hiểu thằng ml này => method của feature thuộc map api
                return {
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: 'red',
                    fillOpacity: getOpacity(magnitude),
                    scale: getScale(magnitude),
                    strokeColor: 'white',
                    strokeWeight: .5
                  }
                };
          });
      info.value = new google.maps.InfoWindow({})
      map.value.data.addListener('click', (mapEvent) => {openInfoWindow(mapEvent);console.log(`Casi này là mapevent nè ${0}`,mapEvent)}) // trả về thuộc tính khi click bao gồm cả feature
      paintCircles(state.day)//map.value sẽ không có giá trị khi paintCircles chưa chạy chưa hiểu=> đã hiểu
            };
            const script = document.createElement('script');
            script.onload = loadMap;
            script.async = true;
            script.defer = true;
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE`
            document.head.appendChild(script);  
            // test
              const state = useState();
      const openInfoWindow = mapEvent => {   
      info.value.setPosition(mapEvent.latLng);
      info.value.country = mapEvent.feature.j;
      updateInfoWindow(mapEvent.feature.j)
      info.value.open(map.value)
    }
     const updateInfoWindow = country => {
      const incident = state.day.value.data.find(i => i.country === country);
      if(!incident){
        info.value.close();
        return;
      }
      const total = parseInt(incident.cases) || 0;
      let recovered
      if(state.simulateRecovered.value){
        recovered = incident.estimateRecovered || 0;
      }else{
        recovered = parseInt(incident.recovered) || 0;
      }
      const deaths = parseInt(incident.deaths) || 0;
      const current = total - recovered - deaths;
      let prevIncident = state.prevDay.value.find(i => i.country === country);
      if(!prevIncident){
        prevIncident = {
          cases: 0,
          deaths: 0,
          recovered: 0,
        }
      }
       const prevTotal = parseInt(prevIncident.cases) || 0;
      let prevRecovered
      if(state.simulateRecovered.value){
        prevRecovered = prevIncident.estimateRecovered || 0;
      }else{
        prevRecovered = parseInt(prevIncident.recovered) || 0;
      }
      const prevDeaths = parseInt(prevIncident.deaths) || 0;
      const prevCurrent = prevTotal - prevRecovered - prevDeaths;      
      const { name } = getCountry(country);
       //const   { name } =countries.get(country);
      info.value.setContent(`
        <h2 class="info-box">${name}</h2> 
        <p class="info-box">Current Infected: <span class="red">${format(current)}</span> ${getArrowText(prevCurrent, current, true)}</p>
        <p class="info-box">Cases: ${format(total)} ${getArrowText(prevTotal, total, true)}</p>
        <p class="info-box">Recovered: ${format(recovered)} ${getArrowText(prevRecovered, recovered, true, true)}</p>
        <p class="info-box">Deaths: ${format(deaths)} ${getArrowText(prevDeaths, deaths, true)}</p>
      `);
    }
      const paintCircles = () => {
      circles.value.forEach(c => c.setGeometry(null));
      if(Object.keys(map.value).length > 0){
        console.log('alo 123')
        //console.log(`co vo ne ${1}`,Object.keys(map.value).length);
         //console.log(Object.keys(map.value));
        const featureCollection = {//https://storage.googleapis.com/mapsdevsite/json/google.json
          type: "FeatureCollection",
          features: state.day.value.data.map(i => toGeo(i, state.simulateRecovered.value)).filter(a => a),//filter công dụng là lọc từng phần tử thỏa điều kiện 'https://freetuts.net/javascript-function/array-filter.html'//Map công dụng giống vòng lặp 'https://freetuts.net/javascript-function/array-map.html' //https://techmaster.vn/posts/34372/hieu-ve-map-filter-va-reduce-trong-javascript
        }

        circles.value = map.value.data.addGeoJson(featureCollection)
        console.log(`alo kiểm tra map.value.data ${0}`,featureCollection.features);
      }
      if(info.value.country){
        updateInfoWindow(info.value.country)
      }
    }
    watch([state.day, state.simulateRecovered], () => {
      paintCircles(); //lần đầu thì hàm paintCircles không chạy vô if được 
      console.log('alo có vô nha bà con');
    })
    return { };
    ///test
      }
};
const format = num => new Intl.NumberFormat().format(num)
const getOpacity = mag => {
  const o = 0.01 * mag ** 0.32;
  return Math.max(Math.min(o, 1), 0.2);
}
const getScale = mag => Math.max(1.1 * mag ** 0.27, 2)
    const nighMapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
</script>
 <style>
  #map
  {
    height :355px;
  }
.info-box{
  margin: 5px 0;
  display: flex;
  align-items: center;
}
.red{
  border-bottom: 2px solid #d21921;
  border-radius: 1px;
}
 .color-red{
  color: #d21921;
}
.color-green{
  color: #159c33;
}
 </style>