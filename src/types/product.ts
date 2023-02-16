export type Product = {
    id: number,
    preview: string,
    images: string[],
    title: string,
    subtitle?: string,
    description: string,
    price: number,
    availability: boolean,
    sizes?: string[],
    colors?: string[],
    models?: string[],
    stickerNumbers?: number[]
}
