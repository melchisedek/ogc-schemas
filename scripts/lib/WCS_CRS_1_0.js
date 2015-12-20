var WCS_CRS_1_0_Module_Factory = function () {
  var WCS_CRS_1_0 = {
    n: 'WCS_CRS_1_0',
    dens: 'http:\/\/www.opengis.net\/wcs\/crs\/1.0',
    tis: [{
        ln: 'CrsMetadataType',
        ps: [{
            n: 'crsSupported',
            mno: 0,
            col: true
          }]
      }, {
        ln: 'CrsType',
        ps: [{
            n: 'subsettingCrs'
          }, {
            n: 'outputCrs'
          }]
      }],
    eis: [{
        en: 'Crs',
        ti: '.CrsType'
      }, {
        en: 'CrsMetadata',
        ti: '.CrsMetadataType'
      }]
  };
  return {
    WCS_CRS_1_0: WCS_CRS_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WCS_CRS_1_0_Module_Factory);
}
else {
  var WCS_CRS_1_0_Module = WCS_CRS_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WCS_CRS_1_0 = WCS_CRS_1_0_Module.WCS_CRS_1_0;
  }
  else {
    var WCS_CRS_1_0 = WCS_CRS_1_0_Module.WCS_CRS_1_0;
  }
}