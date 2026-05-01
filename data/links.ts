export interface LinkItem {
  id: string;
  title: string;
  url: string;
  createdAt?: any;
  updatedAt?: any;
}

export const dummyLinks: LinkItem[] = [
  {
    id: 'link-1',
    title: '인스타그램',
    url: 'https://instagram.com/',
  },
  {
    id: 'link-2',
    title: '유튜브',
    url: 'https://youtube.com/',
  },
  {
    id: 'link-3',
    title: '블로그',
    url: 'https://velog.io/',
  },
  {
    id: 'link-4',
    title: 'GitHub',
    url: 'https://github.com/',
  },
  {
    id: 'link-5',
    title: '포트폴리오',
    url: 'https://notion.so/',
  },
];
