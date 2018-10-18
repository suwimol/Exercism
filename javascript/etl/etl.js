export default function transform(data) {
  const dataList = Object.entries(data);
  let newHash = {};

  for (let k = 0; k < dataList.length; k++) {
    const values = dataList[k][1]
    const score = Number(dataList[k][0])
    for (let i = 0; i < values.length; i++) {
      newHash[values[i].toLowerCase()] = score
    }
  }

  return newHash;
}
