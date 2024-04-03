export interface response {
    statusCode: number,
    response: Array<any> | Object | undefined,
    message: string
}

export interface products {
    title: string,
    img: string,
    price: number,
    info: string,
    inCart: boolean,
    count: 0,
    total: 0,
    subscriptionDays: 0,
    time: string
}

export interface userDetails {
    name: string,
    email: string,
    password: string,
}