const TypeofConst = (value: any) => typeof value;
declare type Typeof = ReturnType<typeof TypeofConst>;