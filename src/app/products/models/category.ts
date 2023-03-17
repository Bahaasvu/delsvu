export interface category {
    Id:any,
    Name:string,
}
export interface store {
    Id :number,
    StoreName: string,
    StoreUsertId: string,
    StoreAddress :string,
    StorePhone: string,
    StoreCategoryId: number,
    StoreDescription: string,
    StoreImage :string,
    StoreHStart :Date,
    StoreHClose :Date,
}
