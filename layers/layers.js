var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_manzanaok_2 = new ol.format.GeoJSON();
var features_manzanaok_2 = format_manzanaok_2.readFeatures(json_manzanaok_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanaok_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanaok_2.addFeatures(features_manzanaok_2);
var lyr_manzanaok_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanaok_2, 
                style: style_manzanaok_2,
                interactive: true,
                title: '<img src="styles/legend/manzanaok_2.png" /> manzanaok'
            });
var format_seccionx_3 = new ol.format.GeoJSON();
var features_seccionx_3 = format_seccionx_3.readFeatures(json_seccionx_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seccionx_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seccionx_3.addFeatures(features_seccionx_3);
var lyr_seccionx_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seccionx_3, 
                style: style_seccionx_3,
                interactive: true,
                title: '<img src="styles/legend/seccionx_3.png" /> seccionx'
            });

lyr_EsriStreet_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_manzanaok_2.setVisible(true);lyr_seccionx_3.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_GoogleTerrainHybrid_1,lyr_manzanaok_2,lyr_seccionx_3];
lyr_manzanaok_2.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'DISTRITO_L': 'DISTRITO_L', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'LOCALIDAD': 'LOCALIDAD', 'MANZANA': 'MANZANA', 'STATUS': 'STATUS', 'DISPERSO': 'DISPERSO', 'CONTROL': 'CONTROL', 'CASO_CAPTU': 'CASO_CAPTU', 'GEOMETRY1_': 'GEOMETRY1_', 'PADRON': 'PADRON', 'LISTA': 'LISTA', 'MAPA': 'MAPA', });
lyr_seccionx_3.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'GEOMETRY1_': 'GEOMETRY1_', 'LN': 'LN', 'PAD': 'PAD', });
lyr_manzanaok_2.set('fieldImages', {'ID': 'Hidden', 'ENTIDAD': 'Hidden', 'DISTRITO_L': 'Hidden', 'DISTRITO': 'Hidden', 'MUNICIPIO': 'Hidden', 'SECCION': 'Hidden', 'LOCALIDAD': 'Hidden', 'MANZANA': 'Range', 'STATUS': 'Hidden', 'DISPERSO': 'Hidden', 'CONTROL': 'Hidden', 'CASO_CAPTU': 'Hidden', 'GEOMETRY1_': 'Hidden', 'PADRON': 'Hidden', 'LISTA': 'Hidden', 'MAPA': 'Hidden', });
lyr_seccionx_3.set('fieldImages', {'ID': 'Hidden', 'ENTIDAD': 'Hidden', 'DISTRITO_F': 'Hidden', 'DISTRITO_L': 'Hidden', 'MUNICIPIO': 'Hidden', 'SECCION': 'TextEdit', 'TIPO': 'Hidden', 'GEOMETRY1_': 'Hidden', 'LN': 'Hidden', 'PAD': 'Hidden', });
lyr_manzanaok_2.set('fieldLabels', {'MANZANA': 'header label', });
lyr_seccionx_3.set('fieldLabels', {'SECCION': 'header label', });
lyr_seccionx_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});