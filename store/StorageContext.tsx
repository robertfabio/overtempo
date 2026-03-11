import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV({
  id: `overtempo-storage`,
  path: `/storage`,
  encryptionKey: 'temporary-encryption-key',
  mode: 'multi-process',
  readOnly: false
})