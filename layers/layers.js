var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ward64Kathrukadavu_1 = new ol.format.GeoJSON();
var features_ward64Kathrukadavu_1 = format_ward64Kathrukadavu_1.readFeatures(json_ward64Kathrukadavu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ward64Kathrukadavu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ward64Kathrukadavu_1.addFeatures(features_ward64Kathrukadavu_1);
var lyr_ward64Kathrukadavu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ward64Kathrukadavu_1, 
                style: style_ward64Kathrukadavu_1,
                popuplayertitle: 'ward 64 (Kathrukadavu)',
                interactive: true,
                title: '<img src="styles/legend/ward64Kathrukadavu_1.png" /> ward 64 (Kathrukadavu)'
            });
var format_ward63Gandhinagar_2 = new ol.format.GeoJSON();
var features_ward63Gandhinagar_2 = format_ward63Gandhinagar_2.readFeatures(json_ward63Gandhinagar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ward63Gandhinagar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ward63Gandhinagar_2.addFeatures(features_ward63Gandhinagar_2);
var lyr_ward63Gandhinagar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ward63Gandhinagar_2, 
                style: style_ward63Gandhinagar_2,
                popuplayertitle: 'ward 63 (Gandhi nagar)',
                interactive: true,
                title: '<img src="styles/legend/ward63Gandhinagar_2.png" /> ward 63 (Gandhi nagar)'
            });
var format_ward54Elamkulam_3 = new ol.format.GeoJSON();
var features_ward54Elamkulam_3 = format_ward54Elamkulam_3.readFeatures(json_ward54Elamkulam_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ward54Elamkulam_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ward54Elamkulam_3.addFeatures(features_ward54Elamkulam_3);
var lyr_ward54Elamkulam_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ward54Elamkulam_3, 
                style: style_ward54Elamkulam_3,
                popuplayertitle: 'ward 54 (Elamkulam)',
                interactive: true,
                title: '<img src="styles/legend/ward54Elamkulam_3.png" /> ward 54 (Elamkulam)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ward64Kathrukadavu_1.setVisible(true);lyr_ward63Gandhinagar_2.setVisible(true);lyr_ward54Elamkulam_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ward64Kathrukadavu_1,lyr_ward63Gandhinagar_2,lyr_ward54Elamkulam_3];
lyr_ward64Kathrukadavu_1.set('fieldAliases', {'Name': 'Name', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', 'image1': 'image1', });
lyr_ward63Gandhinagar_2.set('fieldAliases', {'Name': 'Name', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_ward54Elamkulam_3.set('fieldAliases', {'Name': 'Name', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_ward64Kathrukadavu_1.set('fieldImages', {'Name': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_length(': 'TextEdit', 'image1': 'ExternalResource', });
lyr_ward63Gandhinagar_2.set('fieldImages', {'Name': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_ward54Elamkulam_3.set('fieldImages', {'Name': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_ward64Kathrukadavu_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'st_area(sh': 'inline label - visible with data', 'st_length(': 'inline label - visible with data', 'image1': 'no label', });
lyr_ward63Gandhinagar_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'st_area(sh': 'inline label - visible with data', 'st_length(': 'inline label - visible with data', });
lyr_ward54Elamkulam_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'st_area(sh': 'inline label - visible with data', 'st_length(': 'inline label - visible with data', });
lyr_ward54Elamkulam_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});