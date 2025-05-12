type User = {
  readonly id: number
  name: string
  age: number
}



const updateUser = (user: User) {
  user.name = "Jane Doe"
  user.age = 30

  // @ts-expect-error Should not be able to modify readonly
  user.id = 1
}


// Create a Read-Only Properties

type SearchParams = {
  q?: string;
  page?: number;
  pageSize?: number
  sort?: string
  order?: "asc" | "desc"
}

const handleSearchParams = (search: Readonly<SearchParams>) => {
  //Do something with the searchParams

  //@ts-expect-error Should not be able to modify readonly
  search.page = 1

  
  //@ts-expect-error Should not be able to modify readonly
  search.q = "test"

  //@ts-expect-error Should not be able to modify readonly
  search.sort = "name"

  //@ts-expect-error Should not be able to modify readonly
  search.pageSize = 10

  //@ts-expect-error Should not be able to modify readonly
  search.order = "desc"


}


//Deeply Apply Read-Only Properties to an Object

type ButtonAttributes = {
  type: "button" | "submit" | "reset"
}

const modifyButton = (attributes: ButtonAttributes) => {

}

const buttonAttributes = {
  type: "button",
} as const 

modifyButton(buttonAttributes)


// Comparing Object.freeze with as const.

type ButtonType = "button" | "submit" | "reset"

type ButtonAttributes1 = {
  cancel: {
    type: ButtonType
  }
  confirm: {
    type: 
      ButtonType
    
  }
}


const modifyButtons = (attributes: ButtonAttributes1) => {} 

const buttonAttributes1 = Object.freeze({
  cancel: {
    type: "button"
  },
  confirm: {
    type: 
      "button"
    
  }


})

//Object.freeze only works at top level and it can be change at one level down we can instead use as cont for the buttonAttributes1
//@ts-expect-error
modifyButtons(buttonAttributes1)


// Try uncommenting this 
import "@total-typescript/ts-reset"

const users = ["matt", "sofia", "waqas"] as const 

users.includes("bryan")
users.indexOf("bryan")