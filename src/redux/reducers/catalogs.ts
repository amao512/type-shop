
export enum CatalogEnum {
    school = 'Школьные товары',
    summer = 'Летние товары',
    food = 'Продукты питания',
    garden = 'Сад и огород',
    beauty = 'Красота и здоровье',
    books = 'Книги',
    house = 'Ваш дом',
    electronics = 'Электроника'
}

export type CatalogType = {
    name: string
    path: string
}

const initialState = {
    all: [
        { name: CatalogEnum.school, path: 'school-supplies' },
        { name: CatalogEnum.summer, path: 'summer-supplies' },
        { name: CatalogEnum.food, path: 'food' },
        { name: CatalogEnum.beauty, path: 'beauty-health' },
        { name: CatalogEnum.garden, path: 'garden' },
        { name: CatalogEnum.books, path: 'books' },
        { name: CatalogEnum.house, path: 'u-house' },
        { name: CatalogEnum.electronics, path: 'electronics' }
    ] as Array<CatalogType>
}

type InitialStateType = typeof initialState

const catalogsReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type){
        default:
            return state
    }
}

export default catalogsReducer