var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AdminKecamatanMadiun_1 = new ol.format.GeoJSON();
var features_AdminKecamatanMadiun_1 = format_AdminKecamatanMadiun_1.readFeatures(json_AdminKecamatanMadiun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdminKecamatanMadiun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdminKecamatanMadiun_1.addFeatures(features_AdminKecamatanMadiun_1);
var lyr_AdminKecamatanMadiun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdminKecamatanMadiun_1, 
                style: style_AdminKecamatanMadiun_1,
                popuplayertitle: 'Admin Kecamatan Madiun',
                interactive: true,
    title: 'Admin Kecamatan Madiun<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_0.png" /> BABADAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_1.png" /> BAGOR<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_2.png" /> BALEREJO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_3.png" /> BENDO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_4.png" /> BUBULAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_5.png" /> DAGANGAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_6.png" /> DOLOPO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_7.png" /> GEGER<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_8.png" /> GEMARANG<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_9.png" /> JENANGAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_10.png" /> JIWAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_11.png" /> KARANGJATI<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_12.png" /> KARANGMOJO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_13.png" /> KARE<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_14.png" /> KARTOHARJO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_15.png" /> KEBONSARI<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_16.png" /> KWADUNGAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_17.png" /> LEMBEYAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_18.png" /> MADIUN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_19.png" /> MANGUNHARJO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_20.png" /> MAOSPATI<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_21.png" /> MEJAYAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_22.png" /> NGAMBON<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_23.png" /> NGEBEL<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_24.png" /> PANGKUR<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_25.png" /> PILANGKENCENG<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_26.png" /> PULUNG<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_27.png" /> REJOSO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_28.png" /> SARADAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_29.png" /> SAWAHAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_30.png" /> SUKOREJO<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_31.png" /> TAKERAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_32.png" /> TAMAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_33.png" /> WILANGAN<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_34.png" /> WONOASRI<br />\
    <img src="styles/legend/AdminKecamatanMadiun_1_35.png" /> WUNGU<br />' });
var format_KabMadiun_2 = new ol.format.GeoJSON();
var features_KabMadiun_2 = format_KabMadiun_2.readFeatures(json_KabMadiun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabMadiun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabMadiun_2.addFeatures(features_KabMadiun_2);
var lyr_KabMadiun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabMadiun_2, 
                style: style_KabMadiun_2,
                popuplayertitle: 'Kab Madiun',
                interactive: false,
    title: 'Kab Madiun<br />\
    <img src="styles/legend/KabMadiun_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KabMadiun_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/KabMadiun_2_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/KabMadiun_2_3.png" /> Jalan Lingkungan<br />' });
var format_KabNganjuk_3 = new ol.format.GeoJSON();
var features_KabNganjuk_3 = format_KabNganjuk_3.readFeatures(json_KabNganjuk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabNganjuk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabNganjuk_3.addFeatures(features_KabNganjuk_3);
var lyr_KabNganjuk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabNganjuk_3, 
                style: style_KabNganjuk_3,
                popuplayertitle: 'Kab Nganjuk',
                interactive: false,
    title: 'Kab Nganjuk<br />\
    <img src="styles/legend/KabNganjuk_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KabNganjuk_3_1.png" /> Jalan Kolektor<br />' });
var format_KabMagetan_4 = new ol.format.GeoJSON();
var features_KabMagetan_4 = format_KabMagetan_4.readFeatures(json_KabMagetan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabMagetan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabMagetan_4.addFeatures(features_KabMagetan_4);
var lyr_KabMagetan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabMagetan_4, 
                style: style_KabMagetan_4,
                popuplayertitle: 'Kab Magetan',
                interactive: false,
    title: 'Kab Magetan<br />\
    <img src="styles/legend/KabMagetan_4_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KabMagetan_4_1.png" /> Jalan Kolektor<br />' });
var format_KabNgawi_5 = new ol.format.GeoJSON();
var features_KabNgawi_5 = format_KabNgawi_5.readFeatures(json_KabNgawi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabNgawi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabNgawi_5.addFeatures(features_KabNgawi_5);
var lyr_KabNgawi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabNgawi_5, 
                style: style_KabNgawi_5,
                popuplayertitle: 'Kab Ngawi',
                interactive: false,
    title: 'Kab Ngawi<br />\
    <img src="styles/legend/KabNgawi_5_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KabNgawi_5_1.png" /> Jalan Kolektor<br />' });
var format_KabPonorogo_6 = new ol.format.GeoJSON();
var features_KabPonorogo_6 = format_KabPonorogo_6.readFeatures(json_KabPonorogo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabPonorogo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabPonorogo_6.addFeatures(features_KabPonorogo_6);
var lyr_KabPonorogo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabPonorogo_6, 
                style: style_KabPonorogo_6,
                popuplayertitle: 'Kab Ponorogo',
                interactive: false,
    title: 'Kab Ponorogo<br />\
    <img src="styles/legend/KabPonorogo_6_0.png" /> Jalan Kolektor<br />' });
var format_KotaMadiun_7 = new ol.format.GeoJSON();
var features_KotaMadiun_7 = format_KotaMadiun_7.readFeatures(json_KotaMadiun_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMadiun_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMadiun_7.addFeatures(features_KotaMadiun_7);
var lyr_KotaMadiun_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMadiun_7, 
                style: style_KotaMadiun_7,
                popuplayertitle: 'Kota Madiun',
                interactive: false,
    title: 'Kota Madiun<br />\
    <img src="styles/legend/KotaMadiun_7_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KotaMadiun_7_1.png" /> Jalan Kolektor<br />' });
var format_TitikUMKM_8 = new ol.format.GeoJSON();
var features_TitikUMKM_8 = format_TitikUMKM_8.readFeatures(json_TitikUMKM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikUMKM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikUMKM_8.addFeatures(features_TitikUMKM_8);
var lyr_TitikUMKM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikUMKM_8, 
                style: style_TitikUMKM_8,
                popuplayertitle: 'Titik UMKM',
                interactive: true,
    title: 'Titik UMKM<br />\
    <img src="styles/legend/TitikUMKM_8_0.png" /> Ayam<br />\
    <img src="styles/legend/TitikUMKM_8_1.png" /> Beras/Padi<br />\
    <img src="styles/legend/TitikUMKM_8_2.png" /> Bluder<br />\
    <img src="styles/legend/TitikUMKM_8_3.png" /> Brem<br />\
    <img src="styles/legend/TitikUMKM_8_4.png" /> Gula Merah<br />\
    <img src="styles/legend/TitikUMKM_8_5.png" /> Jagung<br />\
    <img src="styles/legend/TitikUMKM_8_6.png" /> Jenang Dodol<br />\
    <img src="styles/legend/TitikUMKM_8_7.png" /> Kakao<br />\
    <img src="styles/legend/TitikUMKM_8_8.png" /> Kambing<br />\
    <img src="styles/legend/TitikUMKM_8_9.png" /> Keripik Tempe<br />\
    <img src="styles/legend/TitikUMKM_8_10.png" /> Kerupuk Puli<br />\
    <img src="styles/legend/TitikUMKM_8_11.png" /> Ketela<br />\
    <img src="styles/legend/TitikUMKM_8_12.png" /> Lele<br />\
    <img src="styles/legend/TitikUMKM_8_13.png" /> Madumongso<br />\
    <img src="styles/legend/TitikUMKM_8_14.png" /> Pasar<br />\
    <img src="styles/legend/TitikUMKM_8_15.png" /> Porang<br />\
    <img src="styles/legend/TitikUMKM_8_16.png" /> Sambel Pecel<br />\
    <img src="styles/legend/TitikUMKM_8_17.png" /> Sapi<br />\
    <img src="styles/legend/TitikUMKM_8_18.png" /> Tahu<br />\
    <img src="styles/legend/TitikUMKM_8_19.png" /> Tape Singkong<br />\
    <img src="styles/legend/TitikUMKM_8_20.png" /> Tempe<br />' });
var group_JalanMadiundanSekitarnya = new ol.layer.Group({
                                layers: [lyr_KabNganjuk_3,lyr_KabMagetan_4,lyr_KabNgawi_5,lyr_KabPonorogo_6,lyr_KotaMadiun_7,],
                                fold: 'close',
                                title: 'Jalan Madiun dan Sekitarnya'});

lyr_GoogleSatellite_0.setVisible(true);lyr_AdminKecamatanMadiun_1.setVisible(true);lyr_KabMadiun_2.setVisible(true);lyr_KabNganjuk_3.setVisible(true);lyr_KabMagetan_4.setVisible(true);lyr_KabNgawi_5.setVisible(true);lyr_KabPonorogo_6.setVisible(true);lyr_KotaMadiun_7.setVisible(true);lyr_TitikUMKM_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AdminKecamatanMadiun_1,lyr_KabMadiun_2,group_JalanMadiundanSekitarnya,lyr_TitikUMKM_8];
lyr_AdminKecamatanMadiun_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KabMadiun_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KabNganjuk_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_KabMagetan_4.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_KabNgawi_5.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_KabPonorogo_6.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_KotaMadiun_7.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_TitikUMKM_8.set('fieldAliases', {'Nama UMKM': 'Nama UMKM', 'Jenis UMKM': 'Jenis UMKM', 'Klas UMKM': 'Klas UMKM', 'Alamat': 'Alamat', 'Operasiona': 'Operasiona', 'Kontak': 'Kontak', 'Rating': 'Rating', 'Gambar': 'Gambar', });
lyr_AdminKecamatanMadiun_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KabMadiun_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KabNganjuk_3.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_KabMagetan_4.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_KabNgawi_5.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_KabPonorogo_6.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_KotaMadiun_7.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_TitikUMKM_8.set('fieldImages', {'Nama UMKM': 'TextEdit', 'Jenis UMKM': 'TextEdit', 'Klas UMKM': 'TextEdit', 'Alamat': 'TextEdit', 'Operasiona': 'TextEdit', 'Kontak': 'TextEdit', 'Rating': 'TextEdit', 'Gambar': 'TextEdit', });
lyr_AdminKecamatanMadiun_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KabMadiun_2.set('fieldLabels', {'NAMRJL': 'hidden field', 'KONRJL': 'hidden field', 'MATRJL': 'hidden field', 'FGSRJL': 'hidden field', 'UTKRJL': 'hidden field', 'TOLRJL': 'hidden field', 'WLYRJL': 'hidden field', 'AUTRJL': 'hidden field', 'KLSRJL': 'hidden field', 'SPCRJL': 'hidden field', 'JPARJL': 'hidden field', 'ARHRJL': 'hidden field', 'STARJL': 'hidden field', 'KLLRJL': 'hidden field', 'MEDRJL': 'hidden field', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KabNganjuk_3.set('fieldLabels', {'REMARK': 'no label', });
lyr_KabMagetan_4.set('fieldLabels', {'REMARK': 'no label', });
lyr_KabNgawi_5.set('fieldLabels', {'REMARK': 'no label', });
lyr_KabPonorogo_6.set('fieldLabels', {'REMARK': 'no label', });
lyr_KotaMadiun_7.set('fieldLabels', {'REMARK': 'no label', });
lyr_TitikUMKM_8.set('fieldLabels', {'Nama UMKM': 'no label', 'Jenis UMKM': 'no label', 'Klas UMKM': 'no label', 'Alamat': 'no label', 'Operasiona': 'no label', 'Kontak': 'no label', 'Rating': 'no label', 'Gambar': 'no label', });
lyr_TitikUMKM_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});