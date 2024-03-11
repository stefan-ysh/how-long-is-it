'use server';
const objects = [
  { item: '铅笔', length: 0.19 },
  { item: 'A4纸', length: 2.97 },
  { item: '智能手机', length: 1.55 },
  { item: '成人手掌宽度', length: 0.85 },
  { item: '成人手臂展开长度', length: 17.0 },
  { item: '标准篮球架高度', length: 30.5 },
  { item: '单人床', length: 20.0 },
  { item: '轿车', length: 45.0 },
  { item: '标准足球', length: 0.07 },
  { item: '成人身高', length: 1.75 },
  { item: '标准门高', length: 2.04 },
  { item: '标准游泳池长度', length: 25 },
  { item: '标准跑道一圈', length: 400 },
  { item: '电视（55英寸）', length: 1.3 },
  { item: '冰箱（双门）', length: 1.8 },
  { item: '洗衣机（前开门）', length: 0.6 },
  { item: '沙发（三人座）', length: 2.2 },
  { item: '餐桌（圆形）', length: 1.5 },
  { item: '笔记本电脑（13英寸）', length: 0.33 },
  { item: '微波炉', length: 0.4 },
  { item: '书架（标准尺寸）', length: 1.8 },
];
export const measureAction = async (length: number | string) => {
  if (typeof length === 'string') {
    length = parseFloat(length);
  }
  if (isNaN(length)) {
    return { message: '请输入一个有效的数字' };
  }
  // 随机取一个 objects 中的对象
  const object = objects[Math.floor(Math.random() * objects.length)];
  const { item, length: objectLength } = object;

  return { message: `相当于 ${(length / objectLength).toFixed(2)} 个${item}!` };
};
