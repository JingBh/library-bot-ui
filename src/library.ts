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
