import { mockDefaultApplication } from './mockDefaultApplication';

export const mockApplications = [
  mockDefaultApplication,
  {
    chainName: 'Coleti',
    chainID: '00000002',
    state: 'active',
    address: 'col123bhithjdq8szo3poyqe5dsxwrnazyqnzqhsy',
    isDefault: true,
    lastCertificateHeight: 800,
    lastUpdated: 123456788,
  },
  {
    chainName: 'DoEdu',
    chainID: '00000003',
    state: 'active',
    address: 'doe123bhithjdq8szo3poyqe5dsxwrnazyqnzqhsy',
    isDefault: false,
    lastCertificateHeight: 700,
    lastUpdated: 123456787,
  },
  {
    chainName: 'Enevti',
    chainID: '00000004',
    state: 'active',
    address: 'env123bhithjdq8szo3poyqe5dsxwrnazyqnzqhsy',
    isDefault: true,
    lastCertificateHeight: 600,
    lastUpdated: 123456786,
  },
  {
    chainName: 'Kalipo',
    chainID: '00000005',
    state: 'active',
    address: 'tkn123bhithjdq8szo3poyqe5dsxwrnazyqnzqhsy',
    isDefault: false,
    lastCertificateHeight: 500,
    lastUpdated: 123456785,
  },
];
