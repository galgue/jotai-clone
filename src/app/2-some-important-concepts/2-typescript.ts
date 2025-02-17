

/// 1. generics

/// 1.1 variables

type Box<T> = {
  value: T;
};

const box: Box<number> = {
  value: 1,
};

const box2: Box<string> = {
  value: "hello",
};











/// 1.2 functions

type BoxCreate<T> = (value: T) => Box<T>;

const boxCreate: BoxCreate<number> = (value) => ({
  value,
});

const boxCreate2: BoxCreate<string> = (value) => ({
  value,
});














/// 1.3 functions?

type BoxCreateQuestionMark = <T>(value: T) => Box<T>;

const boxCreate3: BoxCreateQuestionMark = (value) => ({
  value,
});










const weirdBox = boxCreate3(1);









const evenWeirderBox = boxCreate3('hello');









const theWeirdestBox = boxCreate3("I don't like avocado" as const);







/// 2. overloads

function createAmirBox(value: 'amir'): Box<number> {
  return {
    value: 1,
  };
}

function createMosheBox(value: 'moshe'): Box<string> {
  return {
    value: "moshe",
  };
}

function createOranBox(value: 'oran'): Box<boolean> {
  return {
    value: true,
  };
}













function createOverloadBox(value: 'amir'): Box<number>;
function createOverloadBox(value: 'moshe'): Box<string>;
function createOverloadBox(value: 'oran'): Box<boolean>;

function createOverloadBox(value: 'amir' | 'moshe' | 'oran') {
  if (value === 'amir') {
    return {
      value: 1,
    };
  } else if (value === 'moshe') {
    return {
      value: "moshe",
    };
  } else {
    return {
      value: true,
    };
  }
}










const amirBox = createOverloadBox('amir');

const mosheBox = createOverloadBox('moshe');

const oranBox = createOverloadBox('oran');









/// 2.1 order is important

function iHateBoxes<T>(value: T): Box<string>;
function iHateBoxes<T>(value: () => T): Box<number>;

function iHateBoxes<T>(value: T | (() => T)) {
  if (typeof value === 'function') {
    return {
      value: 1,
    };
  } else {
    return {
      value: "moshe",
    };
  }
}

const iHateBoxes1 = iHateBoxes(() => 1);