export interface IChuckJoke {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export interface IFavorite {
  id: string
  icon_url: string
  value: string
}

export interface IFilter {
  total: number
  result: IChuckJoke[]
}