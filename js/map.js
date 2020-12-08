var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([8.40, 50.06]),
    zoom: 10
  })
});

var map2 = new ol.Map({
  target: 'map2',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([24.5336, 35.1835]),
    zoom: 8
  })
});