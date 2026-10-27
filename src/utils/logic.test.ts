import test from 'node:test';
import assert from 'node:assert/strict';
import { consolidateTripServices } from './multiTripConsolidator';
import { searchServices } from './searchHelper';
import { DECISION_TREE } from '../data/decisionTreeData';

test('consolidateTripServices consolidates overlapping documents across services', () => {
  const result = consolidateTripServices(['ktp-el-baru', 'akta-kelahiran']);

  assert.equal(result.selectedServices.length, 2);
  // Both services require Kartu Keluarga, it should be merged
  const kkDoc = result.consolidatedDocuments.find(d => d.id === 'doc-kk-ktp' || d.name.toLowerCase().includes('kartu keluarga'));
  assert.ok(kkDoc, 'Kartu Keluarga should be present in consolidated documents');
  assert.ok(kkDoc.requiredByServices.length >= 2, 'Kartu Keluarga should be required by both services');

  // ktp-el-baru requires biometric recording
  assert.equal(result.hasBiometricNeed, true);
  assert.ok(result.targetOffices.length >= 1);
});

test('searchServices handles natural Indonesian queries correctly', () => {
  const ktpHilangResults = searchServices('ktp hilang');
  assert.ok(ktpHilangResults.some(s => s.id === 'ktp-el-hilang-rusak'));

  const bayiResults = searchServices('mau urus bayi baru lahir');
  assert.ok(bayiResults.some(s => s.id === 'akta-kelahiran'));

  const filteredResults = searchServices('', 'ktp');
  assert.ok(filteredResults.every(s => s.category === 'ktp'));
});

test('DECISION_TREE has valid branching structure', () => {
  assert.ok(DECISION_TREE['start']);
  const startOptions = DECISION_TREE['start'].options;
  assert.ok(startOptions.length >= 5);

  const ktpOption = startOptions.find(o => o.label.includes('KTP'));
  assert.ok(ktpOption);
  assert.ok(ktpOption.nextId && DECISION_TREE[ktpOption.nextId]);

  const ktpBranch = DECISION_TREE[ktpOption.nextId!];
  const firstTime = ktpBranch.options.find(o => o.label.includes('Belum Pernah'));
  assert.ok(firstTime?.result);
  assert.equal(firstTime.result.canOnline, false);
});
