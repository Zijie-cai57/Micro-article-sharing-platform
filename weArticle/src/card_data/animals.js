// 这里记录卡片信息
// 用变量引入图片
import A1CardImg from '../assets/image/animal/animal-1/card.jpg'
import A2CardImg from '../assets/image/animal/animal-2/card.jpg'
import A3CardImg from '../assets/image/animal/animal-3/card.jpg'
import A4CardImg from '../assets/image/animal/animal-4/card.jpg'
export default [
  {
    // id与文件名不要搞错！！！
    // 就按照这样的写法
    id: 'animal-1',
    title: '非洲草原上的狮子王国',
    image: A1CardImg,
    tags: ['狮子', '非洲', '哺乳动物'],
    description: '探索非洲草原上狮子的社会结构和狩猎习性，了解顶级掠食者的生存智慧。',
  },
  {
    id: 'animal-2',
    title: '亚马逊雨林的神秘居民：金刚鹦鹉',
    image: A2CardImg,
    tags: ['鸟类', '亚马逊', '热带'],
    description: '揭秘金刚鹦鹉绚丽羽毛下的生存智慧，以及它们在雨林生态系统中的重要作用。',
  },
  {
    id: 'animal-3',
    title: '深海中的发光生物：水母',
    image: A3CardImg,
    tags: ['水母', '深海', '奇幻生物'],
    description: '探索生活在极深海域的发光水母，了解它们的身体构造。',
  },
  {
    id: 'animal-4',
    title: '沙漠中的“节水冠军”：骆驼',
    image: A4CardImg,
    tags: ['骆驼', '沙漠', '适应能力'],
    description: '探索骆驼的驼峰、厚脚掌等身体结构如何帮助它们在干旱沙漠中长时间生存。',
  },
]