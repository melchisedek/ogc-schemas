var SWES_2_0_Module_Factory = function () {
  var SWES_2_0 = {
    n: 'SWES_2_0',
    dens: 'http:\/\/www.opengis.net\/swes\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0', 'GML_3_2_1', 'WS_Addr_1_0_Core', 'OWS_1_1_0', 'WSN_T_1'],
    tis: [{
        ln: 'NotificationProducerMetadataType',
        bti: '.AbstractSWESType',
        ps: [{
            n: 'producerEndpoint',
            ti: '.NotificationProducerMetadataType.ProducerEndpoint'
          }, {
            n: 'supportedDialects',
            ti: '.NotificationProducerMetadataType.SupportedDialects'
          }, {
            n: 'fixedTopicSet',
            ti: 'Boolean'
          }, {
            n: 'servedTopics',
            ti: '.NotificationProducerMetadataType.ServedTopics'
          }, {
            n: 'usedTopicNamespace',
            col: true,
            ti: 'WSN_T_1.TopicNamespaceType'
          }]
      }, {
        ln: 'AbstractOfferingPropertyType',
        ps: [{
            n: 'abstractOffering',
            en: 'AbstractOffering',
            ti: '.AbstractOfferingType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'AbstractSWESType',
        ps: [{
            n: 'description'
          }, {
            n: 'identifier'
          }, {
            n: 'name',
            col: true,
            ti: 'GML_3_2_1.CodeType'
          }, {
            n: 'extension',
            col: true,
            ti: 'AnyType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id',
              ns: 'http:\/\/www.opengis.net\/swes\/2.0'
            },
            t: 'a'
          }]
      }, {
        ln: 'SensorDescriptionType.Data',
        tn: null,
        ps: [{
            n: 'any',
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'UpdateSensorDescriptionResponsePropertyType',
        ps: [{
            n: 'updateSensorDescriptionResponse',
            en: 'UpdateSensorDescriptionResponse',
            ti: '.UpdateSensorDescriptionResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'NotificationProducerMetadataPropertyType',
        ps: [{
            n: 'notificationProducerMetadata',
            mx: false,
            dom: false,
            en: 'NotificationProducerMetadata',
            ti: '.NotificationProducerMetadataType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'DescribeSensorResponseType.Description',
        tn: null,
        ps: [{
            n: 'sensorDescription',
            en: 'SensorDescription',
            ti: '.SensorDescriptionType'
          }]
      }, {
        ln: 'DescribeSensorResponsePropertyType',
        ps: [{
            n: 'describeSensorResponse',
            en: 'DescribeSensorResponse',
            ti: '.DescribeSensorResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'AbstractOfferingType.RelatedFeature',
        tn: null,
        ps: [{
            n: 'featureRelationship',
            en: 'FeatureRelationship',
            ti: '.FeatureRelationshipType'
          }]
      }, {
        ln: 'InsertSensorResponsePropertyType',
        ps: [{
            n: 'insertSensorResponse',
            en: 'InsertSensorResponse',
            ti: '.InsertSensorResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'NotificationBrokerMetadataPropertyType',
        ps: [{
            n: 'notificationBrokerMetadata',
            en: 'NotificationBrokerMetadata',
            ti: '.NotificationBrokerMetadataType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'SensorDescriptionType.ValidTime',
        tn: null,
        ps: [{
            n: 'abstractTimeGeometricPrimitive',
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractTimeGeometricPrimitive',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.AbstractTimeGeometricPrimitiveType',
            t: 'er'
          }]
      }, {
        ln: 'DeleteSensorResponsePropertyType',
        ps: [{
            n: 'deleteSensorResponse',
            en: 'DeleteSensorResponse',
            ti: '.DeleteSensorResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'SWESEventType',
        bti: '.AbstractSWESType',
        ps: [{
            n: 'eventTime',
            ti: 'Calendar'
          }, {
            n: 'code'
          }, {
            n: 'message',
            col: true,
            ti: 'OWS_1_1_0.LanguageStringType'
          }, {
            n: 'service',
            ti: '.SWESEventType.Service'
          }]
      }, {
        ln: 'UpdateSensorDescriptionResponseType',
        bti: '.ExtensibleResponseType',
        ps: [{
            n: 'updatedProcedure'
          }]
      }, {
        ln: 'SWESEventType.Service',
        tn: null,
        ps: [{
            n: 'endpointReference',
            en: {
              lp: 'EndpointReference',
              ns: 'http:\/\/www.w3.org\/2005\/08\/addressing'
            },
            ti: 'WS_Addr_1_0_Core.EndpointReferenceType'
          }]
      }, {
        ln: 'DeleteSensorResponseType',
        bti: '.ExtensibleResponseType',
        ps: [{
            n: 'deletedProcedure'
          }]
      }, {
        ln: 'DeleteSensorPropertyType',
        ps: [{
            n: 'deleteSensor',
            en: 'DeleteSensor',
            ti: '.DeleteSensorType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'SWESEventPropertyType',
        ps: [{
            n: 'swesEvent',
            mx: false,
            dom: false,
            en: 'SWESEvent',
            ti: '.SWESEventType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'FeatureRelationshipPropertyType',
        ps: [{
            n: 'featureRelationship',
            en: 'FeatureRelationship',
            ti: '.FeatureRelationshipType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'AbstractContentsPropertyType',
        ps: [{
            n: 'abstractContents',
            en: 'AbstractContents',
            ti: '.AbstractContentsType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'AbstractContentsType.Offering',
        tn: null,
        ps: [{
            n: 'abstractOffering',
            en: 'AbstractOffering',
            ti: '.AbstractOfferingType'
          }]
      }, {
        ln: 'DescribeSensorType.ValidTime',
        tn: null,
        ps: [{
            n: 'abstractTimeGeometricPrimitive',
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractTimeGeometricPrimitive',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.AbstractTimeGeometricPrimitiveType',
            t: 'er'
          }]
      }, {
        ln: 'AbstractContentsType.RelatedFeature',
        tn: null,
        ps: [{
            n: 'featureRelationship',
            en: 'FeatureRelationship',
            ti: '.FeatureRelationshipType'
          }]
      }, {
        ln: 'DescribeSensorResponseType',
        bti: '.ExtensibleResponseType',
        ps: [{
            n: 'procedureDescriptionFormat'
          }, {
            n: 'description',
            col: true,
            ti: '.DescribeSensorResponseType.Description'
          }]
      }, {
        ln: 'InsertSensorType.RelatedFeature',
        tn: null,
        ps: [{
            n: 'featureRelationship',
            en: 'FeatureRelationship',
            ti: '.FeatureRelationshipType'
          }]
      }, {
        ln: 'ExtensibleResponseType',
        ps: [{
            n: 'extension',
            col: true,
            ti: 'AnyType'
          }]
      }, {
        ln: 'SensorChangedPropertyType',
        ps: [{
            n: 'sensorChanged',
            mx: false,
            dom: false,
            en: 'SensorChanged',
            ti: '.SensorChangedType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'NotificationProducerMetadataType.SupportedDialects',
        tn: null,
        ps: [{
            n: 'filterDialectMetadata',
            en: 'FilterDialectMetadata',
            ti: '.FilterDialectMetadataType'
          }]
      }, {
        ln: 'AbstractContentsType',
        bti: '.AbstractSWESType',
        ps: [{
            n: 'procedureDescriptionFormat',
            col: true
          }, {
            n: 'observableProperty',
            col: true
          }, {
            n: 'relatedFeature',
            col: true,
            ti: '.AbstractContentsType.RelatedFeature'
          }, {
            n: 'offering',
            col: true,
            ti: '.AbstractContentsType.Offering'
          }]
      }, {
        ln: 'InsertSensorResponseType',
        bti: '.ExtensibleResponseType',
        ps: [{
            n: 'assignedProcedure'
          }, {
            n: 'assignedOffering'
          }]
      }, {
        ln: 'ExtensibleResponsePropertyType',
        ps: [{
            n: 'extensibleResponse',
            mx: false,
            dom: false,
            en: 'ExtensibleResponse',
            ti: '.ExtensibleResponseType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'SensorDescriptionType',
        ps: [{
            n: 'validTime',
            ti: '.SensorDescriptionType.ValidTime'
          }, {
            n: 'data',
            ti: '.SensorDescriptionType.Data'
          }]
      }, {
        ln: 'InsertSensorPropertyType',
        ps: [{
            n: 'insertSensor',
            en: 'InsertSensor',
            ti: '.InsertSensorType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'InsertSensorType.ProcedureDescription',
        tn: null,
        ps: [{
            n: 'any',
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'UpdateSensorDescriptionType.Description',
        tn: null,
        ps: [{
            n: 'sensorDescription',
            en: 'SensorDescription',
            ti: '.SensorDescriptionType'
          }]
      }, {
        ln: 'SensorDescriptionPropertyType',
        ps: [{
            n: 'sensorDescription',
            en: 'SensorDescription',
            ti: '.SensorDescriptionType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'UpdateSensorDescriptionPropertyType',
        ps: [{
            n: 'updateSensorDescription',
            en: 'UpdateSensorDescription',
            ti: '.UpdateSensorDescriptionType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'InsertSensorType',
        bti: '.ExtensibleRequestType',
        ps: [{
            n: 'procedureDescriptionFormat'
          }, {
            n: 'procedureDescription',
            ti: '.InsertSensorType.ProcedureDescription'
          }, {
            n: 'observableProperty',
            col: true
          }, {
            n: 'relatedFeature',
            col: true,
            ti: '.InsertSensorType.RelatedFeature'
          }, {
            n: 'metadata',
            col: true,
            ti: '.InsertSensorType.Metadata'
          }]
      }, {
        ln: 'AbstractSWESPropertyType',
        ps: [{
            n: 'abstractSWES',
            mx: false,
            dom: false,
            en: 'AbstractSWES',
            ti: '.AbstractSWESType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'InsertionMetadataType'
      }, {
        ln: 'DescribeSensorPropertyType',
        ps: [{
            n: 'describeSensor',
            en: 'DescribeSensor',
            ti: '.DescribeSensorType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'UpdateSensorDescriptionType',
        bti: '.ExtensibleRequestType',
        ps: [{
            n: 'procedure'
          }, {
            n: 'procedureDescriptionFormat'
          }, {
            n: 'description',
            col: true,
            ti: '.UpdateSensorDescriptionType.Description'
          }]
      }, {
        ln: 'ExtensibleRequestType',
        ps: [{
            n: 'extension',
            col: true,
            ti: 'AnyType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'DeleteSensorType',
        bti: '.ExtensibleRequestType',
        ps: [{
            n: 'procedure'
          }]
      }, {
        ln: 'InsertSensorType.Metadata',
        tn: null,
        ps: [{
            n: 'insertionMetadata',
            en: 'InsertionMetadata',
            ti: '.InsertionMetadataType'
          }]
      }, {
        ln: 'InsertionMetadataPropertyType',
        ps: [{
            n: 'insertionMetadata',
            en: 'InsertionMetadata',
            ti: '.InsertionMetadataType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'SensorDescriptionUpdatedPropertyType',
        ps: [{
            n: 'sensorDescriptionUpdated',
            en: 'SensorDescriptionUpdated',
            ti: '.SensorDescriptionUpdatedType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'FilterDialectMetadataPropertyType',
        ps: [{
            n: 'filterDialectMetadata',
            en: 'FilterDialectMetadata',
            ti: '.FilterDialectMetadataType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'SensorChangedType',
        bti: '.SWESEventType',
        ps: [{
            n: 'procedure'
          }]
      }, {
        ln: 'OfferingChangedType',
        bti: '.SWESEventType',
        ps: [{
            n: 'offering'
          }]
      }, {
        ln: 'AbstractOfferingType',
        bti: '.AbstractSWESType',
        ps: [{
            n: 'procedure'
          }, {
            n: 'procedureDescriptionFormat',
            col: true
          }, {
            n: 'observableProperty',
            col: true
          }, {
            n: 'relatedFeature',
            col: true,
            ti: '.AbstractOfferingType.RelatedFeature'
          }]
      }, {
        ln: 'NotificationBrokerMetadataType',
        bti: '.NotificationProducerMetadataType',
        ps: [{
            n: 'requiresRegistration',
            ti: 'Boolean'
          }]
      }, {
        ln: 'ExtensibleRequestPropertyType',
        ps: [{
            n: 'extensibleRequest',
            mx: false,
            dom: false,
            en: 'ExtensibleRequest',
            ti: '.ExtensibleRequestType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        ln: 'NotificationProducerMetadataType.ProducerEndpoint',
        tn: null,
        ps: [{
            n: 'endpointReference',
            en: {
              lp: 'EndpointReference',
              ns: 'http:\/\/www.w3.org\/2005\/08\/addressing'
            },
            ti: 'WS_Addr_1_0_Core.EndpointReferenceType'
          }]
      }, {
        ln: 'SensorDescriptionUpdatedType',
        bti: '.SensorChangedType',
        ps: [{
            n: 'validTime',
            ti: '.SensorDescriptionUpdatedType.ValidTime'
          }]
      }, {
        ln: 'NotificationProducerMetadataType.ServedTopics',
        tn: null,
        ps: [{
            n: 'topicSet',
            en: {
              lp: 'TopicSet',
              ns: 'http:\/\/docs.oasis-open.org\/wsn\/t-1'
            },
            ti: 'WSN_T_1.TopicSetType'
          }]
      }, {
        ln: 'FeatureRelationshipType',
        ps: [{
            n: 'role'
          }, {
            n: 'target',
            ti: 'GML_3_2_1.FeaturePropertyType'
          }]
      }, {
        ln: 'SensorDescriptionUpdatedType.ValidTime',
        tn: null,
        ps: [{
            n: 'abstractTimeGeometricPrimitive',
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractTimeGeometricPrimitive',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.AbstractTimeGeometricPrimitiveType',
            t: 'er'
          }]
      }, {
        ln: 'DescribeSensorType',
        bti: '.ExtensibleRequestType',
        ps: [{
            n: 'procedure'
          }, {
            n: 'procedureDescriptionFormat'
          }, {
            n: 'validTime',
            ti: '.DescribeSensorType.ValidTime'
          }]
      }, {
        ln: 'FilterDialectMetadataType',
        bti: '.AbstractSWESType',
        ps: [{
            n: 'topicExpressionDialect',
            col: true
          }, {
            n: 'messageContentDialect',
            col: true
          }, {
            n: 'producerPropertiesDialect',
            col: true
          }]
      }, {
        ln: 'OfferingChangedPropertyType',
        ps: [{
            n: 'offeringChanged',
            en: 'OfferingChanged',
            ti: '.OfferingChangedType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
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
        t: 'enum',
        ln: 'EventCodeEnumerationType',
        vs: ['CapabilitiesChanged', 'OfferingAdded', 'OfferingDeleted', 'SensorDescriptionUpdated', 'SensorInserted']
      }],
    eis: [{
        en: 'SensorDescription',
        ti: '.SensorDescriptionType'
      }, {
        en: 'NotificationBrokerMetadata',
        ti: '.NotificationBrokerMetadataType',
        sh: 'NotificationProducerMetadata'
      }, {
        en: 'UpdateSensorDescription',
        ti: '.UpdateSensorDescriptionType',
        sh: 'ExtensibleRequest'
      }, {
        en: 'SensorDescriptionUpdated',
        ti: '.SensorDescriptionUpdatedType',
        sh: 'SensorChanged'
      }, {
        en: 'OfferingChanged',
        ti: '.OfferingChangedType',
        sh: 'SWESEvent'
      }, {
        en: 'InsertSensor',
        ti: '.InsertSensorType',
        sh: 'ExtensibleRequest'
      }, {
        en: 'DescribeSensorResponse',
        ti: '.DescribeSensorResponseType',
        sh: 'ExtensibleResponse'
      }, {
        en: 'DescribeSensor',
        ti: '.DescribeSensorType',
        sh: 'ExtensibleRequest'
      }, {
        en: 'SensorChanged',
        ti: '.SensorChangedType',
        sh: 'SWESEvent'
      }, {
        en: 'DeleteSensor',
        ti: '.DeleteSensorType',
        sh: 'ExtensibleRequest'
      }, {
        en: 'AbstractOffering',
        ti: '.AbstractOfferingType',
        sh: 'AbstractSWES'
      }, {
        en: 'SWESEvent',
        ti: '.SWESEventType',
        sh: 'AbstractSWES'
      }, {
        en: 'FeatureRelationship',
        ti: '.FeatureRelationshipType'
      }, {
        en: 'DeleteSensorResponse',
        ti: '.DeleteSensorResponseType',
        sh: 'ExtensibleResponse'
      }, {
        en: 'ExtensibleResponse',
        ti: '.ExtensibleResponseType'
      }, {
        en: 'InsertSensorResponse',
        ti: '.InsertSensorResponseType',
        sh: 'ExtensibleResponse'
      }, {
        en: 'InsertionMetadata',
        ti: '.InsertionMetadataType'
      }, {
        en: 'NotificationProducerMetadata',
        ti: '.NotificationProducerMetadataType',
        sh: 'AbstractSWES'
      }, {
        en: 'AbstractSWES',
        ti: '.AbstractSWESType'
      }, {
        en: 'UpdateSensorDescriptionResponse',
        ti: '.UpdateSensorDescriptionResponseType',
        sh: 'ExtensibleResponse'
      }, {
        en: 'ExtensibleRequest',
        ti: '.ExtensibleRequestType'
      }, {
        en: 'AbstractContents',
        ti: '.AbstractContentsType',
        sh: 'AbstractSWES'
      }, {
        en: 'FilterDialectMetadata',
        ti: '.FilterDialectMetadataType',
        sh: 'AbstractSWES'
      }]
  };
  return {
    SWES_2_0: SWES_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SWES_2_0_Module_Factory);
}
else {
  var SWES_2_0_Module = SWES_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SWES_2_0 = SWES_2_0_Module.SWES_2_0;
  }
  else {
    var SWES_2_0 = SWES_2_0_Module.SWES_2_0;
  }
}