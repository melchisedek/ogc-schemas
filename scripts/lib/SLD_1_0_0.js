var SLD_1_0_0_Module_Factory = function () {
  var SLD_1_0_0 = {
    n: 'SLD_1_0_0',
    dens: 'http:\/\/www.opengis.net\/sld',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['Filter_1_0_0', 'XLink_1_0'],
    tis: [{
        ln: 'Halo',
        tn: null,
        ps: [{
            n: 'radius',
            en: 'Radius',
            ti: '.ParameterValueType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }]
      }, {
        ln: 'LegendGraphic',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'RANDOM',
        tn: null
      }, {
        ln: 'RemoteOWS',
        tn: null,
        ps: [{
            n: 'service',
            rq: true,
            en: 'Service'
          }, {
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'EARLIESTONTOP',
        tn: null
      }, {
        ln: 'TextSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'label',
            en: 'Label',
            ti: '.ParameterValueType'
          }, {
            n: 'font',
            en: 'Font',
            ti: '.Font'
          }, {
            n: 'labelPlacement',
            en: 'LabelPlacement',
            ti: '.LabelPlacement'
          }, {
            n: 'halo',
            en: 'Halo',
            ti: '.Halo'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }]
      }, {
        ln: 'LinePlacement',
        tn: null,
        ps: [{
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'Font',
        tn: null,
        ps: [{
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'SymbolizerType'
      }, {
        ln: 'Extent',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }, {
            n: 'value',
            rq: true,
            en: 'Value'
          }]
      }, {
        ln: 'NamedStyle',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }]
      }, {
        ln: 'ShadedRelief',
        tn: null,
        ps: [{
            n: 'brightnessOnly',
            en: 'BrightnessOnly',
            ti: 'Boolean'
          }, {
            n: 'reliefFactor',
            en: 'ReliefFactor',
            ti: 'Double'
          }]
      }, {
        ln: 'LabelPlacement',
        tn: null,
        ps: [{
            n: 'pointPlacement',
            rq: true,
            en: 'PointPlacement',
            ti: '.PointPlacement'
          }, {
            n: 'linePlacement',
            rq: true,
            en: 'LinePlacement',
            ti: '.LinePlacement'
          }]
      }, {
        ln: 'OnlineResource',
        tn: null,
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'Normalize',
        tn: null
      }, {
        ln: 'OverlapBehavior',
        tn: null,
        ps: [{
            n: 'latestontop',
            rq: true,
            en: 'LATEST_ON_TOP',
            ti: '.LATESTONTOP'
          }, {
            n: 'earliestontop',
            rq: true,
            en: 'EARLIEST_ON_TOP',
            ti: '.EARLIESTONTOP'
          }, {
            n: 'average',
            rq: true,
            en: 'AVERAGE',
            ti: '.AVERAGE'
          }, {
            n: 'random',
            rq: true,
            en: 'RANDOM',
            ti: '.RANDOM'
          }]
      }, {
        ln: 'ExternalGraphic',
        tn: null,
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'format',
            rq: true,
            en: 'Format'
          }]
      }, {
        ln: 'GraphicFill',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'PointSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'graphic',
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'AnchorPoint',
        tn: null,
        ps: [{
            n: 'anchorPointX',
            rq: true,
            en: 'AnchorPointX',
            ti: '.ParameterValueType'
          }, {
            n: 'anchorPointY',
            rq: true,
            en: 'AnchorPointY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'CssParameter',
        tn: null,
        bti: '.ParameterValueType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParameterValueType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'expression',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'ImageOutline',
        tn: null,
        ps: [{
            n: 'lineSymbolizer',
            rq: true,
            en: 'LineSymbolizer',
            ti: '.LineSymbolizer'
          }, {
            n: 'polygonSymbolizer',
            rq: true,
            en: 'PolygonSymbolizer',
            ti: '.PolygonSymbolizer'
          }]
      }, {
        ln: 'UserLayer',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'remoteOWS',
            en: 'RemoteOWS',
            ti: '.RemoteOWS'
          }, {
            n: 'layerFeatureConstraints',
            rq: true,
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'userStyle',
            rq: true,
            col: true,
            en: 'UserStyle',
            ti: '.UserStyle'
          }]
      }, {
        ln: 'LineSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'Geometry',
        tn: null,
        ps: [{
            n: 'propertyName',
            rq: true,
            en: {
              lp: 'PropertyName',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.PropertyNameType'
          }]
      }, {
        ln: 'Displacement',
        tn: null,
        ps: [{
            n: 'displacementX',
            rq: true,
            en: 'DisplacementX',
            ti: '.ParameterValueType'
          }, {
            n: 'displacementY',
            rq: true,
            en: 'DisplacementY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'ColorMap',
        tn: null,
        ps: [{
            n: 'colorMapEntry',
            mno: 0,
            col: true,
            en: 'ColorMapEntry',
            ti: '.ColorMapEntry'
          }]
      }, {
        ln: 'LayerFeatureConstraints',
        tn: null,
        ps: [{
            n: 'featureTypeConstraint',
            rq: true,
            col: true,
            en: 'FeatureTypeConstraint',
            ti: '.FeatureTypeConstraint'
          }]
      }, {
        ln: 'GraphicStroke',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'Histogram',
        tn: null
      }, {
        ln: 'Rule',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'legendGraphic',
            en: 'LegendGraphic',
            ti: '.LegendGraphic'
          }, {
            n: 'filter',
            rq: true,
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FilterType'
          }, {
            n: 'elseFilter',
            rq: true,
            en: 'ElseFilter',
            ti: '.ElseFilter'
          }, {
            n: 'minScaleDenominator',
            en: 'MinScaleDenominator',
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: 'MaxScaleDenominator',
            ti: 'Double'
          }, {
            n: 'symbolizer',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: 'Symbolizer',
            ti: '.SymbolizerType',
            t: 'er'
          }]
      }, {
        ln: 'Graphic',
        tn: null,
        ps: [{
            n: 'externalGraphicOrMark',
            mno: 0,
            col: true,
            etis: [{
                en: 'ExternalGraphic',
                ti: '.ExternalGraphic'
              }, {
                en: 'Mark',
                ti: '.Mark'
              }],
            t: 'es'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'size',
            en: 'Size',
            ti: '.ParameterValueType'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'RasterSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'channelSelection',
            en: 'ChannelSelection',
            ti: '.ChannelSelection'
          }, {
            n: 'overlapBehavior',
            en: 'OverlapBehavior',
            ti: '.OverlapBehavior'
          }, {
            n: 'colorMap',
            en: 'ColorMap',
            ti: '.ColorMap'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancement'
          }, {
            n: 'shadedRelief',
            en: 'ShadedRelief',
            ti: '.ShadedRelief'
          }, {
            n: 'imageOutline',
            en: 'ImageOutline',
            ti: '.ImageOutline'
          }]
      }, {
        ln: 'ContrastEnhancement',
        tn: null,
        ps: [{
            n: 'normalize',
            rq: true,
            en: 'Normalize',
            ti: '.Normalize'
          }, {
            n: 'histogram',
            rq: true,
            en: 'Histogram',
            ti: '.Histogram'
          }, {
            n: 'gammaValue',
            en: 'GammaValue',
            ti: 'Double'
          }]
      }, {
        ln: 'ColorMapEntry',
        tn: null,
        ps: [{
            n: 'color',
            rq: true,
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'opacity',
            ti: 'Double',
            an: {
              lp: 'opacity'
            },
            t: 'a'
          }, {
            n: 'quantity',
            ti: 'Double',
            an: {
              lp: 'quantity'
            },
            t: 'a'
          }, {
            n: 'label',
            an: {
              lp: 'label'
            },
            t: 'a'
          }]
      }, {
        ln: 'AVERAGE',
        tn: null
      }, {
        ln: 'FeatureTypeConstraint',
        tn: null,
        ps: [{
            n: 'featureTypeName',
            en: 'FeatureTypeName'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FilterType'
          }, {
            n: 'extent',
            mno: 0,
            col: true,
            en: 'Extent',
            ti: '.Extent'
          }]
      }, {
        ln: 'PointPlacement',
        tn: null,
        ps: [{
            n: 'anchorPoint',
            en: 'AnchorPoint',
            ti: '.AnchorPoint'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.Displacement'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'PolygonSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'Mark',
        tn: null,
        ps: [{
            n: 'wellKnownName',
            en: 'WellKnownName'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'UserStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'isDefault',
            en: 'IsDefault',
            ti: 'Boolean'
          }, {
            n: 'featureTypeStyle',
            rq: true,
            col: true,
            en: 'FeatureTypeStyle',
            ti: '.FeatureTypeStyle'
          }]
      }, {
        ln: 'NamedLayer',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }, {
            n: 'layerFeatureConstraints',
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'namedStyleOrUserStyle',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedStyle',
                ti: '.NamedStyle'
              }, {
                en: 'UserStyle',
                ti: '.UserStyle'
              }],
            t: 'es'
          }]
      }, {
        ln: 'ChannelSelection',
        tn: null,
        ps: [{
            n: 'redChannel',
            rq: true,
            en: 'RedChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'greenChannel',
            rq: true,
            en: 'GreenChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'blueChannel',
            rq: true,
            en: 'BlueChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'grayChannel',
            rq: true,
            en: 'GrayChannel',
            ti: '.SelectedChannelType'
          }]
      }, {
        ln: 'StyledLayerDescriptor',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'namedLayerOrUserLayer',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedLayer',
                ti: '.NamedLayer'
              }, {
                en: 'UserLayer',
                ti: '.UserLayer'
              }],
            t: 'es'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'SelectedChannelType',
        ps: [{
            n: 'sourceChannelName',
            rq: true,
            en: 'SourceChannelName'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancement'
          }]
      }, {
        ln: 'FeatureTypeStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'featureTypeName',
            en: 'FeatureTypeName'
          }, {
            n: 'semanticTypeIdentifier',
            mno: 0,
            col: true,
            en: 'SemanticTypeIdentifier'
          }, {
            n: 'rule',
            rq: true,
            col: true,
            en: 'Rule',
            ti: '.Rule'
          }]
      }, {
        ln: 'Fill',
        tn: null,
        ps: [{
            n: 'graphicFill',
            en: 'GraphicFill',
            ti: '.GraphicFill'
          }, {
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'LATESTONTOP',
        tn: null
      }, {
        ln: 'ElseFilter',
        tn: null
      }, {
        ln: 'Stroke',
        tn: null,
        ps: [{
            n: 'graphicFill',
            rq: true,
            en: 'GraphicFill',
            ti: '.GraphicFill'
          }, {
            n: 'graphicStroke',
            rq: true,
            en: 'GraphicStroke',
            ti: '.GraphicStroke'
          }, {
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }],
    eis: [{
        en: 'BrightnessOnly',
        ti: 'Boolean'
      }, {
        en: 'MaxScaleDenominator',
        ti: 'Double'
      }, {
        en: 'FeatureTypeStyle',
        ti: '.FeatureTypeStyle'
      }, {
        en: 'Stroke',
        ti: '.Stroke'
      }, {
        en: 'LayerFeatureConstraints',
        ti: '.LayerFeatureConstraints'
      }, {
        en: 'ColorMap',
        ti: '.ColorMap'
      }, {
        en: 'AnchorPointX',
        ti: '.ParameterValueType'
      }, {
        en: 'ColorMapEntry',
        ti: '.ColorMapEntry'
      }, {
        en: 'AVERAGE',
        ti: '.AVERAGE'
      }, {
        en: 'Abstract'
      }, {
        en: 'PointPlacement',
        ti: '.PointPlacement'
      }, {
        en: 'TextSymbolizer',
        ti: '.TextSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'GraphicFill',
        ti: '.GraphicFill'
      }, {
        en: 'BlueChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Name'
      }, {
        en: 'SemanticTypeIdentifier'
      }, {
        en: 'Rotation',
        ti: '.ParameterValueType'
      }, {
        en: 'MinScaleDenominator',
        ti: 'Double'
      }, {
        en: 'DisplacementX',
        ti: '.ParameterValueType'
      }, {
        en: 'ExternalGraphic',
        ti: '.ExternalGraphic'
      }, {
        en: 'RedChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Histogram',
        ti: '.Histogram'
      }, {
        en: 'Value'
      }, {
        en: 'IsDefault',
        ti: 'Boolean'
      }, {
        en: 'Normalize',
        ti: '.Normalize'
      }, {
        en: 'AnchorPointY',
        ti: '.ParameterValueType'
      }, {
        en: 'Rule',
        ti: '.Rule'
      }, {
        en: 'Displacement',
        ti: '.Displacement'
      }, {
        en: 'LabelPlacement',
        ti: '.LabelPlacement'
      }, {
        en: 'OverlapBehavior',
        ti: '.OverlapBehavior'
      }, {
        en: 'PointSymbolizer',
        ti: '.PointSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'RANDOM',
        ti: '.RANDOM'
      }, {
        en: 'AnchorPoint',
        ti: '.AnchorPoint'
      }, {
        en: 'Label',
        ti: '.ParameterValueType'
      }, {
        en: 'ReliefFactor',
        ti: 'Double'
      }, {
        en: 'UserStyle',
        ti: '.UserStyle'
      }, {
        en: 'LATEST_ON_TOP',
        ti: '.LATESTONTOP'
      }, {
        en: 'FeatureTypeConstraint',
        ti: '.FeatureTypeConstraint'
      }, {
        en: 'FeatureTypeName'
      }, {
        en: 'LinePlacement',
        ti: '.LinePlacement'
      }, {
        en: 'ContrastEnhancement',
        ti: '.ContrastEnhancement'
      }, {
        en: 'Opacity',
        ti: '.ParameterValueType'
      }, {
        en: 'Radius',
        ti: '.ParameterValueType'
      }, {
        en: 'ChannelSelection',
        ti: '.ChannelSelection'
      }, {
        en: 'SourceChannelName'
      }, {
        en: 'Size',
        ti: '.ParameterValueType'
      }, {
        en: 'ElseFilter',
        ti: '.ElseFilter'
      }, {
        en: 'RemoteOWS',
        ti: '.RemoteOWS'
      }, {
        en: 'Font',
        ti: '.Font'
      }, {
        en: 'PolygonSymbolizer',
        ti: '.PolygonSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'Fill',
        ti: '.Fill'
      }, {
        en: 'Mark',
        ti: '.Mark'
      }, {
        en: 'StyledLayerDescriptor',
        ti: '.StyledLayerDescriptor'
      }, {
        en: 'GreenChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'EARLIEST_ON_TOP',
        ti: '.EARLIESTONTOP'
      }, {
        en: 'ImageOutline',
        ti: '.ImageOutline'
      }, {
        en: 'PerpendicularOffset',
        ti: '.ParameterValueType'
      }, {
        en: 'GammaValue',
        ti: 'Double'
      }, {
        en: 'LegendGraphic',
        ti: '.LegendGraphic'
      }, {
        en: 'LineSymbolizer',
        ti: '.LineSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'Halo',
        ti: '.Halo'
      }, {
        en: 'NamedStyle',
        ti: '.NamedStyle'
      }, {
        en: 'Service'
      }, {
        en: 'GraphicStroke',
        ti: '.GraphicStroke'
      }, {
        en: 'NamedLayer',
        ti: '.NamedLayer'
      }, {
        en: 'GrayChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Extent',
        ti: '.Extent'
      }, {
        en: 'Title'
      }, {
        en: 'RasterSymbolizer',
        ti: '.RasterSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'DisplacementY',
        ti: '.ParameterValueType'
      }, {
        en: 'CssParameter',
        ti: '.CssParameter'
      }, {
        en: 'Geometry',
        ti: '.Geometry'
      }, {
        en: 'Format'
      }, {
        en: 'WellKnownName'
      }, {
        en: 'Symbolizer',
        ti: '.SymbolizerType'
      }, {
        en: 'OnlineResource',
        ti: '.OnlineResource'
      }, {
        en: 'ShadedRelief',
        ti: '.ShadedRelief'
      }, {
        en: 'Graphic',
        ti: '.Graphic'
      }, {
        en: 'UserLayer',
        ti: '.UserLayer'
      }]
  };
  return {
    SLD_1_0_0: SLD_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SLD_1_0_0_Module_Factory);
}
else {
  var SLD_1_0_0_Module = SLD_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SLD_1_0_0 = SLD_1_0_0_Module.SLD_1_0_0;
  }
  else {
    var SLD_1_0_0 = SLD_1_0_0_Module.SLD_1_0_0;
  }
}