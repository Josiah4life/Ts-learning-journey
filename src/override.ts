class BaseClass {
  method() {
    console.log("BaseClass method");
  }
}

class SubClass extends BaseClass {
  method() {
    console.log("SubClass method");
  }
}

const instance = new SubClass();
