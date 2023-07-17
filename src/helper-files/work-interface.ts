export interface Work{
    id?: number;
    name: string;
    date: string;
    blurb: string;
    description: string;
    imgs: string[];
    tags?: string[];
    links?: string[];
}