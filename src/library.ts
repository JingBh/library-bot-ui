export type SearchType =
  'TITLE' | // 书名
  'AUTHER' | // 作者
  'PUBLISH' | // 出版者
  'CALLNO' | // 索书号
  'LANAGE' | // 语种
  'DATATYPE' | // 文献类型
  'SUBJECT' | // 主题词
  'ISBN' | // 标准编码
  'BARCODE' // 条形码

export const searchTypes = [
  { value: 'TITLE', label: '书名' },
  { value: 'AUTHER', label: '作者' },
  { value: 'PUBLISH', label: '出版者' },
  { value: 'CALLNO', label: '索书号' },
  { value: 'LANAGE', label: '语种' },
  { value: 'DATATYPE', label: '文献类型' },
  { value: 'SUBJECT', label: '主题词' },
  { value: 'ISBN', label: '标准编码' },
  { value: 'BARCODE', label: '条形码' }
]

interface APIObject<T> {
  id: number | string;
  type: string;
  fields: T;
}

type APIList<T> = APIObject<{
  FItems: Array<T>;
  FCount: number;
}>

type BookLocalInfo = APIObject<{
  AcessNo: string; // 登录号
  BarCode: string; // 条形码
  LocalName: string; // 馆藏地址
  BorryState: string; // 外借状态
  Price: string; // 价格
}>

export type BookInfo = APIObject<{
  MainKay: string; // 主键码
  DBKay: string; // 库键码
  BTitle: string; // 题名
  BAuther: string; // 责任者
  BPublish: string; // 出版者
  BPublishDay: string; // 出版日期
  BPublishLocal: string; // 出版地
  BCallNo: string; // 索书号
  BISBN: string; // 标准编码
  BLangusge: string; // 语种代码
  LocalList?: APIList<BookLocalInfo>;
}>

export interface APIResult<T> {
  result: APIObject<{
    Msg: string;
    ReturnValue: number;
    Data: T;
  }>[];
}

export type SearchBookResult = APIResult<APIList<BookInfo>>
