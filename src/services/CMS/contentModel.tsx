export interface Page {
    id: number,
    title: string,
    slug: string
    sections: Section[],
    pricing_items: Pricing[]
    benefits: Benefits[]
}

export interface Section {
    id: number,
    name:string,
    title: string,
    section_text:string,
    assets: Asset[],
    content_blocks: Content[],
}

export interface Asset {
    id: number,
    title: string,
    type: string,
    asset: string,
    class_name:string,
    asset_content: string
}

export interface Content {
    id: number,
    title: string,
    type: string,
    class_name:string,
    content: string
}

export interface Pricing {
    id: number,
    page_id:number,
    title: string,
    content: string,
    options: Option[]
}

export interface Option {
    id: number,
    subscription_duration: string,
    price:number,
    ideal_audience: string,
    class_name:string,
    action: string,
    saving:number,
    features : Feature[]
}

export interface Feature {
    id: number,
    feature: string
}

export interface Benefits {
    id: number,
    page_id:number,
    title: string,
    content: string,
    benefit_listing: Benefit[]
}

export interface Benefit {
    id: number,
    type:string,
    comparison: string,
    benefit: string,
    class_name:string,
    top_class_name:string
}