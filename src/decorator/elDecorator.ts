const pointDecorate = (el: Array<any>): any => {
  el.forEach(element => {
    element.name = "PointTest";
    element.size = 6;
  });
  return el;
};

const lineDecorate = (el: Array<any>): any => {
  el.forEach(element => {
    element.name = "LineTest";
    element.length = 233;
  });
  return el;
};

export const elDecorate = (el: Array<any>): any => {
  el.forEach(item => {
    item.mark === "point" && pointDecorate(el);
    item.mark === "line" && lineDecorate(el);
  });
};
