export interface Page {
    id: number,
    title: string,
    slug: string
    sections: Section[]
}

export interface Section {
    id: number,
    title: string,
    assets: Asset[],
    content_blocks: Content[],
}

export interface Asset {
    id: number,
    title: string,
    type: string,
    asset: string
    
}

export interface Content {
    id: number,
    titls: string,
    type: string,
    content: string
}