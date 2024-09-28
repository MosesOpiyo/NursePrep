export interface User {
    id: number,
    username: string,
    email: string
}

export interface Token {
    access: string,
    refresh: string
}

export interface Subscription {
    
    id: 0,
    access: 'Monthly',
    pricing: '29',
    period: 'month',
    btn_period: 'Monthly',
    ideal: 'Ideal for students testing within two months',
    className: 'pricing-card p-8 flex flex-col gap-8 month relative'
}