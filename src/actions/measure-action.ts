'use server';
const objects = [
  {
    item: '铅笔',
    length: 0.19,
    type: 'length',
    description: '常见铅笔长度约为 19cm',
  },
  {
    item: 'A4纸',
    length: 0.297,
    type: 'length',
    description: 'A4纸长度约为 29.7cm',
  },
  {
    item: 'A4纸',
    length: 0.21,
    type: 'width',
    description: 'A4纸宽度约为 21.0cm',
  },
  {
    item: '成人手掌',
    length: 0.085,
    type: 'width',
    description: '成人手掌宽度约为 8.5cm',
  },
  {
    item: '标准篮球架',
    length: 3.05,
    type: 'height',
    description: '标准篮球架高度约为 3.05m',
  },
  {
    item: '轿车',
    length: 4,
    type: 'length',
    description: '轿车一般的长度在 3.8m 到 4.3m 区间，此处取 4.0m',
  },
  {
    item: '标准足球',
    length: 105,
    type: 'length',
    description: '标准足球长度约为 105cm',
  },
  {
    item: '成人',
    length: 1.7,
    tyle: 'height',
    description: '正常成年人平均身高约为 1.7cm',
  },
  {
    item: '房门',
    length: 2,
    type: 'height',
    description: '常见家用房门的高度约为 2m',
  },
];
const convertUnit2Meter = (unit: string, length: number) => {
  switch (unit) {
    case 'cm':
      return length / 100;
    case 'mm':
      return length / 1000;

    default:
      return length;
  }
};
export const measureAction = async (unit: string, length: number | string) => {
  if (typeof length === 'string') {
    length = parseFloat(length);
  }
  if (isNaN(length)) {
    return { message: '请输入一个有效的数字' };
  }
  const len = convertUnit2Meter(unit, length);
  // 随机取一个 objects 中的对象
  const object = objects[Math.floor(Math.random() * objects.length)];
  const { item, length: objectLength, type } = object;

  return {
    message: `
    相当于 ${(len / objectLength).toFixed(2)} 个${item}${type === 'length' ? '长' : type === 'width' ? '宽' : '高'}!
    `,
  };
};
