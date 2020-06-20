module.exports = {
  name: 'simplescrum',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/simplescrum',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
