export interface ImageVariant {
  color: string;
  images: string;
  memory:MemoryOption[];
}

export interface MemoryOption {
  space: string;
  price: number;
}

export class Product {
  name: string;
  url: string;
  variants: ImageVariant[];
  memory: MemoryOption[];
  updated: Date;

  constructor(data: any) {
    this.name = data.name;
    this.url = data.url;
    this.variants = data.variants;
    this.memory = data.memory;
    this.updated = new Date(data.updated);
  }
}
